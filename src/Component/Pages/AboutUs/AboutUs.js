import React, { Component} from 'react';
//Components
import OurTeam from "./OurTeam";
import Header from "../../../Header";
import Testimonials from "../../../Testimonials";
import AboutInfo from "./AboutInfo";

class AboutUs extends Component {
    render() {
        return(
            <div>
                <Header title={'About us'}/>
                <AboutInfo/>
                <OurTeam/>
                <Testimonials/>
            </div>
        )
    }
}

export default AboutUs;