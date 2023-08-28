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
        `http://api.weatherapi.com/v1/forecast.json?key=4b29fe7e2c53460cb60235149232108&q=${city}&days=1`
      ).then((res) => {
        const allInfo = res.data;
        setInfo(allInfo);
      });
    }
  }, [city]);

  const forecast = info?.forecast?.forecastday?.[0];
  const hour = forecast?.hour;

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
      <h2>
        {city}, {forecast?.date}
      </h2>
      {hour && (
        <div>
          {hour.map((hourData, index) => {
            const parsedTime = new Date(hourData?.time).toLocaleTimeString([], {
              hour: "numeric",
              minute: "2-digit",
            });

            return (
              <div key={index}>
                <h3>
                  {parsedTime} | {hourData?.[temp]}&deg;{degrees} |{" "}
                  <img
                    src={`http:${hourData?.condition?.icon}`}
                    alt="condition"
                    height={80}
                    width={80}
                  />{" "}
                  {hourData?.condition?.text}
                </h3>
              </div>
            );
          })}
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
