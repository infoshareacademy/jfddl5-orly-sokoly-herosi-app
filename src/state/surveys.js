import { database } from '../firebaseConfig'

const SET_SURVEYS = 'surveys/SET_SURVEYS'


export const setSurveysAction = (data) => (
    {
        type: SET_SURVEYS,
        data
    }
)

export const toggleFavAction = (id, isFavourite) => (dispatch, getState) => {
    const currentState = getState()
    const uuid = currentState.auth.user.uid

    database.ref(`surveys/${uuid}/${id}`).update({
        isFavourite: !isFavourite
    })
 }

export const initSurveysSync = () => (dispatch, getState) => {
    const currentState = getState()
    const uuid = currentState.auth.user.uid

    database
        .ref(`surveys/${uuid}`)
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