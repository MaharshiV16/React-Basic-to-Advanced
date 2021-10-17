/////////////////////////////////////////////////////////
export default function reducer(state, action) {
  console.log(state);
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "Person Added",
    };
  } else if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Please enter valid name",
    };
  } else if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModalOpen: false,
    };
  } else if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter(
      (person) => person.id != action.payload
    );
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "Person Removed",
    };
  }
}
/////////////////////////////////////////////////////////
