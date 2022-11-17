import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showNav,setShowNav] = useState(true)

  return (
    <nav>
      <div className='nav-center'>
        {/* header */}
        <div className='nav-header'>
          <img className='logo' src={logo} alt='logo' />
          <button className='nav-toggle' onClick={()=>setShowNav(!showNav)}>
            <FaBars />
          </button>
        </div>
        {/* link */}
        {showNav && <>
        <div className='links-container show-container'>
          <ul className='links'>
            {links.map((link)=>{
              const {id,url,text} = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}  
          </ul>
          </div>
          <ul className='social-icons'>
            {social.map((sosial)=>{
              const {id, url, icon} = sosial;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              )
            })}
          </ul>
        </>}
        

      </div>
    </nav>
  );
}

export default Navbar
