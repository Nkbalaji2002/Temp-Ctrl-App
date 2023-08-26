import React from "react";
import { CounterState } from "../features/reducers";
import { useSelector } from "react-redux";

const Count_Container: React.FC = () => {
  const count = useSelector((state: CounterState) => state.count);

  return (
    <>
      <div className="count-container">
        <h2 className="count">{count}</h2>
      </div>
    </>
  );
};

export default Count_Container;
