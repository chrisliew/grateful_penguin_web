import { ADD_GRATITUDE } from "../Actions/types";

const initialState = {
  gratitudes: []
};

export default (state = initialState, action) => {
  console.log("reducer!", action);
  switch (action.type) {
    case ADD_GRATITUDE:
      // return Object.assign({}, state, {
      //   gratitudes: state.gratitudes.concat(action.payload)
      // });
      return {
        ...state,
        gratitudes: [...state.gratitudes, action.payload]
      };
    default:
      return state;
  }
};
