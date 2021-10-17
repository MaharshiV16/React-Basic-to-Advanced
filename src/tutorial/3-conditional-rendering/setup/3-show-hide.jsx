import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <h2>show/hide</h2>
      <button className="btn" onClick={() => setShow(!show)}>
        Show/Hide
      </button>
      {show ? <Window /> : ""}
    </>
  );
};

function Window() {
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setSize(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () => setSize(window.innerWidth));
    };
  }, []);
  return (
    <div className="container">
      <h2>Window</h2>
      <p>Size:{size} </p>
    </div>
  );
}

export default ShowHide;
