import React, { Component } from 'react';
import WelcomeHome from './WelcomeHome';
import { NavLink } from 'react-router-dom';
import $  from 'jquery';

class HeaderHome extends  Component {
    componentDidMount() {
        $(".button-mob").on("click", function () {
            $(".mobile-menu").toggleClass("active-mob");
        });
    }
    render(){
        return(
            <header className='header-bg'>
                <div className='content'>
                    <div className='top-header content top-header-interval flex-between margin-bottom-60'>
                        <div>
                            <a className='navbar-brand' href=''><img src='images/logo.png' alt=''/></a>
                            <h1 className='text-indent'>Consult Plus</h1>
                        </div>
                        <nav>
                            <ul className='main-nav flex-between'>
                                <li><NavLink to='/' exact activeClassName="active">Home</NavLink></li>
                                <li><NavLink to='/about_us' activeClassName="active">About us</NavLink></li>
                                <li><NavLink to='/industry' activeClassName="active">Industry</NavLink></li>
                                <li><NavLink to='/pricing' activeClassName="active">Pricing</NavLink></li>
                                <li><NavLink to='/testimonials' activeClassName="active">Testimonials</NavLink></li>
                                <li><NavLink to='/contact_us' activeClassName="active">Contact us</NavLink></li>
                            </ul>
                            <button className='button-mob'></button>
                            <ul className='mobile-menu'>
                                <li><NavLink to='/' exact activeClassName="active">Home</NavLink></li>
                                <li><NavLink to='/about_us' activeClassName="active">About us</NavLink></li>
                                <li><NavLink to='/industry' activeClassName="active">Industry</NavLink></li>
                                <li><NavLink to='/pricing' activeClassName="active">Pricing</NavLink></li>
                                <li><NavLink to='/testimonials' activeClassName="active">Testimonials</NavLink></li>
                                <li><NavLink to='/contact_us' activeClassName="active">Contact us</NavLink></li>
                            </ul>
                        </nav>
                        <div className='flex-between header-contact'>
                            <a href='tel:+9156856664555' className='phone-link'>+91 5685 6664 555</a>
                            <button className='button button-message'></button>
                        </div>
                    </div>
                    <WelcomeHome/>
                </div>
            </header>
        )
    }
}

export default HeaderHome;