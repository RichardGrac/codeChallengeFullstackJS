import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import useFormValidation from '../../../hooks/FormValidation'
import {variables} from '../../molecules/CList'

import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import CTextField from '../../atoms/CTextField'

const CModal = (props) => {
    let { handleClose, handleAccept, modalProperties } = props
    let {
        status,
        title,
        message,
        modalType,
        withTextField } = modalProperties

    const [value, setValue, error] = useFormValidation('')

    const onHandleKey = e => {
        if(e.key === 'Enter')
            if (value.length > 0 && !error.status) handleAccept(e.target.value)
    }

    const onChangeValue = newValue => {
        setValue(newValue)
    }

    return (
        <Dialog open={status} onClose={handleClose} aria-labelledby='form-dialog-title'>
            <DialogTitle id='form-dialog-title'>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {message}
                </DialogContentText>
                {withTextField && (
                    <Fragment>
                        <CTextField
                            inputLabel={'Type the name'}
                            variant={'filled'}
                            value={value}
                            type={'text'}
                            autoFocus
                            onKeyPress={(e) => onHandleKey(e)}
                            onChange={(e) => onChangeValue(e.target.value)}
                            error={error.status}
                            errorMessage={error.message}
                        />
                    </Fragment>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color='default'>
                    Cancel
                </Button>
                <Button onClick={() => handleAccept(value)}
                        disabled={(value.length <= 0 || error.status) && modalType !== variables.deleteList}
                        color='primary'>
                    Accept
                </Button>
            </DialogActions>
        </Dialog>
    )
}

CModal.propTypes = {
    modalProperties: PropTypes.shape({
        title: PropTypes.string,
        message: PropTypes.string,
        status: PropTypes.bool,
        modalType: PropTypes.string,
    }),
    handleClose: PropTypes.func.isRequired,
    handleAccept: PropTypes.func.isRequired,
    withTextField: PropTypes.bool,
}

CModal.defaultProps = {
    modalProperties: PropTypes.shape({
        title: 'Title',
        message: 'Modal Message',
        status: false,
        modalType: '',
        withTextField: true
    }),
    handleClose: PropTypes.func.isRequired,
    handleAccept: PropTypes.func.isRequired
}

export default CModal
