import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Components

import Home from "./Component/Pages/Home/Home";
import AboutUs from "./Component/Pages/AboutUs/AboutUs";
import Industry from "./Component/Pages/Industry/Industry";
import Pages from "./Component/Pages/Pages/Pages";
import Pricing from "./Component/Pages/Pricing/Pricing";
import ContactUs from "./Component/Pages/ContactUs/ContactUs";

class Main extends Component {
    render() {
        return(
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/about_us" component={AboutUs} />
                <Route path="/industry" component={Industry}/>
                <Route path="/pricing" component={Pricing}/>
                <Route path="/testimonials" component={Pages}/>
                <Route path="/contact_us" component={ContactUs}/>
            </div>
        )
    }
}

export default Main;