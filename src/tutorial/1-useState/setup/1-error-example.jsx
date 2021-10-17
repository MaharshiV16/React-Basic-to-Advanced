import React from "react";

const ErrorExample = () => {
  var title = "Random Title";
  function handleCLick() {
    console.log(title);
    title = "Hello People";
    console.log(title);
  }
  return (
    <div className="container">
      <h2>useState error example</h2>
      <h2>{title}</h2>
      <button className="btn" type="button" onClick={handleCLick}>
        Change Title
      </button>
    </div>
  );
};

export default ErrorExample;
