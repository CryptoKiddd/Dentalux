import heroImg from '../../assets/hero-smile.png'
import tooth from '../../assets/tooth.png'
import arrowDown from '../../assets/arrowdown2.png'
import './Hero.css'
export const Hero = () => {
  return (
    <div className='hero-container'>
        <header className='hero-header'>
            <h1 className='hero-h1'>
                Dentalux
            </h1>
            <span className="hero-span">
                სადაც ხელოვნება ხვდება სტომატოლოგიას თქვენი უნაკლო ღიმილისთვის
            </span>
            <a href="callto:+18002684686" className="hero-a">
                დაგვირეკეთ ჩასაწერად
            </a>
        </header>
        <div className="hero-right">
            <img className='hero-img' src={heroImg} alt="Hero" />
        </div>
        <img className='hero-tooth' src={tooth} alt="tooth" />
        <div className="arrowDown">

        <img  src={arrowDown} alt="arrowDown" />
        </div>

    </div>
  )
}

