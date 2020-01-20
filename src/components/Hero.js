import React from 'react';
import { Button } from "semantic-ui-react";
import Toggler from "./Toggler"

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
                        
                        <Toggler>
                            <h3>Buy 1 get 1 free</h3>
                            <h3>Buy 3 get 2 free</h3>
                        </Toggler>
                        <Button  inverted className="btn">Special offer</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero;