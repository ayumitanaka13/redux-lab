import { combineReducers } from "redux";
import personReducer from "./personReducer";
import countReducer from "./countReducer";
import postsReducer from "./postReducer";

const rootReducer = combineReducers({
  people: personReducer,
  counter: countReducer,
  postsObj: postsReducer,
});

export default rootReducer;
