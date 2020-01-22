import React from 'react';
import Stepper from './testFeatures/Stepper';


const Features = () => {
    return (
        <section className="our-crew" id="our-crew">
        <div className="container">
          <h1>Testing new features</h1>
            <Stepper >
                <div>step 1</div>
                <div>step 2</div>
                <div>step 3</div>
            </Stepper>
    </div>
      </section>
    )
}
export default Features;