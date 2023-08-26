import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./components/reducers";
import { updateMessage } from "./components/actions";
import "./styles/styles.css";

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const message = useSelector((state: AppState) => {
    return state.message;
  });

  const handleUpdateClick = () => {
    dispatch(updateMessage("Hello, Redux Updated!"));
  };

  return (
    <>
      <div className="app">
        <h1>{message}</h1>
        <button onClick={handleUpdateClick}>Change Message</button>
      </div>
    </>
  );
};
