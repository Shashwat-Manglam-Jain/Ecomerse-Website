import { NavLink } from "react-router-dom";
import { styled } from "styled-components";


const ServicesItems = ({temp}) => {

  
  return (

    <Wrapper>
       <h1 className="text">All Services</h1>
       <div className="hole">
       {temp.map((Elem)=>{
                const {name,images}=Elem;
                return(<> 
                <div className="card" key="name">
                  
                  <div className="img">
                    <img src={images} alt="" />
                  </div>
                  <div className="name">
                    <h3>{name}</h3>
                  </div>
                  <div className="eassy">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eos
                    natus eligendi delectus veniam maiores praesentium exercitationem
                    dolores qui fugit, voluptates ad error, iusto accusamus?
                  </div>
                  <button className="btn"><NavLink to="services" className="none">......More.....</NavLink></button>
              <br /><br />  </div>
             </>);
            })}
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
  .text{
    
    font-size: 3rem;

    position:relative;
   bottom:2.6rem;
   width:16rem;
    left:42rem;
    
  }
  .text:hover{box-shadow:0px 6px 0px 0px #fe6a85;
    color:#98adf5;
    
    cursor: pointer;}
  .hole{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
   
    

  }
  img{
    width:16rem;
    position:relative;
    left:1rem;
    padding-bottom:1rem;

  }
  .img{ position:relative;}
  .img:hover::after {
    content: "";
    position: absolute; 
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black; 
    opacity: 0.5;
    z-index: 2; 
  }
  






  .card{
    padding: 12px 30px;
    border: solid white 2px;
    background:${({theme})=>theme.colors.bg};
 margin:0 4rem;
  
  }
 
  .name{position:relative;
  text-align:center;
    padding-bottom:1rem;
  font-size:2rem}
  .eassy{
color:#474747;
padding-bottom:1rem;
}

  .btn{list-style: none;
    position:relative;
    left:3.5rem;
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
  .none{ text-decoration: none;
    color:white;
  }
  
`;
export default ServicesItems;
