import { combineReducers } from "redux";
import fetchGratitudes from "./fetchGratitudes";

export default combineReducers({
  gratitudes: fetchGratitudes
});
