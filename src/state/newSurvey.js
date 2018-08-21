const CREATE_SURVEY = 'newSurvey/CREATE_SURVEY'
const ADD_QUESTION_TO_SURVEY = 'newSurvey/ADD_QUESTION_TO_SURVEY'
const TITLE_CHANGE = 'newSurvey/TITLE_CHANGE'
const TEXT_CHANGE = 'newSurvey/TEXT_CHANGE'
const CATEGORY_CHANGE = 'newSurvey/CATEGORY_CHANGE'
const QUESTION_CHANGE = 'newSurvey/QUESTION_CHANGE'

const myApiUrl = 'https://survey-app-84f53.firebaseio.com/surveys'

export const saveNewSurvey = (newSurveyData, questions) => (dispatch, getState) => {    
    const request = {
        method: 'POST',
        body: JSON.stringify(newSurveyData)
    }

    return fetch(`${myApiUrl}.json`, request)
        .then(r => r.json())
        .then(data => {
            const newSurveyKey = data.name

            const questionSavePromises = questions.map((question) => {
                const request = {
                    method: 'POST',
                    body: JSON.stringify(question)
                }

                return fetch(`${myApiUrl}/${newSurveyKey}/questions.json`, request)
            })

            return Promise.all(questionSavePromises)
        })

}

export const createSurveyAction = (data) => ({
    type: CREATE_SURVEY,
    data
})

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


const initialState = {
    title: '',
    text: '',
    category: 'People',
    isFavourite: false,
    questions: [
        { questionText: 'dupa' },
        { questionText: '' },
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_SURVEY:
            return {
                ...state,
                title: state.title,
                text: state.text,
                category: state.category,
                isFavourite: state.isFavourite,
                date: Date.now()
            }

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
        default:
            return state
    }
}