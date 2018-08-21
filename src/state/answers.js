import { database } from '../firebaseConfig'

const GET_SURVEY = 'answers/PUT_SURVEY'

const initialState = {
    survey: null,
}

const getSurveyAction = (survey) => ({
    type: GET_SURVEY,
    survey
})

export const pushAnswersAction = (answers, surveyId) => (dispatch, getState) => {
    Object.entries(answers)
        .map(([questionId, answer]) => (
            {
                answer,
                questionId
            }
        ))
        .forEach(e =>
            database.ref(`surveys/${surveyId}/answers`).push({
                answer: e.answer,
                questionId: e.questionId
            })
        )
}

export const loadingSurvey = (id) => (dispatch, getState) => {
    database
        .ref(`surveys/${id}`)
        .on('value', snapshot => {
            const firebaseData = snapshot.val() || {}
            dispatch(getSurveyAction(firebaseData))
        })
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_SURVEY:
            return {
                ...state,
                survey: action.survey
            }
        default:
            return state
    }
}