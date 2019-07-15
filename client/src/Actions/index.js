import axios from "axios";
import { FETCH_GRATITUDES } from "./types";

export const fetchGratitudes = () => {
  return function(dispatch) {
    axios.get("http://localhost:5000/api/gratitudes/").then(res => {
      dispatch({ type: FETCH_GRATITUDES, payload: res.data });
    });
  };
};
