import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';


class Header extends Component {

    componentDidMount() {
        $(".button-mob").on("click", function () {
            $(".mobile-menu").toggleClass("active-mob");
        });
    }

    render() {
        console.log('items', this.props.items);
        return(
            <header className="header-bg mini-header">
                <div className="content">
                    <div className="top-header content top-header-interval flex-between">
                        <div>
                            <a className="navbar-brand" href=""><img src="images/logo.png" alt=""/></a>
                            <h1 className="text-indent">Consult Plus</h1>
                        </div>
                        <nav>
                            <ul className="main-nav flex-between">
                                <li><NavLink to='/' exact activeClassName="active">Home</NavLink></li>
                                <li><NavLink to='/about_us' activeClassName="active">About us</NavLink></li>
                                <li><NavLink to='/industry' activeClassName="active">Industry</NavLink></li>
                                <li><NavLink to='/pricing' activeClassName="active">Pricing</NavLink></li>
                                <li><NavLink to='/testimonials' activeClassName="active">Testimonials</NavLink></li>
                                <li><NavLink to='/contact_us' activeClassName="active">Contact us</NavLink></li>
                            </ul>
                            <button className="button-mob"></button>
                            <ul className="mobile-menu">
                                <li><NavLink to='/' exact activeClassName="active">Home</NavLink></li>
                                <li><NavLink to='/about_us' activeClassName="active">About us</NavLink></li>
                                <li><NavLink to='/industry' activeClassName="active">Industry</NavLink></li>
                                <li><NavLink to='/pricing' activeClassName="active">Pricing</NavLink></li>
                                <li><NavLink to='/testimonials' activeClassName="active">Testimonials</NavLink></li>
                                <li><NavLink to='/contact_us' activeClassName="active">Contact us</NavLink></li>
                            </ul>
                        </nav>
                        <div className="flex-between header-contact">
                            <a href="tel:+9156856664555" className="phone-link">+91 5685 6664 555</a>
                            <button className="button button-message"></button>
                        </div>
                    </div>
                    <div className="bottom-header">
                        <div className="jumbotron jumbotron-fluid jumbotron-welcome content margin-bottom-30">
                            <div className="container margin-bottom-30">
                                <p className="lead title title-welcome-bg light-text">{this.props.title}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;