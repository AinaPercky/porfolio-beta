import React from 'react'
import '../assets/css/header.css'

export default function Header() {
    const handleNavigation=(e)=>{
        const selectedElement=(e.currentTarget.children.item(0).innerHTML);
        console.log('selected Element',selectedElement);
        (e.currentTarget.children.item(0).classList.add('active'));
        const navChildMenu=document.querySelectorAll('.navChildMenu');
            navChildMenu.forEach(item=>{
                const navItem=item.children.item(0).innerHTML;
                console.log("navItem",navItem);
                if(navItem!=selectedElement){
                    item.children.item(0).classList.remove('active');
                }
            })
    }
    
    return (
        <header id="header" className="header fixed top-0 w-full overflow-hidden">
            <div className="flex items-center justify-between mx-5 ">
                <a href="/" className="logo flex items-center">
                    <img src="assets/img/logo.png" alt=""/>
                    <h1 className="sitename">Percky</h1>
                </a>
                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li onClick={handleNavigation} className='navChildMenu active'><a href="/" className="active">Home</a></li>
                        <li onClick={handleNavigation} className='navChildMenu'><a href="/about/me">About</a></li>
                        <li onClick={handleNavigation} className='navChildMenu'><a href="/resume">Resume</a></li>
                        <li onClick={handleNavigation} className='navChildMenu'><a href="/services">Services</a></li>
                        {/* <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li> */}
                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>
            </div>
        </header>
    )
}
