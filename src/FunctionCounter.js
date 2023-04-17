import React, { useState } from "react";

const CounterFunction = () => {
  const [number, setNumber] = useState(0);

  const handleCounter = (e) => {
    e.preventDefault();
    setNumber(number + 10);
  };

  return (
    <div>
      <h1> Function Counter :{number} </h1>
      <button className="btm" onClick={handleCounter}>
        Increase
      </button>
      <button
        className="btm"
        onClick={(e) => {
          e.preventDefault();
          setNumber(number - 10);
        }}
      >
        Decrease
      </button>
    </div>
  );
};

export default CounterFunction;
