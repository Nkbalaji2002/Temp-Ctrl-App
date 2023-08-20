import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    setCount(count - 1);
  };

  const Reset = () => {
    setCount(0);
  };

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={Increment}>Increase</button>
      <button onClick={Decrement}>Decrease</button>
      <button onClick={Reset}>Reset</button>
    </>
  );
};

export default Counter;
