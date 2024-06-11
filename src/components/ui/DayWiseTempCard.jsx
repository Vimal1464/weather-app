import React from 'react'

const DayWiseTempCard = ({day, icon, temp, subTemp}) => {
  return (
    <>
      <div className="DayWiseTempCard">
            <p>{day}</p>
            <div className="icon">
                <img src={icon} alt="" />
            </div>
            <p>{temp} <span>{subTemp}</span></p>
      </div>
    </>
  )
}

export default DayWiseTempCard;
