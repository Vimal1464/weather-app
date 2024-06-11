import React from 'react';


const TempTransCard = ({icon}) => {
  return (
    <>
      <div className="TempTransCard">
        <div className="icon">
            <img src={icon} alt="" />
        </div>
        <div className="content">
            <h6 className='date'>Today, 11 June</h6>
            <h1 className='temp'>36 <sup>°</sup></h1>
            <h6 className='summary'>Sunny</h6>
        </div>
      </div>
    </>
  )
}

export default TempTransCard;
