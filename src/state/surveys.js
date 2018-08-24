import { database } from '../firebaseConfig'

const SET_SURVEYS = 'surveys/SET_SURVEYS'


export const setSurveysAction = (data) => (
    {
        type: SET_SURVEYS,
        data
    }
)

export const toggleFavAction = (id, isFavourite) => (dispatch, getState) => {
    database.ref(`surveys/${id}`).update({
        isFavourite: !isFavourite
    })
 }

export const initSurveysSync = () => (dispatch, getState) => {
    database
        .ref('surveys')
        .on('value', snapshot => {
            const firebaseData = Object.entries(snapshot.val() || {}).map(([id, value]) => {
                value.id = id
                return value
            })
            dispatch(setSurveysAction(firebaseData))
        })
}

const initialState = {
    surveyList: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_SURVEYS:
            return {
                ...state,
                surveyList: action.data
            }
        default:
            return state
    }
}