import { auth as firebaseAuth } from '../firebaseConfig'
import { initSurveysSync } from '../state/surveys'

const EMAIL_CHANGE = 'auth/EMAIL_CHANGE'
const PASSWORD_CHANGE = 'auth/PASSWORD_CHANGE'
const SET_USER = 'auth/SET_USER'

export const onEmailChangeActions = (value) => ({ type: EMAIL_CHANGE, value })
export const onPasswordChangeActions = (value) => ({ type: PASSWORD_CHANGE, value })

export const setUserAction = user => ({
    type: SET_USER,
    user
})

export const initAuthStateListening = () => (dispatch, getState) => {
    firebaseAuth.onAuthStateChanged(user => {
        dispatch(setUserAction(user)) //gwarantuje ze funkcja zostanie zalogowana z uzytkownikiem lub bez login
        if (user) {
            dispatch(initSurveysSync()) // here is a good place to dispatch after logOUT actions
        } else {
            //user is null if user is logged out
        }
        
    })
}

export const logOutAction = () => (dispatch, getState) => {
    firebaseAuth.signOut()
    .then(()=>console.log('SING OUT'))
    .catch(()=>console.log('LOGIN ERROR'))
}

export const onLogInClickAction = () => (dispatch, getState) => {

    const state = getState()

    firebaseAuth.signInWithEmailAndPassword(
        state.auth.email,
        state.auth.password
    )
        .then(() => console.log('login OK'))
        .catch(() => console.log('login ERROR'))
}

const initialState = {
    email: '',
    password: '',
    user: null
}



export default (state = initialState, action) => {
    switch (action.type) {
        case EMAIL_CHANGE:
            return {
                ...state,
                email: action.value
            }
        case PASSWORD_CHANGE:
            return {
                ...state,
                password: action.value
            }
        case SET_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}