"use client";

import { useAppContext } from "@components/Location";

const Today = () => {
  const { sharedCity, info, temp, degrees } = useAppContext();

  const current = info?.current;
  const forecast = info?.forecast?.forecastday?.[0];
  const morning = forecast?.hour?.[8];
  const afternoon = forecast?.hour?.[14];
  const evening = forecast?.hour?.[20];

  return (
    <div>
      <h1 className="head_text text-center">Today</h1>
      <h2>
        {sharedCity}, {forecast?.date}
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
    </div>
  );
};

export default Today;
