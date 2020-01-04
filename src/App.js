import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import OurCrew from './components/OurCrew';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <OurCrew />
      <Services />
      <Contact />
     
      <footer>
        <div className="container">
          <h4>&copy; Adam Toczko, 2019</h4>
        </div>
        <button className="social-icon">
          <i className="fab fa-instagram"></i>
        </button>
        <button className="social-icon">
          <i className="fab fa-facebook-square"></i>
        </button>
      </footer>
    </div>
  );
}

export default App;
