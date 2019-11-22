import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        height: 50
    },
}))

const CButton = (props) => {
    const classes = useStyles()
    let { label, icon, size, color, variant, ...otherProps } = props

    return (
        <Button
            variant={variant}
            color={color}
            size={size}
            className={classes.button}
            startIcon={icon}
            {...otherProps}
        >
            {label}
        </Button>
    )
}

CButton.propTypes = {
    label: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    icon: PropTypes.object,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    variant: PropTypes.oneOf(['extended', 'contained']),
    color: PropTypes.oneOf(['primary', 'secondary']),
}

CButton.defaultProps = {
    label: '',
    icon: null,
    variant: 'contained',
    color: 'primary',
    size: 'medium'
}

export default CButton
