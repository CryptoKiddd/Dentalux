import heroImg from '../../assets/hero-smile.png'
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
                სადაც ხელოვნება ხვდება სტომატოლოგიას თქვენი უნაკლო ღიმილისთვის
            </span>
            <a href="#" onClick={open} className="hero-a">
                დაგვირეკეთ ჩასაწერად
            </a>
        </header>
        <Modal
        opened={opened}
        onClose={close}
        title="ჩაეწერე"
        size='xl'
        height={200}
        fullScreen={isMobile}
        overlayProps={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
      >
       <p>აირჩიეთ ფილიალი</p>
      <Select mb={15} value={value} onChange={setValue} data={[{ value: '598111111', label: 'გორაგასალი' },{ value: '599222222', label: 'ახმეტელი' },{ value: '555333333', label: 'გორკი' }]} />
     {value && <p style={{margin:'20px 0'}}>ტელეფონი : {value} </p> } 
      {value &&  <a href="tel:+995598987213" className='booking'>დააწკაპე დასარეკად</a> }
      </Modal>
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

