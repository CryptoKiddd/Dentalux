import React from 'react'
import logo from  '../../assets/logo.png'
 import './Navigation.css'
const Navigation = () => {
  return (
    <div className='navigation-container'>
        <div className="logo">
            <img src={logo} alt="Logo" />
            <span>Dentalux</span>
        </div>
        <nav className='navigation' >
            <ul className='nav-links'>
                <li>ჩვენს შესახებ</li>
                <li>სერვისები</li>
                <li>ექიმები</li>
                <li>Smile Gallery</li>
            </ul>
        </nav>
        <span className='nav-contact'>
            დაგვიკავშირდით
        </span>
    </div>
  )
}

export default Navigation