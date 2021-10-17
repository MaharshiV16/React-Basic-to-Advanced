import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  function delClick() {
    setPeople([]);
  }
  function showClick() {
    setPeople(data);
  }
  function individualCLick(id) {
    setPeople(people.filter((person) => person.id !== id));
  }
  const [people, setPeople] = useState(data);
  return (
    <div className="container">
      <h2>useState array example</h2>
      {people.map((person) => {
        const { name, id } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              className="btn"
              onClick={() => individualCLick(id)}
              type="button"
            >
              Delete This
            </button>
          </div>
        );
      })}
      <button className="btn" type="button" onClick={delClick}>
        Delete All
      </button>
      <button className="btn" type="button" onClick={showClick}>
        Show All
      </button>
    </div>
  );
};

export default UseStateArray;
