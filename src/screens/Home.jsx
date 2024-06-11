import React, { useState } from 'react';
import '../../src/styles/Home.css'
import HeroSection from '../components/HeroSection';
import TempToggleBtn from '../components/ui/TempToggleBtn';
import DayWiseTempCard from '../components/ui/DayWiseTempCard';
import sunnyCloudPng from '../../src/assests/sunnyCloudPng.png';
import '../../src/styles/ui/ui.css';

const Home = () => {

  const [ToggleBtn, setToggleBtn] = useState(true);



  return (
    <>
      <div className="main_home">
        <HeroSection />

        <div className="main_home_inner">
          <div className="daywise_section">
            <div className="headBTns">
              <TempToggleBtn activeValue={ToggleBtn} name='°C' />
              <TempToggleBtn name='°F' />
            </div>
            <div className="daywise_cards">
              <DayWiseTempCard day='Tue' icon={sunnyCloudPng} temp='12°' subTemp='2°' />
              <DayWiseTempCard day='Tue' icon={sunnyCloudPng} temp='12°' subTemp='2°' />
              <DayWiseTempCard day='Tue' icon={sunnyCloudPng} temp='12°' subTemp='2°' />
              <DayWiseTempCard day='Tue' icon={sunnyCloudPng} temp='12°' subTemp='2°' />
              <DayWiseTempCard day='Tue' icon={sunnyCloudPng} temp='12°' subTemp='2°' />
              <DayWiseTempCard day='Tue' icon={sunnyCloudPng} temp='12°' subTemp='2°' />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home;
