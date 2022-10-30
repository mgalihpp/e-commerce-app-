import React from "react";

import '../style/App.css';
import logo from '../img/logo.png';
import { Link } from "react-router-dom";

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
                    <Link to="/About"><a href="/">
                        ABOUT
                    </a></Link>
                </li>
                <li>
                    <a href="/">
                        PRODUCT
                    </a>
                </li>
                <li>
                    <Link to="/Contact"><a href="/">
                        CONTACT
                    </a></Link>
                </li>
                <li>
                    <a href="/" className="bag">
                        <i className="fa-solid fa-cart-shopping">
                        </i>
                    </a>
                </li>
            </div>
            <div id="mobile">
                <li><a href="/"><i class="fa-solid fa-cart-shopping"></i></a></li>
                <i id="bar" className="fas fa-bars"></i>
            </div>
        </div>
    )
}

export default Navbar