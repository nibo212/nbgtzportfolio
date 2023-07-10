import React from 'react';
import Home from './pages/Home.js';
import Knowledges from './pages/Knowledges';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import Aboutme from './pages/Aboutme';
import Contact from './pages/Contact';
import Experiences from './pages/Experiences';
import Navbar from './components/Navbar.js';
import { ParallaxProvider } from 'react-scroll-parallax';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";




const App = () => {
  return (
    <>
      <div className='Main'>
        <Navbar />
        <div className='MainContent'>
          <Home />
          <Aboutme />
          <Knowledges />
          <Projects />
          <Experiences />
          <ParallaxProvider>
            <Contact />
          </ParallaxProvider>
          </div>
      </div>
    </>
  );
};

export default App;

