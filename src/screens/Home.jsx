import React, { useEffect, useState } from "react";
import "../../src/styles/Home.css";
import HeroSection from "../components/HeroSection";
import TempToggleBtn from "../components/ui/TempToggleBtn";
import DayWiseTempCard from "../components/ui/DayWiseTempCard";
import sunnyCloudPng from "../../src/assests/sunnyCloudPng.png";
import hot from "../../src/assests/Sweltering.png";
import bracing from "../../src/assests/bracing.png";
import "../../src/styles/ui/ui.css";
import { getWeatherForeCast } from "../api/weather-api";
import hottest from "../assests/hottest.png";
import rain from "../assests/rain.jpg";
import sunnyImage from "../assests/sunnyImage.png";
import cool from "../assests/cold.png";

const getBgImage = (summary) => {
  switch (summary) {
    case "Cool":
    case "Bracing":
      return cool;
    case "Sweltering":
      return hottest;
    case "Scorching":
      return sunnyImage;
    default:
      return rain;
  }
};

const getIcon = (summary) => {
  if (summary === "Cool") {
    return sunnyCloudPng;
  } else if (["Hot", "Sweltering", "Scorching"].includes(summary)) {
    return hot;
  } else {
    return bracing;
  }
};

const Home = () => {
  const [weatherData, setWeatherData] = useState([
   {
      "date":"2024-06-12",
      "temperatureC":3,
      "temperatureF":37,
      "summary":"Cool"
   },
   {
      "date":"2024-06-13",
      "temperatureC":8,
      "temperatureF":46,
      "summary":"Hot"
   },
   {
      "date":"2024-06-14",
      "temperatureC":17,
      "temperatureF":62,
      "summary":"Bracing"
   },
   {
      "date":"2024-06-15",
      "temperatureC":-4,
      "temperatureF":25,
      "summary":"Sweltering"
   },
   {
      "date":"2024-06-16",
      "temperatureC":-12,
      "temperatureF":11,
      "summary":"Scorching"
   }
]);
  const [isC, setC] = useState(true);
  const [selectedCard, setSelectedCard] = useState(0);
  const [selectedCardValue, setSelectedCardValue] = useState(weatherData[0]);

  const handleCardPress = (date, index) => {
    setSelectedCard(index);
    setSelectedCardValue(date);
  };

  // const [screenLoader, setScreenLoader] = useState(false);

  // async function getData() {
  //   setScreenLoader(true);
  //   try {
  //     const res = await getWeatherForeCast();

  //     setWeatherData(res);
  //   } catch (error) {
  //     console.log(error);
  //     alert("error");
  //   }
  //   setScreenLoader(false);
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <>
      <div className="main_home">
        <HeroSection
          bgImage={getBgImage(selectedCardValue?.summary)}
          isC={isC}
          data={selectedCardValue}
        />

        <div className="main_home_inner">
          <div className="daywise_section">
            <div className="headBTns">
              <TempToggleBtn setC={() => setC(!isC)} isC={isC} name="°C" />
              <TempToggleBtn setC={() => setC(!isC)} isC={!isC} name="°F" />
            </div>
            <div className="daywise_cards">
              {weatherData.map((date, index) => (
                <DayWiseTempCard
                  selectedCard={index === selectedCard}
                  onPress={() => handleCardPress(date, index)}
                  key={index}
                  day={date.date}
                  temp={isC ? date.temperatureC : date.temperatureF}
                  icon={getIcon(date.summary)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;