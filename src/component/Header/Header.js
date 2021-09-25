import React from 'react';
import './Header.css'
import logo from '../../image/logo.jpg'
const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <a href="/home">Home</a>
                <a href="/food">Food</a>
                <a href="/recips">Recips</a>
                <a href="/order">Order</a>
            </nav>
        </div>
    );
};

export default Header;