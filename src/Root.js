import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OurCrew from "./components/OurCrew";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Features from "./components/Features";

import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Root = () => {
    return (
        <Router>
            <Header />
            <Route render={({location}) => (
                <TransitionGroup>
                    <CSSTransition
                    key={location.key}
                    timeout={3000}
                    classNames="fade"
                    >
                        <Switch location={location}>
                            <Route exact path="/" component={App} />
                            <Route  path="/our-crew" component={OurCrew} />
                            <Route  path="/offer" component={Services} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/features" component={Features} />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            )} />
            <Footer />
        </Router>
    );
};

export default Root;