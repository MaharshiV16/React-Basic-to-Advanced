import React, { useState } from "react";

const UseStateBasics = () => {
  const [showTitle, setShowTitle] = useState(true);
  function handleCLick() {
    setShowTitle(!showTitle);
  }
  return (
    <div className="container">
      <h2>useState basic example</h2>
      <h2>{showTitle ? "Random Title" : "Hello People"}</h2>
      <button className="btn" type="button" onClick={handleCLick}>
        Change Title
      </button>
    </div>
  );
};

export default UseStateBasics;
