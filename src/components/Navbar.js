import React from "react";

import '../style/App.css';
import logo from '../img/logo.png';

const Navbar = () => {
    return(
        <div className="header">
            <a href="/">
                <img className="logo"
                src={logo}
                 alt="logo"></img>
            </a>
            <div className="navbar">
                <li>
                    <a href="/">
                        HOME
                    </a>
                </li>
                <li>
                    <a href="/">
                        ABOUT
                    </a>
                </li>
                <li>
                    <a href="/">
                        PRODUCT
                    </a>
                </li>
                <li>
                    <a href="/">
                        CONTACT
                    </a>
                </li>
                <li>
                    <a href="/" className="bag">
                        <i className="fa-solid fa-cart-shopping">
                        </i>
                    </a>
                </li>
            </div>
        </div>
    )
}

export default Navbar