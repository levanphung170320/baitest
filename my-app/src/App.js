import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from './compoment/HEADER/header';
import Footer from './compoment/Footer/Footer';
import Text  from './compoment/Text/Text';
import Section from'./compoment/HERO SECTION/section';
import About from './compoment/ABOUT US/about';
import Services from './compoment/OUR SERVICES/services';
function App() {
  return (
    <div>
        <Text/>
        <Header/>
        <Section/>
        <About/>
        <Services/>
        <Footer/>
    </div>
  );
}

export default App;
