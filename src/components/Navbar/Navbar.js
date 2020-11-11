import React from "react";
import "./Navbar.css";
import logo from '../../logo.jpg'

export default function Navbar() {
    return <nav className="navbar">
    <img src={logo} alt='urban tours logo'  /> 
    <ul className="nav-links">
        <li>
            <a href="/" className="nav-link">
                home
            </a>
        </li> 
        <li>
            <a href="#About" className="nav-link">About</a>
        </li> 
        <li>
            <a href="/" className="nav-link active">
                tours
            </a>
        </li> 
        <li>
            <a href="#Contact" className="nav-link">Contact</a>
        </li> 

        </ul>
        
    </nav>

    

    
}