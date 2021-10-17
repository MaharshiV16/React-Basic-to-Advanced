import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  function checkSize() {
    setSize(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      // Clean up function
      window.removeEventListener("resize", checkSize);
    };
  });
  return (
    <>
      <h2>useEffect cleanup</h2>
      <h3>{size} px</h3>
    </>
  );
};

export default UseEffectCleanup;
