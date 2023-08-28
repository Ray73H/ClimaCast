"use client";

import { useEffect, useState } from "react";
import Info from "@app/alerts/Info";
import { location } from "@components/location";

const Alerts = () => {
  const [city, setCity] = useState("");
  const newCity = location();

  useEffect(() => {
    setCity(newCity);
  }, [newCity]);

  return (
    <div>
      <h1 className="head_text text-center">Weather Alerts</h1>
      <Info city={city} />
    </div>
  );
};

export default Alerts;
