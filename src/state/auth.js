import { auth as firebaseAuth } from "../firebaseConfig";

import { initSurveysSync } from "../state/surveys";
const SET_USER = "auth/SET_USER";
export const CLEAR_STATE = "auth/CLEAR_STATE";

export const setUserAction = user => ({
  type: SET_USER,
  user
});

export const clearStateAction = () => ({
  type: CLEAR_STATE
});

export const initAuthStateListening = () => (dispatch, getState) => {
  firebaseAuth.onAuthStateChanged(user => {
    dispatch(setUserAction(user)); //gwarantuje ze funkcja zostanie zalogowana z uzytkownikiem lub bez login
    if (user) {
      dispatch(initSurveysSync()); // here is a good place to dispatch after logOUT actions
    } else {
      //user is null if user is logged out
    }
  });
};

export const logOutAction = () => (dispatch, getState) => {
  firebaseAuth
    .signOut()
    .then(() => console.log("Signout"))
    .catch(() => console.log("Signout error"));
};

const initialState = {
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...initialState,
        user: action.user
      };
    default:
      return state;
  }
};
