import React from 'react';
import { employees } from "../data";
import { element } from 'prop-types';


const SingleEmployee =(props) => {
  const {img, name, description} = props
 return (
   <div className="employee">
            <img src={img}
            alt="pracownik 1" className="employee-photo" />

            <div className="employee-text">
              <h3>{name} </h3>
              <p>{description}
              </p>
            </div>
          </div>
 )
}


const OurCrew = () => {
    return (
        <section className="our-crew" id="our-crew">
        <div className="container">
          <h1>Our Team</h1>
          {employees.map((element,idx) => {
            return <SingleEmployee key={idx} {...element} />
          })
          }
        </div>
      </section>
    )
}
export default OurCrew;