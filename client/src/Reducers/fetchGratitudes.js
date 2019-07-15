import { FETCH_GRATITUDES } from "../Actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_GRATITUDES:
      return action.payload || false;
    default:
      return state;
  }
};
