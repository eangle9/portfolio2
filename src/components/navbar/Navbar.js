
import './NavbarStyle.css';
import React from 'react';

const Navbar = () => {
    return (
        <div className='n-wrapper'>
            <div className='n-left'>
                <div className='n-name'>Addis</div>
                <span>toggle</span>
            </div>
            <div className='n-right'>
                <div className='n-list'>
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Experience</li>
                        <li>Portfolio</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
                <button className='btn'>Contact <br/>us</button>
            </div>
        </div>
    );
}

export default Navbar;

