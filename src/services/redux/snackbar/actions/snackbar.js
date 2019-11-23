import PropTypes from 'prop-types'

export const showNotification = (properties) => {
    return dispatch => {
        let { type, message, } = properties

        dispatch({
            type: 'SHOW_NOTIFICATION',
            payload: {
                type,
                message,
                status: true
            }
        })
    }
}

export const hideNotification = () => {
    return dispatch => {
        dispatch({type: 'HIDE_NOTIFICATION'})
    }
}

showNotification.propTypes = {
    type: PropTypes.oneOf(['default', 'success', 'error', 'warning', 'info'])
}
