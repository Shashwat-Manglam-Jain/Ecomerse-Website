import { useEffect } from "react"
import HeroSection from "../Components/HeroSection"
import { useGlobalContext } from "./Context"
import Contact from "./Contact";
import Services from "./Services";


const Home = () => {

    // const data={
    //     image:"./images/tec.svg",
    //     name:"Engineer Shashwat"
    // }
const {updateHome}=useGlobalContext();
useEffect(() => {
    updateHome()
  }
, [])



  return (
    <>
      <HeroSection/><br /><br />
     <br /> <br /> <Services/><br />
      <br /><br /><br /><br /><Contact/><br /><br />
      
     
      </>
  )
}

export default Home
