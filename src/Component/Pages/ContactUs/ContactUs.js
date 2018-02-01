import React, { Component} from 'react';
// Components
import Contact from "./Contact";
import ContactForm from "./ContactForm";
import Header from "../../../Header";

class ContactUs extends Component {
    render() {
        return(
            <div>
                <Header title={'Contact us'}/>
                <Contact/>
                <ContactForm/>
            </div>
        )
    }
}

export default  ContactUs;