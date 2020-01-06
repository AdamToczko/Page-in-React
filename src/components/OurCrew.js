import React from 'react';
import { employees } from "../data";


const SingleEmployee =(props) => {
 return (
   <div className="employee">
            <img src="https://picsum.photos/id/237/400/400" 
            alt="pracownik 1" className="employee-photo" />
            <div className="employee-text">
              <h3>First name & Surname [ division ] </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Morbi vel massa et lacus egestas cursus a non magna.
                  Fusce scelerisque blandit nunc, id malesuada ex lobortis a.
                  Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula.
                  Duis efficitur lacinia enim, non tincidunt libero ultrices in.
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
          <SingleEmployee />
          <SingleEmployee />
        
        </div>
      </section>
    )
}
export default OurCrew;