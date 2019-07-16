import { combineReducers } from "redux";
import fetchGratitudes from "./fetchGratitudes";
import addGratitude from "./addGratitude";

export default combineReducers({
  gratitudes: fetchGratitudes,
  addGratitude: addGratitude
});
