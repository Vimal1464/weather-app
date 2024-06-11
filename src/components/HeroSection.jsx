import React, { useState } from 'react';
import { HeroSectionContent } from '../contents/HomeContent';
import TempTransCard from './TempTransCard';
import tempPng from '../../src/assests/sunnyPng.png';
import tempbgImg from '../../src/assests/sunnyImage.png';


const HeroSection = ({data,isC,bgImage}) => {
    
 
  return (
    <>
      <div className="HeroSection" style={{backgroundImage:`url(${bgImage})`}}>
        <div className="HeroSection_inner">
            <div className="title_left">
                <div className="subtitle"><span className='line'></span> <p>{HeroSectionContent.subtitle}</p></div>
                <h1>{HeroSectionContent.title}</h1>
                <p>{HeroSectionContent.paragragh}</p>
            </div>
            <div className="tempCard_right">
                <TempTransCard data={data} isC={isC} icon={tempPng} />
            </div>
        </div>



      </div>
    </>
  )
}

export default HeroSection;
