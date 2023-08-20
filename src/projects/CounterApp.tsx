import React, { useState } from "react";
import "./styles/CounterApp.css";

export const CounterApp: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    setCount(count - 1);
  };

  const Reset = () => { 
    setCount(0)
   }

  return (
    <>
      <div className="counter-container">
        <h1 className="title">Counter App</h1>
        <div className="count-container">
          <p className="count">Count : {count}</p>
        </div>
        <div className="button-container">
          <button className="increment" onClick={Increment}>
            +
          </button>
          <button className="decrement" onClick={Decrement}>
            -
          </button>
          <button className="reset" onClick={Reset}>
            0
          </button>
        </div>
      </div>
    </>
  );
};
