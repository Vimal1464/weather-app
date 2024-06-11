import React from "react";
import { getMonthName, getWeekName } from "../../utils/dateFunction";
const DayWiseTempCard = ({ day, icon, temp, selectedCard, onPress }) => {

  return (
    <>
      <div onClick={onPress} className={`DayWiseTempCard ${selectedCard&&"Active"}`}>
        <p>{getWeekName(day)}</p>
        <div className="icon">
          <img src={icon} alt="" />
        </div>
        <p>
          {temp}
          <span>°</span>
        </p>
      </div>
    </>
  );
};

export default DayWiseTempCard;
