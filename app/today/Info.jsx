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
        `http://api.weatherapi.com/v1/forecast.json?key=4b29fe7e2c53460cb60235149232108&q=${city}&days=3`
      ).then((res) => {
        const allInfo = res.data;
        setInfo(allInfo);
      });
    }
  }, [city]);

  const current = info?.current;
  const forecast = info?.forecast?.forecastday?.[0];
  const morning = forecast?.hour?.[8];
  const afternoon = forecast?.hour?.[14];
  const evening = forecast?.hour?.[20];

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
      <div className="forecast-container">
        <div>
          <h3>
            Morning: {morning?.[temp]}&deg;{degrees}
          </h3>
          <img
            src={`http:${morning?.condition?.icon}`}
            alt="condition"
            height={80}
            width={80}
          />
          <h3>{morning?.condition?.text}</h3>
        </div>
        <div>
          <h3>
            Afternoon: {afternoon?.[temp]}&deg;{degrees}
          </h3>
          <img
            src={`http:${afternoon?.condition?.icon}`}
            alt="condition"
            height={80}
            width={80}
          />
          <h3>{afternoon?.condition?.text}</h3>
        </div>
        <div>
          <h3>
            Evening: {evening?.[temp]}&deg;{degrees}
          </h3>
          <img
            src={`http:${evening?.condition?.icon}`}
            alt="condition"
            height={80}
            width={80}
          />
          <h3>{evening?.condition?.text}</h3>
        </div>
      </div>
      <div>
        <p>Sunrise: {forecast?.astro?.sunrise}</p>
        <p>Sunset: {forecast?.astro?.sunset}</p>
        <p>Humidity: {current?.humidity}</p>
        <p>Wind: {current?.wind_mph}mph</p>
        <p>Pressure: {current?.pressure_in}in</p>
      </div>
      <div>
        Toggle Units: <button onClick={fahrenheitButtonClick}>&deg;F</button>
        {" / "}
        <button onClick={celsiusButtonClick}>&deg;C</button>
      </div>
    </div>
  );
};

export default Info;
