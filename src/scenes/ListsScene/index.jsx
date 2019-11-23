import React, {Fragment, useEffect} from 'react'
import {hideNotification} from '../../services/redux/snackbar/actions/snackbar'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { useSnackbar } from 'notistack';

import AddListForm from '../../components/molecules/AddListForm'
import Lists from '../../components/organisms/Lists'

const ListsScene = (props) => {
   const { enqueueSnackbar } = useSnackbar()

    useEffect(() => {
        const { status, message, type } = props.notification
        if (status) {
            props.hideNotification()
            enqueueSnackbar(message, { variant: type });
        }
    }, [props.notification])

    return (
        <Fragment>
            <AddListForm/>
            <Lists />
        </Fragment>
    )
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        hideNotification
    }, dispatch)
}

const mapStateToProps = state => {
    return {
        notification: state.snackbarReducer.notification
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListsScene)
