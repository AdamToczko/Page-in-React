import React, { useState } from 'react';
import ContactForm from './ContactForm';
import { Modal, Button} from "semantic-ui-react";


const Contact = () => {

  const [modal, setModal] = useState(false)
 
    return (
      <div className="page">
 <section className="contact" id="contact">
        <div className="container" id="containerContact">
          <h1>Contact details: </h1>
          <h2>How to find us:</h2>

          <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9266.987702457747!2d18.537803337651!3d54.502687593560005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda72d4f70f457%3A0xe9fd38c959ca5185!2sWzg%C3%B3rze%20%C5%9Awi%C4%99tego%20Maksymiliana%2C%20Gdynia!5e0!3m2!1sen!2spl!4v1570004120937!5m2!1sen!2spl" style={{ frameborder: '0', border: '0' }} />
          <div className="contact-text">
            <p>
              Street and building
                    <br />
              Postcode
                    </p>
            <p>Tel</p>
            <Button onClick={()=> setModal(!modal)} >
              Contact us</Button>
              <Modal open={modal} 
              style={{ fontSize: '1.5em'}} 
              >
                    <ContactForm  />
                    <Modal.Actions>
                    <Button negative onClick={()=> setModal(!modal)}>Close</Button>
                    </Modal.Actions>
                </Modal>
          
          </div>
        </div>
      </section>
      </div>
    )
}

export default Contact;
