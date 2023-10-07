const reducer=(state,action)=>{


if(action.type==="UPDATE_HOME"){
return{ ...state,
name:action.plyboy.name,
images:action.plyboy.images,
text:action.plyboy.text
}}

if(action.type==="UPDATE_About"){
    return{ ...state,
    name:action.plyboy.name,
    images:action.plyboy.images,
    text:action.plyboy.text
    }}


return state}


    export default reducer