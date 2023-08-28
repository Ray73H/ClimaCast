"use client";

import Axios from "axios";
import { useEffect, useState } from "react";

const Info = ({ city }) => {
  const [info, setInfo] = useState("");

  useEffect(() => {
    if (city) {
      Axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=4b29fe7e2c53460cb60235149232108&q=${city}&days=1&alerts=yes`
      ).then((res) => {
        const allInfo = res.data;
        setInfo(allInfo);
      });
    }
  }, [city]);

  const alerts = info?.alerts?.alert;

  return (
    <div>
      <h2>
        {city}, {info?.forecast?.forecastday?.[0]?.date}
      </h2>
      {alerts && (
        <div>
          {alerts.map((alertNum, index) => (
            <div key={index}>
              <h3>
                {alertNum?.event} --- {alertNum?.effective}
              </h3>
              <h3>Description: {alertNum?.desc}</h3>
              <h3>Instructions: {alertNum?.instruction}</h3>
              <h3>Areas: {alertNum?.areas}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Info;
