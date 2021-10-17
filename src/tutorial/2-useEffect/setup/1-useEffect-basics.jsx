import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (value > 0) {
      // We cant have a hook inside a condition but vice versa is true
      document.title = `${value} New messages`;
    }
  }, [value]); // This array stores dependencies of when the useEffect hook should run.. here we added the value a 1 of the dependency
  console.log("Component rendered");
  return (
    <>
      <h2>useEffect Basics</h2>
      <h3>{value}</h3>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Increase
      </button>
    </>
  );
};

export default UseEffectBasics;
