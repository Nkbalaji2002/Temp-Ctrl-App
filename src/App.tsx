import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CounterState } from "./features/reducers";
import "./styles/styles.css";
import { Decrement, Increment, Reset } from "./features/actions";

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: CounterState) => state.count);

  return (
    <>
      <div className="app">
        <div className="counter-container">
          <h1 className="title">Counter App</h1>
          <div className="count-container">
            <h2 className="count">{count}</h2>
          </div>
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
        </div>
      </div>
    </>
  );
};
