 import { Link } from 'react-router-dom'
import logo from  '../../assets/logo.png'


 import './Navigation.css'
export const Navigation = () => {
  return (
    <div className='navigation-container'>
        <div className="logo">
            <img src={logo} alt="Logo" />
            <span>Dentalux</span>
        </div>
        <nav className='navigation' >
            <ul className='nav-links'>
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
    </div>
  )
}

