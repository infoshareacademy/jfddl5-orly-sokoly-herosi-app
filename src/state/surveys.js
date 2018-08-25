import { database } from "../firebaseConfig";

const SET_SURVEYS = "surveys/SET_SURVEYS";

const myApiUrl = "https://survey-app-84f53.firebaseio.com/surveys";

export const setSurveysAction = data => ({
  type: SET_SURVEYS,
  data
});

export const initSurveysSync = () => (dispatch, getState) => {
  database.ref("surveys").on("value", snapshot => {
    const firebaseData = Object.entries(snapshot.val() || {}).map(
      ([id, value]) => {
        value.id = id;
        console.log(value);
        return value;
      }
    );
    dispatch(setSurveysAction(firebaseData));
  });
};

export const toggleFavAction = (id, isFavourite) => (dispatch, getState) => {
  database.ref(`surveys/${id}`).update({
    isFavourite: !isFavourite
  });
};

export const saveNewSurvey = newSurveyData => (dispatch, getState) => {
  const request = {
    method: "POST",
    body: JSON.stringify(newSurveyData)
  };

  return fetch(`${myApiUrl}.json`, request);
};

const initialState = {
  surveyList: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SURVEYS:
      return {
        ...state,
        surveyList: action.data
      };

    default:
      return state;
  }
};
