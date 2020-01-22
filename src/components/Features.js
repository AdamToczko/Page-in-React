import React from 'react';
import Stepper from './testFeatures/Stepper';


const Features = () => {
    return (
        <section className="our-crew" id="our-crew">
        <div className="container">
          <h1>Testing new features</h1>
            <Stepper >
                <div title={'step 1'}>Preparing</div>
                <div title={'step 2'}>Processing</div>
                <div title={'step 3'}>Submitting</div>
            </Stepper>
    </div>
      </section>
    )
}
export default Features;