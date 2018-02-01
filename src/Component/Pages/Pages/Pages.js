import React, { Component } from 'react';
//Components
import ClientCard from "./ClientCard";
import Header from "../../../Header";
import Projects from "../../../Projects";

class Pages extends Component {
    render() {
        return(
            <div>
                <Header title={'Testimonials'}/>
                <ClientCard/>
                <Projects/>
            </div>
        )
    }
}

export default Pages;