import axios from "axios";
import { FETCH_GRATITUDES, ADD_GRATITUDE } from "./types";

export const fetchGratitudes = () => {
  return function(dispatch) {
    axios.get("http://localhost:5000/api/gratitudes/").then(res => {
      dispatch({ type: FETCH_GRATITUDES, payload: res.data });
    });
  };
};

export const addGratitude = gratitude => {
  return dispatch => {
    return axios
      .post("http://localhost:5000/api/gratitudes/", gratitude)
      .then(res => {
        dispatch({ type: ADD_GRATITUDE, payload: res.data });
        axios.get("http://localhost:5000/api/gratitudes/").then(res => {
          dispatch({ type: FETCH_GRATITUDES, payload: res.data });
        });
      });
  };
};
