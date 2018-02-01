import React, { Component } from 'react';
import $ from 'jquery';

const TestimonialsList = [
    {
        id: 1,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry book. It has survived not only five centuries, but also the leap into electronic typesetting.",
        name: "Client name",
        position: "Designation"
    },
    {
        id: 2,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type special book. It has survived not only five centuries, but also the leap into electronic typesetting.",
        name: "Client name",
        position: "Designation"
    },
    {
        id: 3,
        text: "1500s, when an unknown printer took a galley of type and scrambled it to make a type special book. It has survived not only five centuries, but also the leap into electronic typesetting.",
        name: "Client name",
        position: "Designation"
    }
];

class Testimonials extends Component {

    componentDidMount() {
        $('.testimonials-slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            initialSlide: 1,
            cssEase: 'linear'
        });
    }

    render() {
        return(
            <section className="testimonials-bg testimonials-interval">
                <div className="content testimonials-section">
                    <h3 className="title title-section light-text margin-bottom-130">Testimonials</h3>
                    <ul className="testimonials-slider">
                        {
                            TestimonialsList.map(item =>{
                                return(
                                    <li key={item.id}>
                                        <blockquote>
                                            <p  className="text light-text text-center testmin-icon">{item.text}</p>
                                            <p className="text testmin-signup light-text">
                                                <span className="testmin-signup-name light-text">{item.name}</span>
                                                {item.position}
                                            </p>
                                        </blockquote>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </section>
        )
    }
}

export default Testimonials;