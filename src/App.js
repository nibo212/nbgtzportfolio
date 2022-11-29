import React from 'react';
import Home from './pages/Home.js';
import Knowledges from './pages/Knowledges';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import Aboutme from './pages/Aboutme';
import Contact from './pages/Contact';
import Experiences from './pages/Experiences';
import Navbar from './components/Navbar.js';

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
          <Experiences />
          <Projects />
          <Contact />
          </div>
      </div>
    </>
  );
};

export default App;

// {console.log('hello')}
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />}></Route>
//           <Route path="/aboutme" element={<Aboutme />}></Route>
//           <Route path="/contact" element={<Contact />}></Route>
//           <Route path="/experiences" element={<Experiences />}></Route>
//           <Route path="/knowledges" element={<Knowledges />}></Route>
//           <Route path="/projects" element={<Projects />}></Route>
//           <Route path="*" element={<NotFound />}></Route>
//         </Routes>
//       </Router>