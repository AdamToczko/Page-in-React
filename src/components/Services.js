import React from 'react';
import { services } from "../data";



const SingleService = ({serviceText='Service', isNew = false}) => {
  return (!isNew ? <div><div className="service">{serviceText}</div></div> : 
  <div><div className="service">{serviceText}<br/> ( new )</div><div className="dot"></div></div>)
  
}

const Services = () => {

    return (
       <section className="offer" id="offer">
        <div className="container">
          <h1>We offer following services: </h1>
          <div className="box-container">
          {services.map((element, idx) => {
						return <SingleService key={idx} {...element} />
					})}

          </div>
        </div>
      </section>
    )
}
export default Services;