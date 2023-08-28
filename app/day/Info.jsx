"use client";

import Axios from "axios";
import { useEffect, useState } from "react";

const Info = ({ city }) => {
  const [info, setInfo] = useState("");
  const [degrees, setDegrees] = useState("F");
  const [temp, setTemp] = useState("temp_f");

  useEffect(() => {
    if (city) {
      Axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=4b29fe7e2c53460cb60235149232108&q=${city}&days=7`
      ).then((res) => {
        const allInfo = res.data;
        setInfo(allInfo);
      });
    }
  }, [city]);

  const forecastDays = info?.forecast?.forecastday;

  const fahrenheitButtonClick = () => {
    setDegrees("F");
    setTemp("temp_f");
  };
  const celsiusButtonClick = () => {
    setDegrees("C");
    setTemp("temp_c");
  };

  return (
    <div>
      <h2>{city}</h2>
      {forecastDays && (
        <div>
          {forecastDays.map((forecastDay, index) => (
            <div key={index}>
              <h3>
                {forecastDay?.date} | High: {forecastDay?.day?.[`max${temp}`]}
                &deg;
                {degrees} | Low: {forecastDay?.day?.[`min${temp}`]}&deg;
                {degrees}
              </h3>
              <img
                src={`http:${forecastDay?.day?.condition?.icon}`}
                alt="condition"
                height={80}
                width={80}
              />
              <h3>{forecastDay?.day?.condition?.text}</h3>
            </div>
          ))}
        </div>
      )}
      <div>
        Toggle Units: <button onClick={fahrenheitButtonClick}>&deg;F</button>
        {" / "}
        <button onClick={celsiusButtonClick}>&deg;C</button>
      </div>
    </div>
  );
};

export default Info;
