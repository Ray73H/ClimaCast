"use client";

import { useAppContext } from "@components/Location";

const Alerts = () => {
  const { sharedCity, info } = useAppContext();

  const alerts = info?.alerts?.alert;

  return (
    <div>
      <h1 className="head_text text-center">Weather Alerts</h1>
      <h2>
        {sharedCity}, {info?.forecast?.forecastday?.[0]?.date}
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

export default Alerts;
