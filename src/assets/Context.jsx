import React, { useContext,  useReducer } from 'react'
import reducer from './reducer';
const AppContext= React.createContext() ;

const initial={
    name:"",
    images:"",
    
    
};


const AppProvider=({children})=>{
const [state, dispatch] = useReducer(reducer,initial);
 const updateHome=()=>{
    return dispatch({
        type:"UPDATE_HOME",
        plyboy:
        {name:"ENGINEER SHASHWAT MANGLAM",
    images:"./images/tec.svg",
    text:"Shashwat Manglam Jain",

}
    })
 }
 const updateAbout=()=>{
    return dispatch({
        type:"UPDATE_About",
        plyboy:
        {name:"SHASHWAT MANGLAM",
    images:"./images/about.svg",
    text:"Shashwat Manglam Jain"}
    })

 }

 
     
   


return   <AppContext.Provider value={{...state,updateHome,updateAbout}}>{children}</AppContext.Provider>
};

const useGlobalContext=()=>{return useContext(AppContext)};



export {AppContext,AppProvider,useGlobalContext };