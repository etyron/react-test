import React, { Component } from 'react';

const ServicesList = [
    {
        id: 1,
        title: "Business consultation",
        text: "Many variations of passages of Lorem available, but the majority have suffered alteration in some form, by injected humour, or randomised.words which don't look"
    },
    {
        id: 2,
        title: "Boost local business",
        text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look"
    },
    {
        id: 3,
        title: "Accounting",
        text: "professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur"
    }
];

class ServicesHome extends Component {
    render() {
        return(
            <section className="section-interval services-bg">
                <div className="content">
                    <h3 className="title title-section margin-bottom-60">Services</h3>
                    <ul className="services-block flex-between flex-wrap margin-bottom-50">
                        {
                            ServicesList.map(item =>{
                                return(
                                    <li key={item.id}>
                                        <h4 className="title title-cards title-dark">{item.title}</h4>
                                        <p className="text dark-text">{item.text}</p>
                                    </li>
                                );
                            })
                        }
                    </ul>
                    <div className="flex-center">
                        <button className="button button-brand">Full services</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default ServicesHome;