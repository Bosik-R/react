import React, { useState } from 'react';
import Sidebar from '../components/Siedebar/Sidebar';
import NavBar from '../components/NavBar/NavBar';
import Hero from '../components/Hero/Hero';
import Main from '../components/Main/Main';
import { HomeObjOne, HomeObjThree, HomeObjTwo } from '../components/Main/Data';
import Services from '../components/Services/Services';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Hero />
      <Main {...HomeObjOne}/>
      <Main {...HomeObjTwo}/>
      <Services />
      <Main {...HomeObjThree}/>
    </>
  )
}

export default Home;