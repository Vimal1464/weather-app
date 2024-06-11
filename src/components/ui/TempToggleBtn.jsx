import React, { useState } from 'react'

const TempToggleBtn = ({name, activeValue}) => {
  const [isActive, setIsActive] = useState(activeValue);
  
  return (
    <>
      <button  className={isActive ? 'TempToggleBtn active' : 'TempToggleBtn'} >{name}</button>
    </>
  )
}

export default TempToggleBtn;
