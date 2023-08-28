import React from "react";
import { useState } from "react";
import { useAppContext } from "@components/Location";
import Axios from "axios";

const PopOutMenu = () => {
  const [searchText, setSearchText] = useState("");
  const { setSharedCity, setTemp, setDegrees } = useAppContext();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();

      setSharedCity(searchText);
    }
  };

  const findCurrentLocation = () => {
    Axios.get(
      "http://api.weatherapi.com/v1/ip.json?key=4b29fe7e2c53460cb60235149232108&q=auto:ip"
    ).then((res) => {
      setSharedCity(res.data.city);
    });
  };

  const fahrenheitButtonClick = () => {
    setDegrees("F");
    setTemp("temp_f");
  };
  const celsiusButtonClick = () => {
    setDegrees("C");
    setTemp("temp_c");
  };

  return (
    <div className="pop-out-menu">
      <input
        type="text"
        placeholder="Search Location..."
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button className="" onClick={findCurrentLocation}>
        Use current location
      </button>
      <div>
        Toggle Units: <button onClick={fahrenheitButtonClick}>&deg;F</button>
        {" | "}
        <button onClick={celsiusButtonClick}>&deg;C</button>
      </div>
      <button>Dark Theme</button>
    </div>
  );
};

export default PopOutMenu;
