import React from 'react';
import { services } from "../data";



const SingleService = ({serviceText='Service', isNew = false}) => {
  if(!isNew)
  return (
<div>
  <div className="service">{serviceText}</div>
  </div>
  )
  else{
    return(
      <div>
  <div className="service">{serviceText}<br/> ( new )</div>
              <div className="dot"></div>
  </div>
    )
  }
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