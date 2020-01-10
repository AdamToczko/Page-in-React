import React from 'react';
import './App.css';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
        <Hero selectedLang={'en'} />
    </div>
  );
}

export default App;
