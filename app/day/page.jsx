"use client";

import { useEffect, useState } from "react";
import Info from "@app/day/Info";
import { location } from "@components/location";

const Day = () => {
  const [city, setCity] = useState("");
  const newCity = location();

  useEffect(() => {
    setCity(newCity);
  }, [newCity]);

  return (
    <div>
      <h1 className="head_text text-center">7-Day Forecast</h1>
      <Info city={city} />
    </div>
  );
};

export default Day;
