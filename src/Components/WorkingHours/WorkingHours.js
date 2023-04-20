import Switch from "../../assets/atoms/Switch/Switch"
import { workingHours } from "../../constants"
import tooth3 from '../../assets/tooth3.png'

import './WorkingHours.css'
export const WorkingHours = () => {
  return (
    <div className="working-hours-container">
        <div className="working-hours-wrapper">
            {
                workingHours.map(days=>{
                    return(
                       <div className="day">
                        <Switch on={days.working} />
                        <span className="day-span" >{days.day}</span>
                        <span className="hours-span">{days.hours}</span>
                        {
                            days.working? <span className="break">შესვენება</span>:''
                        }
                       
                        <span>{days.break}</span>
                       </div>
                    )
                })
            }
        </div>
        <div className="tooth3">
            <img src={tooth3} alt="tooth" />
        </div>

    </div>
  )
}

