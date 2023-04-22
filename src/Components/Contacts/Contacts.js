import './Contacts.css'
import fb from  '../../assets/fb-icon.png'
import call from  '../../assets/call-icon.png'
import location from  '../../assets/location.png'
import insta from  '../../assets/insta-icon.png'

export const Contacts = () => {
  return (
    <div className='contacts-container'>
      <div className="contacts-left">
        <h3>დაგვიკავშირდით</h3>
        <div>
          <img src={location} alt="efef" />
          <a href="">ვახტანგ გორგასალის 140</a>
        </div>
        <div>
          <img src={location}  alt="wcecw" />
          <a href="">ვახტანგ გორგასალის 140</a>
        </div>
        <div>
          <img src={location}  alt="wefwec" />
          <a href="" >ვახტანგ გორგასალის 140</a>
        </div>
        <div>
          <img src={fb}  alt="wefwef" />
          <a href="">Dentalux</a>
        </div>
        <div>
          <img src={insta}  alt="wefewf" />
          <a href="">Dentalux</a>
        </div>
      </div>
      <div className="contacts-right">
        <label htmlFor="name">
            სახელი
           <input type="text" />
        </label>
        <label htmlFor="name">
          გვარი
           <input type="email" />
        </label>
        <label htmlFor="name">
          ტელეფონი
           <input type="tel" />
        </label>
        <label htmlFor="name">
          ტექსტი
           <input type="textarea" />
        </label>
        <button>გაგზავნა</button>
       
      </div>
    </div>
  )
}

