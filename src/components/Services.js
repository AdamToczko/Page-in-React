import React from 'react';
import { services } from "../data";



const SingleService = ({serviceText='Service'}) => {
  return (
<div>
  <div className="service">{serviceText}</div>
  </div>
  )
}

const Services = () => {

  let text = 'Service';
    return (
       <section className="offer" id="offer">
        <div className="container">
          <h1>We offer following services: </h1>
          <div className="box-container">
          {services.map((element, idx) => {
						return <SingleService key={idx} {...element} />
					})}

            {/* <div>
              <div className="service">Service 1</div>
              <div className="dot"></div>
            </div>
            <SingleService serviceText={`${text} 2`}  /> 
            <SingleService serviceText={`${text} 3`}  /> 
            <SingleService serviceText={`${text} 4`}  /> 
            <SingleService serviceText={`${text} 5`}  /> 
            <SingleService serviceText={`${text} 6`}  />  */}

          </div>
        </div>
      </section>
    )
}
export default Services;