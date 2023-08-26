import React from "react";
import { Decrement, Increment, Reset } from "../features/actions";
import { useDispatch } from "react-redux";

const Buttons_Container: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="button-container">
        <button className="increment" onClick={() => dispatch(Increment())}>
          +
        </button>
        <button className="reset" onClick={() => dispatch(Reset())}>
          0
        </button>
        <button className="decrement" onClick={() => dispatch(Decrement())}>
          -
        </button>
      </div>
    </>
  );
};

export default Buttons_Container;
