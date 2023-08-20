import React, { useState } from "react";
import "./styles/temperatureApp.css";

export const TemperatureApp: React.FC = () => {
  const [temperature, setTemperature] = useState<number>(0);

  const temperatureIncrease = () => {
    if (temperature >= 0 && temperature < 40) {
      setTemperature(temperature + 1);
    }
  };

  const temperatureDecrease = () => {
    if (temperature > 0 && temperature <= 40) {
      setTemperature(temperature - 1);
    }
  };

  const getBackgroundColor = () => {
    if (temperature >= 30) {
      return "#ff5252";
    } else if (temperature < 15) {
      return "#3498db";
    } else {
      return "#2ecc71";
    }
  };

  return (
    <>
      <div
        className="temperature-container"
        style={{
          backgroundColor: getBackgroundColor(),
        }}
      >
        <h1 className="title">Temperature Control App</h1>
        <div className="display-container">
          <p className="temperature">{temperature}&deg;C</p>
        </div>
        <div className="button-container">
          <button className="increment" onClick={temperatureIncrease}>
            +
          </button>
          <button className="decrement" onClick={temperatureDecrease}>
            -
          </button>
        </div>
      </div>
    </>
  );
};
