import React from 'react';
import { NavLink } from "react-router-dom";

const NavDrop = () => {
    return (
            <div className="navRightDrop">
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
    )     
                
         
}


export default NavDrop;