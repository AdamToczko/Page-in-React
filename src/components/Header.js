import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <div className="container">
                    <NavLink
                    activeStyle={{
                    color: "gold",
                    textDecoration: "none"
                    }}
                    to="/"
                    exact
                    >
                    Home/Company logo 
                    </NavLink>
                    
                    <div className="nav-right">
                    <NavLink
                    activeStyle={{
                    color: "gold",
                    textDecoration: "none"
                    }}
                    to="/our-crew"
                    exact
                    >
                    About us    
                    </NavLink>

                    <NavLink
                    activeStyle={{
                    color: "gold",
                    textDecoration: "none"
                    }}
                    to="/offer"
                    exact
                    >
                    Our offer  
                    </NavLink>

                    <NavLink
                    activeStyle={{
                    color: "gold",
                    textDecoration: "none"
                    }}
                    to="/contact"
                    exact
                    >
                    Contact Us
                    </NavLink>
                    <NavLink
                    activeStyle={{
                    color: "gold",
                    textDecoration: "none"
                    }}
                    to="/features"
                    exact
                    >
                    New Features
                    </NavLink>
                    </div>
                    <button className="nav-toggler">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </nav>
        </header>)
}


export default Header;