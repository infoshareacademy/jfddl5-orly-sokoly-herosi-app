import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import surveys, { initSurveysSync } from './state/surveys'
import snackBar from './state/snackBar'
import newSurvey from './state/newSurvey'


const reducer = combineReducers({
    surveys,
    snackBar,
    newSurvey,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

store.dispatch(initSurveysSync())