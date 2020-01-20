import React from 'react';
import { Button } from "semantic-ui-react";
import Toggler from './Toggler';

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
                        <Button  inverted className="btn">Special offer</Button>
                        <Toggler>
                            <strong>Testing</strong>
                        </Toggler>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero;