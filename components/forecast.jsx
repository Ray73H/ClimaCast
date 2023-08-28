"use client";

import Axios from "axios";
import { useEffect } from "react";

export function changeForecast(sharedCity, setInfo) {
  useEffect(() => {
    const fetchForecast = async () => {
      try {
        if (sharedCity) {
          const response = await Axios.get(
            `http://api.weatherapi.com/v1/forecast.json?key=4b29fe7e2c53460cb60235149232108&q=${sharedCity}&days=7`
          );
          const allInfo = response.data;
          setInfo(allInfo);
        }
      } catch (error) {
        console.error("Error fetching forecast:", error);
      }
    };

    fetchForecast();
  }, [sharedCity, setInfo]);
}
