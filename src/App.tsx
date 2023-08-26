import React from "react";
import "./styles/styles.css";
import Buttons_Container from "./components/Buttons";
import Header_Container from "./components/Header";
import Count_Container from "./components/Count";

export const App: React.FC = () => {
  return (
    <>
      <div className="app">
        <div className="counter-container">
          <Header_Container />
          <Count_Container />
          <Buttons_Container />
        </div>
      </div>
    </>
  );
};
