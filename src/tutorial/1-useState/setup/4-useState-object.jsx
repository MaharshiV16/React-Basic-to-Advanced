import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    message: "Random Message",
  });
  function changeMessage() {
    // This is 1 way to do this
    // setPerson((prev) => {
    //   return {
    //     message: "New Message",
    //     name: prev.name,
    //     age: prev.age,
    //   };
    // });

    // Another is
    setPerson({ ...person, message: "New Message 2" });
  }
  return (
    <div className="container">
      <h2>useState object example</h2>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" type="button" onClick={changeMessage}>
        Change Message
      </button>
    </div>
  );
};

export default UseStateObject;
