"use client";

import { useAppContext } from "@components/Location";

export const Home = () => {
  const { sharedCity, info, temp, degrees } = useAppContext();

  const current = info?.current;
  const forecast = info?.forecast?.forecastday;

  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">{sharedCity}</h1>
      <div>
        <h1 className="head_text text-center">{current?.[temp]}</h1>
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
            {forecast.slice(0, 3).map((forecastDay, index) => (
              <div key={index}>
                <h2>{forecastDay?.date}</h2>
                <img
                  src={`https:${forecastDay?.day?.condition?.icon}`}
                  alt="Icon"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <h2>High: {forecastDay?.day?.[`max${temp}`]}</h2>
                <h2>Low: {forecastDay?.day?.[`min${temp}`]}</h2>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
