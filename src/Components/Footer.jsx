import { styled } from "styled-components";
import {AiOutlineYoutube } from 'react-icons/ai';
import {BsInstagram } from 'react-icons/Bs';
import {AiOutlineWhatsApp} from 'react-icons/ai';


const Footer = () => {
  return (
    <Wrapper>
      <div className="whole">
        <div className="section">
          <h2 className="us">
            Ready to get started ?<br />
            Talk to us today
          </h2>
          <button className="btn">GET STARTED</button>
        </div>






        <div className="shas">


           <div className="jain">

              <h2 className="man">Engineer Shashwat Jain</h2>
         <br /> <p className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, debitis at perspiciatis optio earum illum porro quisquam! Voluptatum ea incidunt, et ex facere obcaecati dicta.
          </p>
          
          </div>




        
          <div className="sub">
            
            <h2 className="up">Subscribe to stay connected</h2>
       <br />   <input type="email" placeholder="Your E-Mail" required autoComplete="off" />
          <br />
       <br />   <button className="btn">SUBSCRIBE</button>
          
          </div>




          <div className="follow">
            
             <h2>Follow US</h2>
      <br />    <div className="icons"><AiOutlineYoutube className="you"/>
        <br />  <BsInstagram className="ins"/>
        <br />  <AiOutlineWhatsApp className="what"/></div>

        </div>

<div className="call"><h2>Call Us</h2><br />
+91 942442XXXX</div>


        </div>


        <hr />


        <div className="two">
          <div className="date"><h2 className="wat">@ {new Date().getDate()}/{new Date().getMonth()}/{new Date().getFullYear()} Shashwat.M.Jain . <br />All Rights Reserved</h2></div>
          <div className="privacy"><h2 className="poli">Privacy Policy </h2>
          <h2 className="terms">TERMS & CONDITIONS</h2></div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .para{
    color:#9093a2ff;
  }
  .btn {
    position: relative;
    
    height: 42px;
    width: 10rem;
    background: ${({ theme }) => theme.colors.btn};
    color: #ffffff;
    font-size: 1rem;
    border: none;
  }
  .ins{
    font-size: 2.5rem;
    padding-top: 6px;
    padding-bottom: 6px;
    position: relative;
    right:5px;
  }
  .btn:hover {
    font-size: 0.93rem;
    background: #f63667ff;
    transition: background-color 0.3s ease-in-out;
  }
  .icons{font-size: 2rem;
    display: grid;
    grid-template-columns: repeat(3 , 1fr);
    
   gap:20px;

  }
  .you{
    font-size:2.3rem
  }
  .section{width: 60%;
    height: 6rem;
    background:#f3f6fb;
display: grid;
grid-template-columns: repeat(2 , 1fr);
text-align: center;
gap:16rem;

justify-items: center;
color:black;
margin-left: 19rem;
position: relative;
top: 2rem;
z-index: 2;
padding-top: 25px;
btn{position: relative;
  left:12rem;
}

}


.call{position: relative;
  right:7.6rem;}


  
.jain{padding-right: 2rem;

}
.what{ position: relative;
bottom:3.6rem;
z-index:3;
}

input{height: 3rem;
  text-align: left;
  width: 106%;}
.shas{background:#081432ff;
    display: grid;
    grid-template-columns: repeat(4 ,1fr);
    text-align: center;
    justify-self: center;
    justify-items: center;
    gap: 2rem;
    padding-left: 10rem;
    padding-right: 10rem;
    color:#ffffff;
   
    position: relative;
    
    height: 22rem;
    padding-top: 7rem;
    padding-right: 1rem;
    btn{position: relative;
      left:12rem;
      
    }

}
    .two{background:#081432ff;
      text-align: center;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        text-align: center;
        justify-self: center;
        justify-items: center;
        gap: 2rem;
        padding-left: 10rem;
        padding-right: 10rem;
        color:#ffffff;
        height: 11rem;
        padding: 3.5rem 14rem;
        color:#9093a2ff;
        font-size:.8rem
    }

 
`;

export default Footer;
