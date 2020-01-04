import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import OurCrew from './components/OurCrew';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <OurCrew />
      <Services />
      <Contact />
      <Footer />
     
    </div>
  );
}

export default App;
