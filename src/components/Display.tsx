import React from "react";
import { TempProps } from "../features/reducers";

const Display: React.FC<TempProps> = ({ temp }) => {
  return (
    <>
      <div className="display-container">
        <h2 className="temperature">{temp}&deg;C</h2>
      </div>
    </>
  );
};

export default Display;
