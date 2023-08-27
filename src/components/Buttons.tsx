import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Decrement, Increment } from "../features/actions";
import { TempState } from "../features/reducers";

const Buttons: React.FC = () => {
  const temp = useSelector((state: TempState) => state.Temp);
  const dispatch = useDispatch();

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
