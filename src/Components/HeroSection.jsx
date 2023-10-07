import { styled } from "styled-components"
import { useGlobalContext } from "../assets/Context"



const HeroSection = () => {
  const {name,images,text}=useGlobalContext();
  return (
    <Wrapper>
      <div className="full">
        <div className="text">
<p className="this">THIS IS ME</p>
<h1 className="shas">{name}</h1><h1 className="jain">JAIN</h1>
<p className="write">"I'm {text }. A Full Stack Developer , Youtuber
 and Freelancer. Believe in myself. Persevere, Success is earned."</p><br />
 <button className="btn">HIRE ME</button>    <br /><br />
        </div>

        <div className="img"><img src={images} alt="CSE student" /></div>
      </div>
  
    </Wrapper>
  )
}
const Wrapper=styled.section`

*{
  padding:0;
  margin:0;
  box-sizing:border-box;
background:${({theme})=>theme.colors.bg};

}

.full{ display: grid;
  grid-template-columns: 1fr 1fr; 
  gap: 20px;
  width:100%;
  position:relative;
  bottom:3.2rem
}


img{width:45rem
}
.text{padding-left:10rem;
  padding-top:3rem;
font-size:2rem;

}
.this{
  position:relative;
  left:10rem;
  color:#8b8886

}
.shas{ position:relative;
  left:4rem;
  font-size:4rem;}
.jain{ position:relative;
  left:10rem;
  font-size:4rem;}

.write{color:#8b8886}


.btn{
  position:relative;
  left:10rem;
  height:42px;
  width:10rem;
  background:${({theme})=>theme.colors.btn};
  color:#ffffff;
  font-size:1rem;
  border:none;
}
.btn:hover{font-size:0.93rem;
  background:#f63667ff;
  transition: background-color 0.3s ease-in-out;
}



`
export default HeroSection
