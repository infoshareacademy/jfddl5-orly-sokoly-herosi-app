const CREATE_SURVEY = 'newSurvey/CREATE_SURVEY'
const ADD_QUESTION_TO_SURVEY = 'newSurvey/ADD_QUESTION_TO_SURVEY'


export const createSurveyAction = (data) => ({
    type: CREATE_SURVEY,
    data
})

export const addQuestionToSurveyAction = () => ({
    type: ADD_QUESTION_TO_SURVEY
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
        default:
            return state
    }
}