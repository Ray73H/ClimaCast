"use client";

import { useAppContext } from "@components/Location";

const Hourly = () => {
  const { sharedCity, info, temp, degrees } = useAppContext();

  const forecast = info?.forecast?.forecastday?.[0];
  const hour = forecast?.hour;

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-semibold mb-4">Hourly Forecast</h1>
        <h2 className="text-xl">
          {sharedCity}, {forecast?.date}
        </h2>
      </div>
      {hour && (
        <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-6">
          {hour.map((hourData, index) => {
            const parsedTime = new Date(hourData?.time).toLocaleTimeString([], {
              hour: "numeric",
              minute: "2-digit",
            });

            return (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-lg md:mb-0 text-center"
              >
                <h3 className="font-semibold mb-1">
                  {parsedTime} | {hourData?.[temp]}&deg;{degrees}
                </h3>
                <div className="flex-center">
                  <img
                    src={`http:${hourData?.condition?.icon}`}
                    alt="condition"
                    height={80}
                    width={80}
                    className="mx-auto"
                  />
                </div>
                <p className="mb-1">{hourData?.condition?.text}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Hourly;
