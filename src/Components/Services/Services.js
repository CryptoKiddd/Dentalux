
import { useRef, useState } from 'react'

import { services } from '../../constants'
import './Services.css'
export const Services = () => {
    const [openServiceIdx, setOpenServiceIdx] = useState(null);
    const expandedServiceRef = useRef(null);
  
    function animateServiceCard(idx) {
      setOpenServiceIdx((prevIdx) => (prevIdx === idx ? null : idx));
    }
  
    const getServiceCardHeight = (idx) => {
      return openServiceIdx === idx ? 'auto' : '310px';
    };
  
    const getServiceCardWidth = (idx) => {
      return openServiceIdx === idx ? '100%' : '500px';
    };
  
    return (
      <div className='service-container'>
        <h1>ჩვენ გთავაზობთ პროფესიონალურ სტომატოლოგიურ მოვლას უახლესი ტექნოლოგიების გამოყენებით</h1>
        {services.map((service, idx) => (
          <div
            ref={idx === openServiceIdx ? expandedServiceRef : null}
            style={{
              height: getServiceCardHeight(idx),
              width: getServiceCardWidth(idx),
            }}
            className={`service-card ${openServiceIdx === idx ? 'expanded' : ''}`}
            key={service.name}
          >
            {openServiceIdx !== idx && <img src={service.img} alt='' />}
            <h2 className='servicename'>{service.name}</h2>
            <div className='service-card-content'>
              <p>{service.desc}</p>
              {openServiceIdx === idx && (
                <div className='serviceinfo'>
                  {service.info}
                </div>
              )}
              <p
                onClick={() => {
                  animateServiceCard(idx);
                }}
                className='service-more-info'
              >
                {openServiceIdx === idx ? 'დახურვა' : 'ვრცლად'}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
}

