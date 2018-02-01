import React, { Component } from 'react';

class ContactForm extends Component {
    render() {
        return(
            <section className="section-interval write-us-bg">
                <div className="content">
                    <h3 className="title title-section title-dark margin-bottom-30">Write to us</h3>
                    <div className="write-us-form flex-column flex-wrap">
                        <form method="post">
                            <div className="flex-between flex-wrap margin-bottom-40">
                                <input type="text" placeholder="Name"/>
                                <input type="email" placeholder="Email"/>
                                <input type="number" placeholder="Phone"/>
                                <input type="text" placeholder="Service"/>
                            </div>
                            <textarea placeholder="Comment"></textarea>
                            <div className="flex-center">
                                <button type="submit" className="button button-brand">Submit now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContactForm;