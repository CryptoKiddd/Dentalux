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
                <Link to='/' className='link'>მთავარი</Link>
                <Link  to='/about' className='link'>ჩვენს შესახებ</Link>
                <Link to='/dentists' className='link'>ექიმები</Link>
                <Link  className='link'>Smile Gallery</Link>
            </ul>
        </nav>
        <span className='nav-contact'>
           <Link to='/contacts'  >  დაგვიკავშირდით  </Link> 
        </span>
    </div>
  )
}

