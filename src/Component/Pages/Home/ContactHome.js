import React, { Component } from 'react';

class ContactHome extends Component {
    render(){
        return(
            <section className="section-interval">
                <div className="content">
                    <h3 className="title title-section title-dark margin-bottom-30">Quick contact</h3>
                    <ul className="contact-list flex-between">
                        <li>
                            <h4 className="title title-quick-contact">Email</h4>
                            <a href="mailto: info@consultplus.com">info@consultplus.com</a>
                        </li>
                        <li>
                            <h4 className="title title-quick-contact">Call us</h4>
                            <a href="tel:+9188798767990">+91 8879 8767 990</a>
                        </li>
                        <li>
                            <h4 className="title title-quick-contact">Career</h4>
                            <a href="mailto: consult@career.com">consult@career.com</a>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default  ContactHome;