import implant from '../../assets/implant.jpg'
import orthodontics from '../../assets/orthodontics.jpg'
import surgery from '../../assets/surgery.jpg'
import tooth2 from '../../assets/tooth2.png'
import { services } from '../../constants'
import './Services.css'
export const Services = () => {
  return (
    <div className='services-container'>
        <h1 className='service-h1' >სერვისები</h1>
        <div className="main-services">
            <div className="main-services-left">
                <img src={implant} alt="implant" />
                <p>იმპლანტაცია</p>
            </div>
            <div className="main-services-right">
                <div className='orthodontics'>
                    <img src={orthodontics} alt="orthodontics"  />
                     <p>ორთოდონტია</p>
                </div>
                <div className='surgery'>
                    <img src={surgery} alt="surgery" />
                     <p>ქირურგია</p>
                </div>
            </div>
        </div>
        <div className="secondary-services">
            {
                services.map(service=>{
                    return(
                        <div className='secondary-service' key={service.name}>
                            <img src={service.img} alt={service.name} />
                            <p>{service.name}</p>
                        </div>
                    )
                })
            }
        </div>
        <img src={tooth2} className='tooth2' alt="abc" />
    </div>
  )
}

