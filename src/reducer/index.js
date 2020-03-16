import { combineReducers } from "redux";
import signIn from "../modules/signIn/reducer";

// import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  signIn
});

export default rootReducer;
