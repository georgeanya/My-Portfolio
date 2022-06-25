import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';

import './navbar.css';


const Navbar1 = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='huron__navbar'>
            <div className='huron__navbar-links'>
                <div className='huron__navbar-links_logo'>
                    <img src={ logo } alt="Logo" />
                </div>
                <div className='huron__navbar-links_container'>
                <p><a href="#home">Home</a></p>
                <p><a href="#about">About Huron</a></p>
                <p><a href="#services">Our Services</a></p>
                <p><a href="#contact">Contact Us</a></p>
                <p><a href="#blog">Blog</a></p>
                </div>
            </div>
            <div className='huron__navbar-menu'>
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
                }
                {toggleMenu && (
                    <div className='huron__navbar-menu_container scale-up-center'>
                        <div className='huron__navbar-menu_container-links'>
                        <p><a href="#home">Home</a></p>
                        <p><a href="#about">About Huron</a></p>
                        <p><a href="#services">Our Services</a></p>
                        <p><a href="#contact">Contact Us</a></p>
                        <p><a href="#blog">Blog</a></p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar1