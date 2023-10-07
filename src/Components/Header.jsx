import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <MainHeader><br />
     <NavLink to="/"><img src="./images/Logo.svg" alt="Logo" /></NavLink>
     <NavBar/>
    </MainHeader>
  )
}
const MainHeader=styled.header`
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
    
    
}
img{
    position:relative;
    top: -0.4rem;
   height:55px;
   z-index:12;
   
 
   
}

























`
export default Header
