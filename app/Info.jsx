"use client";

import Axios from "axios";
import { useEffect, useState } from "react";

const Info = ({ city }) => {
  const [info, setInfo] = useState("");

  useEffect(() => {
    if (city) {
      Axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=4b29fe7e2c53460cb60235149232108&q=${city}&days=3`
      ).then((res) => {
        const allInfo = res.data;
        setInfo(allInfo);
      });
    }
  }, [city]);

  const current = info?.current;
  const forecast = info?.forecast?.forecastday;

  return (
    <div>
      <h1 className="head_text text-center">{current?.temp_f}</h1>
      <div className="flex-center">
        <img
          src={`https:${current?.condition?.icon}`}
          alt="Icon"
          width={80}
          height={80}
          className="rounded-full"
        />
      </div>
      <p className="desc text-center">{current?.condition?.text}</p>
      {forecast && (
        <div className="forecast-container">
          {forecast.map((forecastDay, index) => (
            <div key={index}>
              <h2>{forecastDay?.date}</h2>
              <img
                src={`https:${forecastDay?.day?.condition?.icon}`}
                alt="Icon"
                width={80}
                height={80}
                className="rounded-full"
              />
              <h2>High: {forecastDay?.day?.maxtemp_f}</h2>
              <h2>Low: {forecastDay?.day?.mintemp_f}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Info;
