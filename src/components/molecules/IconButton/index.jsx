import React from 'react'
import PropTypes from 'prop-types'

import Tooltip from '@material-ui/core/Tooltip'

const IconButton = ({
    tooltipTitle, placement, IconComponent, iconColor, iconClasses, ...otherProps
}) => {
    return (
        <Tooltip title={tooltipTitle} placement={placement}>
            <span>
                <IconComponent
                    color={iconColor}
                    className={iconClasses}
                    {...otherProps}
                />{' '}
            </span>
        </Tooltip>
    )
}

IconButton.propTypes = {
    tooltipTitle: PropTypes.string.isRequired,
    placement: PropTypes.oneOf([
        'top-start', 'top', 'top-end',
        'right-start', 'right', 'right-end',
        'bottom-start', 'bottom', 'bottom-end',
        'left-start', 'left', 'left-end'
    ]),
    IconComponent: PropTypes.object,
    iconColor: PropTypes.oneOf(['action', 'primary', 'error']),
    iconClasses: PropTypes.any
}

IconButton.defaultProps = {
    tooltipTitle: 'Title',
    placement: 'top-end',
    IconComponent: {},
    iconColor: 'primary',
    iconClasses: null
}

export default IconButton
