"use client";

import { useAppContext } from "@components/Location";

export const Home = () => {
  const { sharedCity, info, temp, degrees } = useAppContext();

  const current = info?.current;
  const forecast = info?.forecast?.forecastday;

  return (
    <section className="w-full flex justify-center items-center flex-col">
      <h1 className="text-4xl font-semibold mb-6">{sharedCity}</h1>
      <div className="max-w-screen-lg px-4 flex flex-col items-center">
        {" "}
        {/* Center align items */}
        <h1 className="text-6xl font-semibold mb-4">
          {current?.[temp]}&deg;{degrees}
        </h1>
        <div className="flex-center mb-4">
          {" "}
          {/* Center align horizontally */}
          <img
            src={`https:${current?.condition?.icon}`}
            alt="Icon"
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>
        <p className="text-xl mb-4">{current?.condition?.text}</p>
      </div>
      {forecast && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-screen-lg px-4">
          {" "}
          {/* Add max-w-screen-lg and padding */}
          {forecast.slice(0, 3).map((forecastDay, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-100 p-4 rounded-lg shadow-lg mb-4">
                <h2 className="font-semibold mb-2">{forecastDay?.date}</h2>
                <div className="flex-center">
                  <img
                    src={`https:${forecastDay?.day?.condition?.icon}`}
                    alt="Icon"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>
                <h2 className="mb-1">
                  High: {forecastDay?.day?.[`max${temp}`]}&deg;{degrees}
                </h2>
                <h2 className="mb-2">
                  Low: {forecastDay?.day?.[`min${temp}`]}&deg;{degrees}
                </h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Home;
