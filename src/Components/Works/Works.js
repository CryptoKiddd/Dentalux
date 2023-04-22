
import { works } from "../../constants"
import tooth from '../../assets/tooth.png'
import tooth2 from '../../assets/tooth2.png'

import './Works.css'

export const Works = () => {
  return (
    <div className='works-container'>
        <div className="works-wrapper">
            {
                works.map((work,idx)=>{
                    return (

                    <div key={idx} className="works-card">
                        <div className="work-img">
                            <img src={work.img} alt={work.name} />
                        </div>
                        <div className="work-info">
                            <h3>{work.name}</h3>
                            <p className="work-desc"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, voluptates? </p>
                            <span >ხანგრძლივობა: {work.timePeriod}</span>
                        </div>

                    </div>
                    )
                })
            }
            <div className="work-tooth-1">
                <img src={tooth} alt="" />
            </div>
            <div className="work-tooth-2">
                <img src={tooth2} alt="" />
            </div>
            <div className="work-tooth-3">
                <img src={tooth} alt="" />
            </div>

        </div>

    </div>
  )
}

