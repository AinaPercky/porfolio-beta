import React from 'react';
import '../assets/css/header.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
	return (
		<header id='header' className='header fixed top-0 w-full overflow-hidden'>
			<div className='flex items-center justify-between mx-5 '>
				<a href='/' className='logo flex items-center'>
					<img src='assets/img/logo.png' alt='' />
					<h1 className='sitename'>Percky</h1>
				</a>
				<nav id='navmenu' className='navmenu'>
					<ul>
						<li className='navChildMenu active'>
							<NavLink
								to='/'
								className={({ isActive }) => (isActive ? 'active' : '')}
							>
								Home
							</NavLink>
						</li>
						<li className='navChildMenu'>
							<NavLink
								to='/about/me'
								className={({ isActive }) => (isActive ? 'active' : '')}
							>
								About
							</NavLink>
						</li>
						<li className='navChildMenu'>
							<NavLink
								to='/resume'
								className={({ isActive }) => (isActive ? 'active' : '')}
							>
								Resume
							</NavLink>
						</li>
						<li className='navChildMenu'>
							<NavLink
								to='/services'
								className={({ isActive }) => (isActive ? 'active' : '')}
							>
								Services
							</NavLink>
						</li>
						{/* <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li> */}
					</ul>
					<i className='mobile-nav-toggle d-xl-none bi bi-list'></i>
				</nav>
			</div>
		</header>
	);
}
