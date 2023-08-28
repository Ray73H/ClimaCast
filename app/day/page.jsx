"use client";

import { useAppContext } from "@components/Location";

const Day = () => {
  const { sharedCity, info, temp, degrees } = useAppContext();

  const forecastDays = info?.forecast?.forecastday;

  return (
    <div>
      <h1 className="head_text text-center">7-Day Forecast</h1>
      <h2>{sharedCity}</h2>
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
    </div>
  );
};

export default Day;
