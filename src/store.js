import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import surveys, { initSurveysSync } from './state/surveys'
import snackBar from './state/snackBar'
import answers from './state/answers'


const reducer = combineReducers({
    surveys,
    snackBar,
    answers
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

store.dispatch(initSurveysSync())