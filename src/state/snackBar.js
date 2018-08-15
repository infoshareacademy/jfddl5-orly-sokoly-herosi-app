const SET_OPEN = 'snackBar/SET_OPEN'
const SET_CLOSED = 'snackBar/SET_CLOSED'


export const setOpenAction = (message) => (
    {
        type: SET_OPEN,
        message
    }
)

export const setClosedAction = () => (
    {
        type: SET_CLOSED,
    }
)

export const initialState = {
    message: null,
    isSnackBarOpen: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_OPEN:
            return {
                ...state,
                isSnackBarOpen: true,
                message: action.message
            }
        case SET_CLOSED:
            return {
                ...state,
                isSnackBarOpen: false
            }
        default:
            return state
    }
}