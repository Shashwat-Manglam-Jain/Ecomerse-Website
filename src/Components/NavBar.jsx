import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const NavBar = () => {
  return (
    <Nav><br />
  <div className="whole">
    <ul className="olist">
        <li>
            <NavLink className="home" to="/">Home</NavLink>
        </li>
        <li>
            <NavLink className="about" to="/about">About</NavLink>
        </li>
        <li>
            <NavLink className="contact" to="/contact">Contact</NavLink>
        </li>
        <li>
            <NavLink className="services" to="/services">Services</NavLink>
        </li>
       
    </ul>
    
</div>

</Nav>
 );
};
const Nav=styled.nav`
*{z-index:5;
    padding:0;
    margin:0;
    box-sizing:border-box;
    display:flex;
    
}
.olist{
    gap:95px;
    justify-content:flex-end;
   
    width:100%;
    height:7vh;
    position:relative;
    padding-left:2px;
    padding-right:120px;
   bottom:65px;
   
}
li{ list-style: none;


    .home,.about,.contact,.services{
        text-decoration: none;
        color:black;
        font-weight: 400;
        text-align:centre;
        
    }
    
   
    }

    .whole{font-size:2rem;
        text-decoration:none;
        color:black;
        justify-content:flex-end;
        
       
        }
       .services:hover{
           box-shadow:0px 7px 0px 0px #fe6a85;
           color:#98adf5
        }
        .home:hover{
            box-shadow:0px 7px 0px 0px #fe6a85;
            color:#98adf5
         }
         .contact:hover{
            box-shadow:0px 7px 0px 0px #fe6a85;
            color:#98adf5
         }
         .about:hover{
            box-shadow:0px 7px 0px 0px #fe6a85;
            color:#98adf5
         }
         `
          
         
              
           
        
            
export default NavBar                            