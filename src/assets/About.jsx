
import { useEffect } from 'react';
import HeroSection from '../Components/HeroSection';
import { useGlobalContext } from './Context';

const About = () => {
  // const data = {
  //   name: 'Shashwat Manglam',
  //   image: './images/about.svg',
  // };
  const {updateAbout}=useGlobalContext();
useEffect(() => {
  updateAbout()
  }
, [])

  return <HeroSection />;
};

export default About;
