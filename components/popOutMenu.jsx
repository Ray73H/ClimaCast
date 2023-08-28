import React from "react";
import { useState } from "react";
import { useAppContext } from "@components/Location";
import Axios from "axios";

const PopOutMenu = () => {
  const [searchText, setSearchText] = useState("");
  const [isFahrenheit, setF] = useState(true);
  const [isCelsius, setC] = useState(false);
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
    setF(true);
    setC(false);
  };
  const celsiusButtonClick = () => {
    setDegrees("C");
    setTemp("temp_c");
    setC(true);
    setF(false);
  };

  return (
    <div className="pop-out-menu bg-white border border-gray-300 shadow-lg p-4 rounded-lg absolute top-6 right-6 z-10">
      <input
        type="text"
        placeholder="Search Location..."
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        onKeyPress={handleKeyPress}
        className="w-full py-2 px-3 border rounded-md text-sm mb-2"
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mb-2"
        onClick={findCurrentLocation}
      >
        Use Current Location
      </button>
      <div className="flex items-center mb-2">
        <p className="mr-2">Toggle Units:</p>
        <button
          className={`mr-2 px-3 py-1 rounded-md ${
            isFahrenheit
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-800"
          }`}
          onClick={fahrenheitButtonClick}
        >
          &deg;F
        </button>
        <button
          className={`px-3 py-1 rounded-md ${
            isCelsius ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-800"
          }`}
          onClick={celsiusButtonClick}
        >
          &deg;C
        </button>
      </div>
    </div>
  );
};

export default PopOutMenu;
