import React, { useState } from "react";

const UseStateCounter = () => {
  var [value, setValue] = useState(0);
  function handleClick() {
    setTimeout(() => {
      // setValue(value + 1); Makes the button async ie untill updated only 1 click is counted
      setValue((prev) => {
        return prev + 1;
      });
    }, 2000);
  }
  return (
    <div className="container">
      <h2>useState counter example</h2>
      <h3 style={{ marginTop: "3rem" }}>Regular Counter</h3>
      <h1>{value}</h1>
      <button className="btn" type="button" onClick={() => setValue(value - 1)}>
        Decrease
      </button>
      <button className="btn" type="button" onClick={() => setValue(0)}>
        Reset
      </button>
      <button className="btn" type="button" onClick={() => setValue(value + 1)}>
        Increase
      </button>
      <h3 style={{ marginTop: "3rem" }}>Complex Counter</h3>
      <h1>{value}</h1>
      <button className="btn" type="button" onClick={handleClick}>
        Increase Later
      </button>
    </div>
  );
};

export default UseStateCounter;
