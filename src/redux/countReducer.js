const initState = {
  count: 0,
};

const countReducer = (state = initState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count++,
      };
    default:
      return state;
  }
};

export default countReducer;
