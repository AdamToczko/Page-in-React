import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import NavDrop from './NavDrop';

const Header = () => {
    const [isShown, setIsShown] = useState(false)
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
                    <button onClick={()=> setIsShown(!isShown)} className="nav-toggler">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </nav>
            <div className={['animated', isShown ? 'fadeIn' : 'fadeOut'].join(' ')} >
                <NavDrop />
            </div>
            
        </header>)}


export default Header;