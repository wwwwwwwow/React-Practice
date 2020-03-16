import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import Example from "./modules/signIn/containers/Example";
import createSagaMiddleware from "redux-saga";
// import { helloSaga } from "./modules/signIn/actions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware())
);
// sagaMiddleware.run(helloSaga);

ReactDOM.render(
  <Provider store={store}>
    <Example />
  </Provider>,
  document.getElementById("root")
);
