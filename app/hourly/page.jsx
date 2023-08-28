"use client";

import { useAppContext } from "@components/Location";

const Hourly = () => {
  const { sharedCity, info, temp, degrees } = useAppContext();

  const forecast = info?.forecast?.forecastday?.[0];
  const hour = forecast?.hour;

  return (
    <div>
      <h1 className="head_text text-center">Hourly Forecast</h1>
      <h2>
        {sharedCity}, {forecast?.date}
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
    </div>
  );
};

export default Hourly;
