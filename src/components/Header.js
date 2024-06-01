import React from 'react'
import '../styles/header.css'
import aboaticon from '../assets/aboaticon.png'
import adiscordicon from '../assets/adiscordicon.png'
import axicon from '../assets/axicon.png'

function Header() {
  return (
    <header>
      <nav>
        <div className="header-logo-section">
          <p>ATOM</p>
        </div>
        <div className="header-menu-section">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Roadmap</li>
            <li>Team</li>
            <li>Links</li>
          </ul>
        </div>
        <div className="header-socicon-section">
          <img src={aboaticon}/>
          <img src={adiscordicon}/>
          <img src={axicon}/>
        </div>
      </nav>
    </header>
  )
}

export default Header
