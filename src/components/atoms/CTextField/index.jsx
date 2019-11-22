import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import makeStyles from '@material-ui/core/styles/makeStyles'

import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 300,
    },
}));

const CTextField = (props) => {
    const classes = useStyles()
    let { inputLabel, value, errorMessage, ...otherProps } = props

    return (
        <Fragment>
            <TextField
                className={classes.textField}
                label={inputLabel}
                margin='normal'
                variant='filled'
                helperText={errorMessage}
                value={value}
                {...otherProps}
            />
        </Fragment>
    )
}

CTextField.propTypes = {
    inputLabel: PropTypes.string,
    variant: PropTypes.oneOf(['filled', 'outlined']),
    value: PropTypes.string,
    errorMessage: PropTypes.string
}

CTextField.defaultProps = {
    inputLabel: '',
    variant: 'filled',
    value: '',
    errorMessage: ''
}

export default CTextField
