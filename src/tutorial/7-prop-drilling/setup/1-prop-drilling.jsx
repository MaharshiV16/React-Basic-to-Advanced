import React, { useState } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  function remove(id) {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  }
  const [people, setPeople] = useState(data);
  return (
    <>
      <h2>prop drilling</h2>
      <List people={people} remove={remove} />
    </>
  );
};
function List(props) {
  const { people, remove } = props;
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} remove={remove} />;
      })}
    </>
  );
}

function SinglePerson(props) {
  const { id, name, remove } = props;
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => remove(id)}>
        Remove
      </button>
    </div>
  );
}
export default PropDrilling;
