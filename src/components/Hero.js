import React from 'react';
import { Button } from "semantic-ui-react";
import Toggler from "./testFeatures/Toggler"

const langs = {
    'pl':"Oferujemy najwyższą jakość usług ", 
    'en':"We offer best quality services "
  }
  

const Hero = ({selectedLang='en'}) => {
    return (
        <div className="page">
        <section className="landing-page">
            <div className="landing-page-shadow">
                <div className="container">
                    <div className="landing-page-text">
                        <h1>{langs[selectedLang]} </h1>
                        <div className="toggler">
                         <div>
                        <Toggler title={'Toggler 1'} showOnInit={true}>
                            <h3>Buy 1 get 1 free</h3>
                            <h3>Buy 3 get 2 free</h3>
                        </Toggler>
                        </div>
                       
                        </div>   
                        <Button  inverted className="btn">Special offer</Button>
                        <div>
                        <Toggler title={'Toggler 2'} showOnInit={false}> 
                            <h3>Buy 1 get 1 free</h3>
                            <h3>Buy 3 get 2 free</h3>
                        </Toggler>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}
export default Hero;