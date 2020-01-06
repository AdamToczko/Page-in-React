import React from 'react';

const SingleService = ({serviceText='Service'}) => {
  return (
<div>
  <div className="service">{serviceText}</div>
  </div>
  )
}

const Services = () => {
    return (
       <section className="offer" id="offer">
        <div className="container">
          <h1>We offer following services: </h1>
          <div className="box-container">
            <div>
              <div className="service">Service 1</div>
              <div className="dot"></div>
            </div>
            <SingleService /> 
            <SingleService /> 
            <SingleService /> 
            <SingleService /> 
            <SingleService /> 

          </div>
        </div>
      </section>
    )
}
export default Services;