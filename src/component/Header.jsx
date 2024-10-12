import React from 'react'
import '../assets/css/header.css'

export default function Header() {
    return (
        <header id="header" className="header overflow-hidden">
            <div className="flex items-center justify-between mx-5 ">
        
            <a href="index.html" className="logo flex items-center">
                
                <img src="assets/img/logo.png" alt=""/>
                <h1 className="sitename">Percky</h1>
            </a>
        
            <nav id="navmenu" className="navmenu">
                <ul>
                <li><a href="#hero" className="active">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>

                <li><a href="#contact">Contact</a></li>
                </ul>
                <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>
        
            </div>
        </header>
    )
}
