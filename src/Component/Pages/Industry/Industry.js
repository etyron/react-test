import React, { Component } from 'react';
//Components
import IndustryCards from "./IndustryCards";
import Header from "../../../Header";
import Testimonials from "../../../Testimonials";

class Industry extends Component {
    render() {
        return(
            <div>
                <Header title={'Industry'}/>
                <IndustryCards/>
                <Testimonials/>
            </div>
        )
    }
}

export default Industry;