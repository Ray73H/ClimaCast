"use client";

import { useAppContext } from "@components/Location";

const Alerts = () => {
  const { sharedCity, info } = useAppContext();

  const alerts = info?.alerts?.alert;

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="text-center mb-6 max-w-screen-lg mx-auto">
        <h1 className="text-3xl font-semibold mb-4">Weather Alerts</h1>
        <h2 className="text-xl">
          {sharedCity}, {info?.forecast?.forecastday?.[0]?.date}
        </h2>
      </div>
      {alerts && (
        <div className="max-w-screen-lg mx-auto">
          {alerts.map((alertNum, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-lg mb-4 text-center"
            >
              <h3 className="mb-2 text-lg font-semibold">
                {alertNum?.event} — {alertNum?.effective}
              </h3>
              <p className="mb-2">
                <span className="font-semibold">Description:</span>{" "}
                {alertNum?.desc}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Instructions:</span>{" "}
                {alertNum?.instruction}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Areas:</span> {alertNum?.areas}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Alerts;
