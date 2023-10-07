import { styled } from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <h1 className="text">Contact Us</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.3115118589253!2d77.41957977510744!3d23.304453805750654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c69f8561cc753%3A0x1b69b2dbddaca47c!2zUGVvcGxl4oCZcyBNYWxs!5e0!3m2!1sen!2sin!4v1693512707883!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{border:0}}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <br /><br /><br /><br />
<div className="whole">
  <form action="https://formspree.io/f/mleyngrp" method="Post" className="form">
    <input type="text" placeholder="UserName" name="UserName" autoComplete="off" required/>
    <input type="email" placeholder="Email" name="Email" autoComplete="off" required/>
    <textarea className="des"  placeholder="DESCRIPTION" name="message" cols="30" rows="6" autoComplete="off" required/>
    <button type="submit" value="send" className="btn">SUBMIT</button>
    <br /><br />
  </form>
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

.form{display: flex;
  flex-direction: column;
  gap: 2rem;
margin:auto;}

.form input{
  width:60%;
  height:4rem;
  position:relative;
  left:20rem;
  padding:1rem;
  font-size:1.4rem;
justify-item:center;
  
}

.des{width:60%;
  height:14rem;
  position:relative;
  left:20rem;
  padding:1rem;
  font-size:1.4rem
 

}












.text{
  text-align: center;
  font-size: 3rem;
  text-align: center;
  position:relative;
 bottom:3rem;
 width:18rem;
 left:39rem;
 cursor: pointer;
  
}
.text:hover{box-shadow:0px 7px 0px 0px #fe6a85;
  color:#98adf5;
}
.btn{list-style: none;
  position:relative;
  height:4rem;
  width:10rem;
  background:${({theme})=>theme.colors.btn};
  color:#ffffff;
  font-size:1rem;
  border:none;
z-index:5;
left:41rem;
padding:1rem;
font-size:1.4rem;
justify-item:center;

}
.btn:hover{font-size:1.3rem;
  background:#f63667ff;
  transition: background-color 0.3s ease-in-out;
 
}
.none{ text-decoration: none;
  color:white;
}



`;
export default Contact;
