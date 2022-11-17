import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  return (
    <nav>
      <div className='nav-center'>
        {/* header */}
        <div className='nav-header'>
          <img className='logo' src={logo} alt='logo' />
          <button className='nav-toggle'>
            <FaBars />
          </button>
        </div>
        {/* link */}
        <div className='links-container show-container'>
          <ul className='links'>
            <li> 
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Projects</a>
              </li>
          </ul>
          <ul className='social-icons'>
            <li>
              <a href='https://www.twitter.com'><FaTwitter /></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
