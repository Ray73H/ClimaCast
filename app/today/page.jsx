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
    <div className="flex justify-center items-center flex-col">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-semibold mb-4">Today</h1>
        <h2 className="text-xl">
          {sharedCity}, {forecast?.date}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-100 rounded-lg shadow-lg mb-6">
        <div className="text-center">
          <h3 className="font-semibold mb-1">
            Morning: {morning?.[temp]}&deg;{degrees}
          </h3>
          <img
            src={`http:${morning?.condition?.icon}`}
            alt="condition"
            height={80}
            width={80}
            className="mx-auto"
          />
          <h3 className="mb-2">{morning?.condition?.text}</h3>
        </div>
        <div className="text-center">
          <h3 className="font-semibold mb-1">
            Afternoon: {afternoon?.[temp]}&deg;{degrees}
          </h3>
          <img
            src={`http:${afternoon?.condition?.icon}`}
            alt="condition"
            height={80}
            width={80}
            className="mx-auto"
          />
          <h3 className="mb-2">{afternoon?.condition?.text}</h3>
        </div>
        <div className="text-center">
          <h3 className="font-semibold mb-1">
            Evening: {evening?.[temp]}&deg;{degrees}
          </h3>
          <img
            src={`http:${evening?.condition?.icon}`}
            alt="condition"
            height={80}
            width={80}
            className="mx-auto"
          />
          <h3 className="mb-2">{evening?.condition?.text}</h3>
        </div>
      </div>
      <div className="text-center">
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
