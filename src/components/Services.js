import React from 'react';
import { services } from "../data";

const SingleService = ({serviceText='Service', isNew = false}) => {
  return (!isNew ? <div><div className="service">{serviceText}</div></div> : 
  <div><div className="service">{serviceText}<br/> ( new )</div><div className="dot"></div></div>)
}

class Services extends React.Component {

  state = {
    services: [],
    busy: true,
    error: false
  }

  componentDidMount() {
    setTimeout(()=>{
      this.setState({
        services: services,
        busy: false
      })
  },3000)
  }

  render(){

    const { services, busy, error } = this.state
    if(busy == true ) {
      return (
        <section className="offer" id="offer">
         <div className="container">
           <h1>Data is loading  </h1>
         </div>
       </section>
     )
    } else {
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


    }
} 

export default Services;