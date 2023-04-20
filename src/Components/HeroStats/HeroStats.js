import hospital from '../../assets/hospitals.png'
import costumers from '../../assets/costumers.png'
import dentists from '../../assets/dentists.png'

import './HeroStats.css'
export const HeroStats = () => {
  return (
    <div className='hero-stats'>
        <div className="hero-stats-wrapper">
            <div className="hero-stats">
                <img src={dentists} alt="dentists" />
                <span>74</span>
                <p>სტომატოლოგი</p>
            </div>
            <div className="hero-stats">
                <img src={hospital} alt="dentists" />
                <span>3</span>
                <p>ფილიალი</p>
            </div>
            <div className="hero-stats">
                <img src={costumers} alt="dentists" />
                <span>5000+</span>
                <p>კმაყოფილი მომხმარებელი</p>
            </div>
            
        </div>

    </div>
  )
}
