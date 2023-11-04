import heroImg from '../../assets/dentistImages/staff.jpg'
import tooth from '../../assets/tooth.png'
import arrowDown from '../../assets/arrowdown2.png'
import { useDisclosure,useMediaQuery  } from '@mantine/hooks';
import { Modal, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { Select } from '@mantine/core';
import './Hero.css'
export const Hero = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const [value, setValue] = useState(null);
    const isMobile = useMediaQuery("(max-width: 40em)")
  const theme = useMantineTheme();
  return (
    <div className='hero-container'>
        <header className='hero-header'>
            <h1 className='hero-h1'>
                Dentalux
            </h1>
            <span className="hero-span">
                თქვენი უნაკლო ღიმილისთვის
            </span>
            <a href="https://dentalux.dentos.ge/" onClick={open} className="hero-a">
                დაჯავშნე ვიზიტი
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

