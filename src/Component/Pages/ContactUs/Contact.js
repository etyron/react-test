import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return(
            <section className="section-interval">
                <div className="content">
                    <div className="flex-between contact-map-block">
                        <div className="flex-column-center">
                            <h3 className="title title-section title-dark margin-bottom-30 text-left">Connect us</h3>
                            <ul className="flex-column-center contact-us-list">
                                <li className="contact-phone">
                                    <p className="title title-small title-dark text-left">Call us</p>
                                    <a href= "tel:+88565865554">+885 6586 5554</a>
                                </li>
                                <li className="contact-email">
                                    <p className="title title-small title-dark text-left">Email</p>
                                    <a href="mail:info@consultplus.com">info@consultplus.com</a>
                                </li>
                                <li className="contact-address">
                                    <p className="title title-small title-dark text-left">Address</p>
                                    <p className="text dark-text">
                                        Department 98 44-46 Morningside Road Edinburgh, Scotland
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="map-img-block">
                            <img src="images/addres-map.png" alt="" className="map"/>
                            <img src="images/location_icon.png" alt="" className="location-icon"/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;