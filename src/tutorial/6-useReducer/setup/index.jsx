import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
import reducer from "./reducer";
// reducer function

const Index = () => {
  const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent: "",
  };
  /////////////////////////////////////////////////////////
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  /////////////////////////////////////////////////////////
  function handleSubmit(e) {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name: name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
      setTimeout(closeModal, 500);
    } else {
      dispatch({ type: "NO_VALUE" });
      setTimeout(closeModal, 500);
    }
  }
  /////////////////////////////////////////////////////////
  function closeModal() {
    dispatch({ type: "CLOSE_MODAL" });
  }
  /////////////////////////////////////////////////////////
  return (
    <>
      <h2>useReducer</h2>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <button type="submit">Add Person</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
            <button
              className="btn"
              onClick={() => {
                dispatch({ type: "REMOVE_ITEM", payload: person.id });
                setTimeout(closeModal, 500);
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
