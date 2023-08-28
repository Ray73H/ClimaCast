"use client";

import { useAppContext } from "@components/Location";

const Day = () => {
  const { sharedCity, info, temp, degrees } = useAppContext();

  const forecastDays = info?.forecast?.forecastday;

  return (
    <div className="text-center">
      <h1 className="text-3xl font-semibold mb-4">7-Day Forecast</h1>
      <h2 className="text-xl mb-4">{sharedCity}</h2>
      {forecastDays && (
        <div className="flex flex-wrap justify-center">
          {forecastDays.map((forecastDay, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-lg mx-2 mb-4"
            >
              <h3 className="mb-2">{forecastDay?.date}</h3>
              <div className="flex-center">
                <img
                  src={`http:${forecastDay?.day?.condition?.icon}`}
                  alt="condition"
                  height={80}
                  width={80}
                  className="mx-auto"
                />
              </div>
              <h3 className="font-semibold mb-1">
                High: {forecastDay?.day?.[`max${temp}`]}&deg;{degrees}
              </h3>
              <h3>
                Low: {forecastDay?.day?.[`min${temp}`]}&deg;{degrees}
              </h3>
              <p className="mb-1">{forecastDay?.day?.condition?.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Day;
