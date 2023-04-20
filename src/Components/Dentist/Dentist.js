import './Dentist.css'
import callIcon from '../../assets/call-icon.png'
import { useDisclosure } from '@mantine/hooks';

import {DentistModal} from '../index'

const Dentist = ({name,position,tel,img, courses,education}) => {
    const [opened, {open, close}] = useDisclosure(false)
  return (
    <div className='dentist-card' >
        <div className="dentist-card-top">
            <img src={img} alt={name} />
            <p>{name}</p>
            <span>{position}</span>
        </div>
        <div className="dentist-card-bottom">
            <img src={callIcon} alt="call icon" />
            <p onClick={open}>ვრცლად...  </p>

        </div>
        <DentistModal education={education} courses={courses} img={img} position={position} opened={opened} onClose={close} title={name} />
    </div>
  )
}

export default Dentist