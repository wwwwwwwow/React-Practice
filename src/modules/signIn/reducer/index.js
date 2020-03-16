import { SWITCH_NAME } from "../actions";

const initialState = {
  name: "JOE"
};

const signIn = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_NAME:
      return {
        ...state,
        name: action.payload.name
      };

    default:
      return state;
  }
};

export default signIn;
