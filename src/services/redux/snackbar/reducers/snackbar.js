const initialState = {
    notification: {
        status: false,
        message: '',
        type: 'default'
    }
}

const snackbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_NOTIFICATION':
            return {
                ...state,
                notification: {...action.payload}
            }

        case 'HIDE_NOTIFICATION':
            return {
                ...state,
                notification: {
                    status: false,
                    message: '',
                    type: 'default'
                }
            }

        default: return state
    }
}

export default snackbarReducer
