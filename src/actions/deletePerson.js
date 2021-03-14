const deletePerson = (id) => {
  return {
    type: "DELETE_PERSON",
    payload: { id },
  };
};

export default deletePerson;
