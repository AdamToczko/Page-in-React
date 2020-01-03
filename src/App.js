import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <nav>
        <div class="container">
            <a href="#">Company name</a>
            <div class="nav-right">
                <a href="#our-crew">About us </a>
                <a href="#offer">Our offer</a>
                <a href="#contact">Contact Us</a>
            </div>
            <button class="nav-toggler">
                <i class="fas fa-bars"></i>
            </button>
        </div>    
    </nav>

    
    <section class="landing-page">
        <div class="landing-page-shadow">
            <div class="container">
                <div class="landing-page-text">
                    <h1>We offer best quality services</h1>
                    <h2>Check us out </h2>
                    <button class="btn">Special offer</button>
                </div>
            </div>
        </div>
    </section>
    <section class="our-crew" id="our-crew">
        <div class="container">
            <h1>Our Team</h1>
                <div class="employee">
                    <img src="https://picsum.photos/id/237/400/400" alt="pracownik 1" class="employee-photo">
                    <div class="employee-text">
                        <h3>First name & Surname [ division ] </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Morbi vel massa et lacus egestas cursus a non magna. 
                            Fusce scelerisque blandit nunc, id malesuada ex lobortis a. 
                            Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula. 
                            Duis efficitur lacinia enim, non tincidunt libero ultrices in.
                        </p>
                    </div>
                </div>    
                <div class="employee">
                    <img src="https://picsum.photos/id/1025/400/400" alt="pracownik 2" class="employee-photo">
                    <div class="employee-text">
                        <h3>First name & Surname [ division ] </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Morbi vel massa et lacus egestas cursus a non magna. 
                            Fusce scelerisque blandit nunc, id malesuada ex lobortis a. 
                            Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula. 
                            Duis efficitur lacinia enim, non tincidunt libero ultrices in.
                        </p>
                    </div>
                </div>
            </div>
    </section>
    <section class="offer" id="offer">
        <div class="container">
            <h1>We offer following services: </h1>
            <div class="box-container">
                <div>
                    <div class="service">Service 1</div>
                    <div class="dot"></div>
                </div>
                    <div><div class="service">Service 2</div></div>
                    <div><div class="service">Service 3</div></div>
                    <div><div class="service">Service 4</div></div>
                    <div><div class="service">Service 5</div></div>
                    <div><div class="service">Service 6</div></div>
                
            </div>
        </div>
    </section>
    <section class="contact" id="contact">
        <div class="container">
            <h1>Contact details: </h1>
                    <h2>How to find us:</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9266.987702457747!2d18.537803337651!3d54.502687593560005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda72d4f70f457%3A0xe9fd38c959ca5185!2sWzg%C3%B3rze%20%C5%9Awi%C4%99tego%20Maksymiliana%2C%20Gdynia!5e0!3m2!1sen!2spl!4v1570004120937!5m2!1sen!2spl" width="200" height="200" frameborder="0" style="border:0;" <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9266.987702457747!2d18.537803337651!3d54.502687593560005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda72d4f70f457%3A0xe9fd38c959ca5185!2sWzg%C3%B3rze%20%C5%9Awi%C4%99tego%20Maksymiliana%2C%20Gdynia!5e0!3m2!1sen!2spl!4v1570007869765!5m2!1sen!2spl" width="200" height="200" frameborder="0" style="border:0;">
                    </iframe>
                    <div class="contact-text">
                    <p>
                    Street and building
                    <br>
                    Postcode 
                    </p> 
                    <p>Tel</p>
                    <p> <a href="mailto:name@email.com">  
                    Email me</p></a>   
                    
                </div>             
        </div>
    </section> 
    <footer>
        <div class="container">
            <h4>Adam Toczko, 2019</h4>
        </div>
        <button class="social-icon">
            <i class="fab fa-instagram"></i>
        </button>
        <button class="social-icon">
            <i class="fab fa-facebook-square"></i>
        </button>
    </footer>
    </div>
  );
}

export default App;
