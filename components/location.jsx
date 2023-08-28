"use client";

import Axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { changeForecast } from "./forecast";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [sharedCity, setSharedCity] = useState("");
  const [info, setInfo] = useState("");
  const [temp, setTemp] = useState("temp_f");
  const [degrees, setDegrees] = useState("F");

  useEffect(() => {
    Axios.get(
      "http://api.weatherapi.com/v1/ip.json?key=4b29fe7e2c53460cb60235149232108&q=auto:ip"
    ).then((res) => {
      setSharedCity(res.data.city);
    });
  }, []);

  changeForecast(sharedCity, setInfo);

  return (
    <AppContext.Provider
      value={{
        sharedCity,
        setSharedCity,
        info,
        setInfo,
        temp,
        setTemp,
        degrees,
        setDegrees,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
