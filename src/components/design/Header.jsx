import React from 'react';
import Navbar from './Navbar';

function Header() {
    return (
        <div className='header'>
            <Navbar/>
            <div className='intro'>
                <p>Looking for a car !</p>
                <h1><span>Buy </span> and <span>sell</span> Car</h1>
                <p>SELL YOUR CAR IN SINGLE VISIT</p>
            <a href='#' className='header-btn'>sign in</a> <br/>
            <a href='#' className='header-btn'>sign up</a>
            </div>
        </div>
    )
}

export default Header;
