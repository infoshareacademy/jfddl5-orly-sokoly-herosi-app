import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import surveys, { initSurveysSync } from "./state/surveys";
import snackBar from "./state/snackBar";
import auth, { initAuthStateListening } from "./state/auth";
import signUpAuth from "./state/signUpAuth";
import logInAuth from "./state/logInAuth";

const reducer = combineReducers({
  surveys,
  snackBar,
  auth,
  signUpAuth,
  logInAuth
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(initAuthStateListening());
