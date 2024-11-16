import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarItems from './NavbarItem';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const Wrapper = () => {
  return (
    <div className='wrapper'>
      <div className='header-container'>
        <h1 className='header'>UFLCD WEBPAGE</h1>
        <div className='gallery'>
          <img src={`${process.env.PUBLIC_URL}/images/20231123_211936_0000.png`} alt="Logo" />
        </div>
      </div>
      <Router>
        <NavbarItems />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Wrapper;
