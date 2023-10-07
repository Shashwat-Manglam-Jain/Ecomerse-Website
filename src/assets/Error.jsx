
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

const Error = () => {
  return (
    <Wrapper>  <div className="hole">
      <img src="./images/error.svg" alt="" />
    <button className="btn"> <NavLink to="/" className="none">GO BACK</NavLink></button>
     
      </div>

    </Wrapper>
  )
}
const Wrapper=styled.section`
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
 
  
  }
  .btn{
    position:relative;
    left:-30rem;
    height:42px;
    width:10rem;
    background:${({theme})=>theme.colors.btn};
    color:#ffffff;
    font-size:1rem;
    border:none;
    bottom:30rem;
    text-align:center;
   
  }
  .btn:hover{font-size:0.93rem;
    background:#f63667ff;
    transition: background-color 0.3s ease-in-out;
  }
.whole{
    width:100%
}
img{
    justify-item:centre;
    position:relative;
    bottom:15rem;
    left:11rem
}
.none{ text-decoration: none;
    color:white;
  }



`
export default Error
