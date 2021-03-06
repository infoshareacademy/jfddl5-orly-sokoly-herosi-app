import { auth as firebaseAuth, database } from "../firebaseConfig";
import { initSurveysSync } from "../state/surveys";

const SET_USER = "auth/SET_USER";
const SET_TIMESTAMP = "auth/SET_TIMESTAMP";
const LOGGED_OUT = "auth/LOGGED_OUT";

export const CLEAR_STATE = "auth/CLEAR_STATE";

export const setTimeStampsAction = data => ({
  type: SET_TIMESTAMP,
  data
});
const loggedOut = () => ({
  type: LOGGED_OUT
});

export const setUserAction = (user, timestamp) => ({
  type: SET_USER,
  user,
  timestamp
});

export const clearStateAction = () => ({
  type: CLEAR_STATE
});

export const initAuthStateListening = () => (dispatch, getState) => {
  firebaseAuth.onAuthStateChanged(user => {
    dispatch(setUserAction(user)); //gwarantuje ze funkcja zostanie zalogowana z uzytkownikiem lub bez login
    if (user) {
      dispatch(initUserLogIns());
      dispatch(initSurveysSync()); // here is a good place to dispatch after logOUT actions
      dispatch(logUserLogIn());
    } else {
      dispatch(loggedOut());
      //user is null if user is logged out
    }
  });
};
export const logOut = () => (dispatch, getState) => {
  firebaseAuth.signOut();
};

export const initUserLogIns = () => (dispatch, getState) => {
  database.ref("userLogIns").on("value", snapshot => {
    const firebaseData = Object.entries(snapshot.val() || {}).map(
      ([id, value]) => {
        // value.id = id;
        return value.timestamp;
      }
    );
    dispatch(setTimeStampsAction(firebaseData));
  });
};

export const logUserLogIn = () => (dispatch, getState) => {
  database.ref(`userLogIns`).push({
    timestamp: Date.now(),
    userId: getState().auth.user.uid
  });
};

export const logOutAction = () => (dispatch, getState) => {
  firebaseAuth
    .signOut()
    .then(() => console.log("Signout"))
    .catch(() => console.log("Signout error"));
};

const initialState = {
  user: null,
  isUserLoggedIn: false,
  timestamp: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...initialState,
        isUserLoggedIn: true,
        user: action.user,
        timestamp: action.timestamp
      };
    case LOGGED_OUT:
      return {
        initialState
      };
    case SET_TIMESTAMP:
      return {
        ...state,
        timestamp: action.data
      };

    default:
      return state;
  }
};
