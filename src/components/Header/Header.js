import React from 'react';
import './Header.css'
import logo from '../../images/logo.jpg';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <a href="/about">About</a>
                <a href="/courses">Courses</a>
                <a href="/review">Review</a>
            </nav>
            
        </div>
    );
};

export default Header;