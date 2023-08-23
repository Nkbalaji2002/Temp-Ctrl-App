import React, { useState } from "react";
import "./Calc.css";
import * as math from "mathjs";
import { Backspace } from "@mui/icons-material";

const Calc: React.FC = () => {
  const [input, setInput] = useState<string>("");

  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "00"];
  const operators = ["+", "-", "*", "/", "(", ")"];

  const handleButtonClick = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      const result = math.evaluate(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const handleReset = () => {
    setInput("");
  };

  const handleTogglePositiveandNegative = () => {
    setInput((prevInput) => {
      return (parseFloat(prevInput) * -1).toString();
    });
  };

  const handlePercentage = () => {
    setInput((prevInput) => {
      return (parseFloat(prevInput) / 100).toString();
    });
  };

  const handleAddDecimal = () => {
    if (!input.includes(".")) {
      setInput((prevInput) => {
        return prevInput + ".";
      });
    }
  };

  const handleDelete = () => {
    setInput((prevInput) => {
      return prevInput.slice(0, -1);
    });
  };

  return (
    <>
      <div className="container">
        <div className="display">
          <span className="input-display">{input}</span>
        </div>
        <div className="buttons">
          {/* operator of buttons */}
          {operators.map((operator) => (
            <button
              key={operator}
              className="operator"
              onClick={() => handleButtonClick(operator.toString())}
            >
              {operator}
            </button>
          ))}

          <button
            className="operator"
            onClick={handleTogglePositiveandNegative}
          >
            +/-
          </button>
          <button className="operator" onClick={handlePercentage}>
            %
          </button>

          {/* numbers of buttons */}
          {numbers.map((num) => (
            <button key={num} onClick={() => handleButtonClick(num.toString())}>
              {num}
            </button>
          ))}

          <button onClick={handleDelete}>
            <Backspace />
          </button>
          <button onClick={handleAddDecimal}>.</button>
          <button onClick={handleReset}>C</button>
          <button className="equals" onClick={handleCalculate}>
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default Calc;
