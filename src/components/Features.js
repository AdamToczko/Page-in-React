import React from 'react';
import Stepper from './testFeatures/Stepper';


const Features = () => {
    return (
        <section className="our-crew" id="our-crew">
        <div className="container">
          <h1>Testing new features</h1>
            <Stepper >
                <div title={'Preparing'}>step 1</div>
                <div title={'Processing'}>step 2</div>
                <div title={'Submitting'}>step 3</div>
            </Stepper>
    </div>
      </section>
    )
}
export default Features;