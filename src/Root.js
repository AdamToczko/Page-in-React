import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Header  from "./components/Header";
import Footer  from "./components/Footer";
import OurCrew from "./components/OurCrew";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Hero from "./components/Hero";

const Root = () => {
    return (
<Router>
      <Header />
      
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/our-crew" component={OurCrew} />
          <Route exact path="/offer" component={Services} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
    </Router>
);
};

export default Root;