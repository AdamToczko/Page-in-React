import React from 'react';
import { NavLink } from "react-router-dom";
import NavDrop from './NavDrop';

class Header extends React.Component {
    state = {
        isShown: false
    }

    toggle = () => {
        const {isShown } = this.state
        this.setState({
            isShown: !isShown
        })
    }

    render(){
        const {isShown} = this.state

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
                    <button onClick={this.toggle} className="nav-toggler">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </nav>
            {isShown && <NavDrop />}
            
        </header>)}
}


export default Header;