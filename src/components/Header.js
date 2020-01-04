import React from 'react';

const Header = () =>
{
    return(<header>
    <nav>
        <div className="container">
            <a href="#">Company name</a>
            <div className="nav-right">
                <a href="#our-crew">About us </a>
                <a href="#offer">Our offer</a>
                <a href="#contact">Contact Us</a>
            </div>
            <button className="nav-toggler">
                <i className="fas fa-bars"></i>
            </button>
        </div>    
    </nav>
  </header> ) 
}


export default Header;