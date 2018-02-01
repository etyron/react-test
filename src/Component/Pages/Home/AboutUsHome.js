import React, { Component } from 'react';
import $ from 'jquery';

const SliderList = [
    {
        id: 1,
        href: "",
        img: "images/about-logos/logo1.png"
    },
    {
        id: 2,
        href: "",
        img: "images/about-logos/logo2.png"
    },
    {
        id: 3,
        href: "",
        img: "images/about-logos/logo3.png"
    },
    {
        id: 4,
        href: "",
        img: "images/about-logos/logo4.png"
    },
    {
        id: 5,
        href: "",
        img: "images/about-logos/logo5.png"
    }
];

class AboutUsHome extends Component {

    componentDidMount() {
        $('.about-us-slider').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            initialSlide: 2,
            variableWidth: true
        });
    }

    render() {
        return(
            <section className="section-interval about-us-section">
                <div className="content">
                    <h3 className="title title-section title-dark margin-bottom-40">About us</h3>
                    <div className="about-text-block">
                        <p className="text dark-text margin-bottom-40">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled.
                        </p>
                        <button className="button button-brand">Read more</button>
                    </div>
                    <div className="about-us-block">
                        <ul className="about-us-slider">
                            {
                                SliderList.map(item => {
                                    return(
                                        <li key={item.id}>
                                            <a href={item.href}><img src={item.img} alt=""/></a>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutUsHome;