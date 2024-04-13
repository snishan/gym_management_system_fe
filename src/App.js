import './App.css';
import React, { useEffect, useState } from 'react';

import Loader from './components/Loader';
import Header from './components/Header';
import MainBanner from './components/MainBanner';
import Features from './components/Features';
import CallToAction from './components/CallToAction';
import Classes from './components/Classes';
import Schedule from './components/Schedule';
import Trainers from './components/Trainers';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {

  useEffect(() => {
    const handleLoad = () => {
      const preloader = document.getElementById('js-preloader');
      if (preloader) {
        preloader.classList.add('loaded');
      }
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className="App">
      <Loader/>
      <Header/>
      <MainBanner/>
      <Features/>
      <CallToAction/>
      <Classes/>
      <Schedule/>
      <Trainers/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
