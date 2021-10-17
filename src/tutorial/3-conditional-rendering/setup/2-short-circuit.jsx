import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [error, setError] = useState(false);
  // const [text, setText] = useState("");
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";
  return (
    <>
      <h2>short circuit</h2>
      <button className="btn" onClick={() => setError(!error)}>
        Toggle Error
      </button>
      {error && <h1>Error...</h1>}
      {error ? <p>There is an error</p> : <p>Everything works fine</p>}
    </>
  );
};

export default ShortCircuit;
