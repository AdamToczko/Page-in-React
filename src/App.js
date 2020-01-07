import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import OurCrew from './components/OurCrew';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Main = (props) => {
  const {children} = props
 console.log(children)
  return (
    <main>
    {children}
    </main>
  ) 
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Hero selectedLang={'en'} />
        <OurCrew />
        <Services />
        <Contact />
      </Main>
      <Footer />
     
    </div>
  );
}

export default App;
