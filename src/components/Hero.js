import React from 'react';

const langs = {
    'pl':"Oferujemy najwyższą jakość usług ", 
    'en':"We offer best quality services "
  }
  

const Hero = ({selectedLang='en'}) => {
    return (
        <section className="landing-page">
            <div className="landing-page-shadow">
                <div className="container">
                    <div className="landing-page-text">
                        <h1>{langs[selectedLang]} </h1>
                        <h2>Check us out </h2>
                        <button className="btn">Special offer</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero;