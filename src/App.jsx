import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./assets/About";
import Contact from "./assets/Contact";
import Services from "./assets/Services";
import Home from "./assets/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { ThemeProvider } from "styled-components";
import "./assets/GlobalStyle.css";
import Error from "./assets/Error";
import GoToTop from "./Components/GoToTop";





const App = () => {
  const theme ={colors:{bg:"#f3f6fb",
  heading:"#f63667",
text:"#162640",
btn:"#fe6a85",
footer_bg:"#2962ff",
nav_bg:"#ffffff",
gradient:"linear-gradient(270deg, #a5d9fe 20%, #2962ff 40%,#ffffff 10% ,#3a5368 30%)",
  } , media:{Mobile:"768px" , tab:"998px"}
};
  return (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
     <Header />
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Error />} />

       
      </Routes>
  <GoToTop/>
      <Footer />
    </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
