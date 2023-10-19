 import { Link } from 'react-router-dom'
import logo from  '../../assets/logo.png'


 import './Navigation.css'
import { useState } from 'react'
export const Navigation = () => {
  const [menu, setMenu] = useState(false)
  return (
    <div className='navigation-container'>
        <div className="logo">
        <Link to='/' className='link'>

            <img src={logo} alt="Logo" />
        </Link>
            <span>Dentalux</span>
        </div>
        <nav className='navigation' >
            <ul className='nav-links' style={{top:menu?'0':'-100%'}}>
              <div className="nav-btn">
              <Link to='/' className='link'>მთავარი</Link>
              </div>
              <div className="nav-btn">
              <Link  to='/about' className='link'>ჩვენს შესახებ</Link>
              </div>
              <div className="nav-btn">
              <Link to='/dentists' className='link'>ექიმები</Link>
              </div>
              <div className="nav-btn">
              <Link to='/works' className='link'>Smile Gallery</Link>
              </div>
                
            </ul>
        </nav>
        <span className='nav-contact'>
           <Link className='link' to='/contacts'  >კონტაქტები</Link> 
        </span>
        <div className='ham' onClick={()=>setMenu(prev=>!prev)} style={{width:'60px',height:'60px'}}>
            <span className="ham-span" ></span>
            <span className="ham-span" ></span>
            <span className="ham-span" ></span>
        </div>
    </div>
  )
}

