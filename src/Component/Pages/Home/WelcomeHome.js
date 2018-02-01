import React, { Component } from 'react';
import $ from 'jquery';
import { Slick } from 'slick-carousel';
//Component


class WelcomeHome extends Component {
    componentDidMount() {
        $('.welcome-slider').slick({
            dots: true,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: 880,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 840,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        leftMode: true
                    }
                },
                {
                    breakpoint: 660,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false
                    }
                }
            ]
        })
    }
    render() {
        return(
            <div className='bottom-header'>
                <div className='jumbotron jumbotron-fluid jumbotron-welcome content margin-bottom-30'>
                    <div className='container margin-bottom-30'>
                        <h2 className='title title-welcome-sm light-text'>We are leading consulting company</h2>
                        <p className='lead title title-welcome-bg light-text'>Choose your industry</p>
                    </div>
                </div>
                <ul className='welcome-slider'>
                    <li><a className='' href=''>Education</a></li>
                    <li><a className='' href=''>Business</a></li>
                    <li><a className='' href=''>Technology</a></li>
                    <li><a className='' href=''>Banking</a></li>
                    <li><a className='' href=''>Real Estate</a></li>
                    <li><a className='' href=''>Law</a></li>
                    <li><a className='' href=''>Industry</a></li>
                    <li><a className='' href=''>Works</a></li>
                    <li><a className='' href=''>Education</a></li>
                    <li><a className='' href=''>Business</a></li>
                    <li><a className='' href=''>Technology</a></li>
                    <li><a className='' href=''>Banking</a></li>
                    <li><a className='' href=''>Real Estate</a></li>
                    <li><a className='' href=''>Law</a></li>
                    <li><a className='' href=''>Industry</a></li>
                    <li><a className='' href=''>Works</a></li>
                </ul>
            </div>
        );
    }
}

export default WelcomeHome;