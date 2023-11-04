
import { Card } from '@mantine/core';
import { useRef, useState } from 'react'

import { services } from '../../constants'
import './Services.css'
export const Services = () => {
  const [flip, setFlip] = useState(false)
  

  
  
    return (
      <div className='service-container'>
        <h1>ჩვენ გთავაზობთ პროფესიონალურ სტომატოლოგიურ მოვლას უახლესი ტექნოლოგიების გამოყენებით</h1>
        {
          services.map((service)=>
           {
            return(<div className="card">
            <div onClick={(e)=> setFlip(prev=>!prev)} className={flip?'card__inner is-flipped':'card__inner'}>
              <div className="card__face card__face--front">
                <h2>{service.name}</h2>
                <img src={service.img} alt="" className='service-img-front' />
              </div>
              <div className="card__face card__face--back">
                <div className="card__content">
                  <div className="card__header">
                    <img src={service.img} alt="" className="pp" />
                    <h2>{service.name}</h2>
                  </div>
                  <div className="card__body">
        
                    <p>{service.desc}</p>
                     <a className='service-javshani' href='https://dentos.ge/stomatologiuri-klinikebi/%E1%83%93%E1%83%94%E1%83%9C%E1%83%A2%E1%83%90%E1%83%9A%E1%83%A3%E1%83%A5%E1%83%A1%E1%83%98/?&page=1' >ჩაეწერე</a>
                  </div> 
                </div>
              </div>
            </div>
          </div>)
          })
        }
      </div>
    );
}

