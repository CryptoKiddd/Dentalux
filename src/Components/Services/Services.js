
import tooth2 from '../../assets/tooth2.png'
import { services } from '../../constants'
import './Services.css'
export const Services = () => {
  return (
    <div className='service-container'>
        <h1>სერვისები</h1>
        {
            services.map(service=>{
                return(
                    <div className='service-card' key={service.name}>
                     <div className="service-card-imgbox">
                         <img src={service.img} alt="" />
                     </div>
                     <div className="service-card-content">
                         
                          <h2>{service.name}</h2>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatibus corrupti ipsum provident, quaerat ea nesciunt deleniti voluptatum quae! Tenetur!</p>
                          <span>ფასი 200₾</span>
                     </div>
                    </div>
                )
            })
        }
        {/* <img src={tooth2} className='tooth2' alt="abc" /> */}
    </div>
  )
}

