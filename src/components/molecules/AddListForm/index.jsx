import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import useFormValidation from '../../../hooks/FormValidation'
import {addList} from '../../../services/redux/lists/actions/lists'
import makeStyles from '@material-ui/core/styles/makeStyles'

import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import AddIcon from '@material-ui/icons/Add'
import CButton from '../../atoms/CButton'
import CTextField from '../../atoms/CTextField'

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        maxWidth: 500,
        margin: '0 auto 0 auto',
        width: '90%'
    },
    form: {
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }
}))

const AddListForm = (props) => {
    const [listName, setListName, error, setHasBeenTouch] = useFormValidation('')
    const classes = useStyles()

    const onHandleListName = e => {
        const { value } = e.target
        setListName(value)
        setHasBeenTouch(true)
    }

    const onHandleAdd = () => {
        props.addList(listName)
        setListName('')
        setHasBeenTouch(false)
    }

    const onHandleKey = e => {
        if (e.key === 'Enter')
            if (listName.length > 0 && !error.status) onHandleAdd()
    }

    return (
        <Fragment>
            <Paper className={classes.root}>
                <Typography variant='h5' component='h3'>
                    <Box textAlign='center'>
                        Create a List
                    </Box>
                </Typography>
                <Typography component='div' className={classes.form}>
                    <CTextField inputLabel={'List name'}
                                variant={'filled'}
                                value={listName}
                                error={error.status}
                                errorMessage={error.message}
                                onKeyPress={(e) => onHandleKey(e)}
                                onChange={(e) => onHandleListName(e)}
                                autoFocus
                    />
                    <CButton label={'Add'}
                             icon={<AddIcon />}
                             size={'medium'}
                             color={'primary'}
                             onClick={() => onHandleAdd()}
                             disabled={error.status || listName.length === 0}
                    />
                </Typography>
            </Paper>
        </Fragment>
    )
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addList
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(AddListForm)
