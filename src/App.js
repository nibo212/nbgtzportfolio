import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import Aboutme from './pages/Aboutme';
import Contact from './pages/Contact';
import Experiences from './pages/Experiences';

const App = () => {
  return (
    <>
      {console.log('hello')}
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutme" element={<Aboutme />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/experiences" element={<Experiences />}></Route>
          <Route path="/knowledges" element={<Knowledges />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;