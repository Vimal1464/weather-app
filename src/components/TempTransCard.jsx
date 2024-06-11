import React from "react";
import { getDate, getMonthName, getWeekName } from "../utils/dateFunction";

const TempTransCard = ({ icon, data, isC }) => {
  return (
    <>
      <div className="TempTransCard">
        <div className="icon">
          <img src={icon} alt="" />
        </div>
        <div className="content">
          <h6 className="date">
            {getWeekName(data.date) +
              ", " +
              getDate(data.date) +
              " " +
              getMonthName(data.date)}
          </h6>
          <h1 className="temp">
            {isC ? data.temperatureC : data.temperatureF} <sup>°</sup>
          </h1>
          <h6 className="summary">{data.summary}</h6>
        </div>
      </div>
    </>
  );
};

export default TempTransCard;
