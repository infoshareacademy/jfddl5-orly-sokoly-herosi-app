const ADD_QUESTION_TO_SURVEY = 'newSurvey/ADD_QUESTION_TO_SURVEY'
const TITLE_CHANGE = 'newSurvey/TITLE_CHANGE'
const TEXT_CHANGE = 'newSurvey/TEXT_CHANGE'
const CATEGORY_CHANGE = 'newSurvey/CATEGORY_CHANGE'
const QUESTION_CHANGE = 'newSurvey/QUESTION_CHANGE'
const RESET_STATE = 'newSurvey/RESET_STATE'

const myApiUrl = 'https://survey-app-84f53.firebaseio.com/surveys'

export const saveNewSurvey = () => (dispatch, getState) => {
    const currentState = getState()
    const uuid = currentState.auth.user.uid

    if (currentState.newSurvey.title === '') {
        (() => this.props.setOpenAction())
        return Promise.resolve()
    }


    const newSurveyData = {
        title: currentState.newSurvey.title,
        text: currentState.newSurvey.text,
        category: currentState.newSurvey.category,
        isFavourite: currentState.newSurvey.isFavourite,
        date: Date.now()
    }

    const questions = currentState.newSurvey.questions

    const request = {
        method: 'POST',
        body: JSON.stringify(newSurveyData)
    }

    return fetch(`${myApiUrl}/${uuid}.json`, request)
        .then(r => r.json())
        .then(data => {
            const newSurveyKey = data.name

            const questionSavePromises = questions.map((question) => {
                const request = {
                    method: 'POST',
                    body: JSON.stringify(question)
                }
                return fetch(`${myApiUrl}/${uuid}/${newSurveyKey}/questions.json`, request)
            })
            return Promise.all(questionSavePromises)
                .then(() => dispatch(resetState()))
        })
}

export const addQuestionToSurveyAction = () => ({
    type: ADD_QUESTION_TO_SURVEY
})

export const titleChangeAction = (value) => ({
    type: TITLE_CHANGE,
    value
})

export const textChangeAction = (value) => ({
    type: TEXT_CHANGE,
    value
})

export const categoryChangeAction = (event, index, value) => ({
    type: CATEGORY_CHANGE,
    event,
    index,
    value
})

export const questionChangeAction = (value, index) => ({
    type: QUESTION_CHANGE,
    value,
    index
})

export const resetState = () => ({ type: RESET_STATE })

const initialState = {
    title: '',
    text: '',
    category: 'People',
    isFavourite: false,
    questions: [
        { questionText: '' },
        { questionText: '' },
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_QUESTION_TO_SURVEY:
            return {
                ...state,
                questions: state.questions.concat(
                    { questionText: '' }
                )
            }
        case TITLE_CHANGE:
            return {
                ...state,
                title: action.value
            }
        case CATEGORY_CHANGE:
            return {
                ...state,
                category: action.value
            }
        case TEXT_CHANGE:
            return {
                ...state,
                text: action.value
            }
        case QUESTION_CHANGE:
            return {
                ...state,
                questions: state.questions.map((question, i) => (
                    action.index === i ?
                        {
                            ...question,
                            questionText: action.value
                        }
                        :
                        question
                ))
            }
        case RESET_STATE:
            return {
                ...initialState
            }
        default:
            return state
    }
}