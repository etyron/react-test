import React, { Component } from 'react';
//Components
import AboutUsHome from "./AboutUsHome";
import FeaturesHome from "./FeaturesHome";
import ServicesHome from "./ServicesHome";
import OurBlogHome from "./OurBlogHome";
import ContactHome from "./ContactHome";
import Testimonials from "../../../Testimonials";
import Projects from "../../../Projects";
import HeaderHome from "./HeaderHome";


class  Home extends Component {
    render() {
        return(
            <div>
                <HeaderHome/>
                <AboutUsHome/>
                <FeaturesHome/>
                <Projects/>
                <ServicesHome/>
                <Testimonials/>
                <OurBlogHome/>
                <ContactHome/>
            </div>
        )
    }
}

export default Home;