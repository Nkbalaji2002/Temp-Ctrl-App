import React from "react";
import { Decrement, Increment } from "../features/actions";
import { Props } from "../features/reducers";

const Buttons: React.FC<Props> = ({ temp, dispatch }) => {
  return (
    <>
      <div className="button-container">
        {temp >= 0 && temp < 40 ? (
          <button className="increment" onClick={() => dispatch(Increment())}>
            +
          </button>
        ) : (
          ""
        )}
        {temp > 0 && temp <= 40 ? (
          <button className="decrement" onClick={() => dispatch(Decrement())}>
            -
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Buttons;
