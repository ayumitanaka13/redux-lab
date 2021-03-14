const personData = [
  {
    id: Math.random(), // not really unique but good enough here!
    name: "Max",
    age: Math.floor(Math.random() * 40),
  },
];

const personReducer = (state = personData, action) => {
  const newState = [...state];
  if (action.type === "ADD_PERSON") {
    newState.push(action.payload.newPerson);
    return newState;
  } else if (action.type === "DELETE_PERSON") {
    newState.splice(action.payload.id, 1);
    return newState;
  } else {
    return state;
  }
};

export default personReducer;
