import './Dentist.css'
// import callIcon from '../../assets/call-icon.png'
import { useDisclosure } from '@mantine/hooks';

import {DentistModal} from '../index'

const Dentist = ({name,position,tel,img, courses,education}) => {
    const [opened, {open, close}] = useDisclosure(false)
  return (
    <div className='dentist-card' >
        <div className="dentist-card-imgbox">
            <img src={img} alt={name} />
           
        </div>
        <div className="dentist-card-content">
          <div className="dentist-card-details">
            <h2>{name} <br /> <span>{position}</span></h2>
          </div>
          <div className="dentist-card-action-btn">
            <p onClick={open}>ვრცალად</p>
          </div>

        </div>
        <DentistModal education={education} courses={courses} img={img} position={position} opened={opened} onClose={close} title={name} />
    </div>
  )
}

export default Dentist