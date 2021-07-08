import React from 'react';
import '../Header/Header.css'

const Header = () => {
    return (
        <div>
        <header>
            <nav className='nav'>
                <ul>
                    <li><a href="/">Home</a> </li>
                    <li><a href="/">About</a> </li>
                    <li><a href="/">contact</a> </li>
                </ul>
            </nav>
        </header>
        </div>
    );
};

export default Header;