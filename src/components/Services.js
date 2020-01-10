import React from 'react';
import { services } from "../data";


const SingleService = ({serviceText='Service', isNew = false, onElementClick}) => {
  return (!isNew ? 
  <div><div onClick={onElementClick}  className="service">{serviceText}</div></div> : 
  <div><div onClick={onElementClick} className="service">{serviceText}<br/> ( new )</div><div className="dot"></div></div>)
}

class Services extends React.Component {

  state = {
    services: [],
    busy: true,
    error: false
  }

  componentDidMount() {

    // simulated loading data from server 
    setTimeout(()=>{
      this.setState({
        services: services,
        busy: false,
      })
  },3000)
  }

  render(){

    const { services, busy, error } = this.state
    if(busy === true ) {
      return (
        <section className="offer" id="offer">
         <div className="container">
           <h1>Data is loading  </h1>
         </div>
       </section>
     )
    } else {
        if(error) {
          return(
         <section className="offer" id="offer">
         <div className="container">
           <h1>Could not get data from server  </h1>
         </div>
       </section>)

        } else {
            return (
              <section className="offer" id="offer">
              <div className="container">
                <h1>We offer following services: </h1>
                <div className="box-container">
                {services.map((element, idx) => {
                  return <SingleService key={idx} {...element} 
										onElementClick={(event)=>{
											console.log('event:', event)
											console.log('clicked element:', event.target)
											console.log('data loaded to element:', {...element}
                      )}}
                      />
                })}
      
                </div>
              </div>
            </section>
          )
          }}


    }
} 

export default Services;