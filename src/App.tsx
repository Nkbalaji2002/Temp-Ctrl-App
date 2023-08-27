import React from "react";
import "./styles/styles.css";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { TempState } from "./features/reducers";
import Display from "./components/Display";

export const App: React.FC = () => {
  const temp = useSelector((state: TempState) => state.Temp);
  const dispatch = useDispatch()

  const getBackgroundColor = () => {
    if (temp >= 30) {
      return "#ff5252";
    } else if (temp < 15) {
      return "#3498db";
    } else {
      return "#2ecc71";
    }
  };

  return (
    <>
      <div className="app">
        <div
          className="temperature-container"
          style={{
            backgroundColor: getBackgroundColor(),
          }}
        >
          <Header />
          <Display temp={temp} />
          <Buttons temp={temp} dispatch={dispatch} />
        </div>
      </div>
    </>
  );
};
