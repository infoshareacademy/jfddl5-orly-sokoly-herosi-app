const CREATE_SURVEY = 'newSurvey/CREATE_SURVEY'
const ADD_QUESTION_TO_SURVEY = 'newSurvey/ADD_QUESTION_TO_SURVEY'
const TITLE_CHANGE = 'newSurvey/TITLE_CHANGE'
const TEXT_CHANGE = 'newSurvey/TEXT_CHANGE'
const CATEGORY_CHANGE = 'newSurvey/CATEGORY_CHANGE'
const QUESTION_CHANGE = 'newSurvey/QUESTION_CHANGE'


export const createSurveyAction = (data) => ({
    type: CREATE_SURVEY,
    data
})

export const addQuestionToSurveyAction = () => ({
    type: ADD_QUESTION_TO_SURVEY
})

export const titleChangeAction = (event) => ({
    type: TITLE_CHANGE,
    event
})

export const textChangeAction = (event) => ({
    type: TEXT_CHANGE,
    event
})

export const categoryChangeAction = (event, index, value) => ({
    type: CATEGORY_CHANGE,
    event,
    index,
    value
})

export const questionChangeAction = (event, index) => ({
    type: QUESTION_CHANGE,
    event,
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
                fieldTitle: event.target.value,
                title: state.title
            }
        case TEXT_CHANGE:
            return {
                ...state,
                fieldText: event.target.value,
                text: state.text
            }
        case QUESTION_CHANGE:
            return {
                ...state,
                questions: state.questions.map((question, i) => (
                    index === i ?
                        {
                            ...question,
                            questionText: event.target.value
                        }
                        :
                        question
                ))
            }
        default:
            return state
    }
}