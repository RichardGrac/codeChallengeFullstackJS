import React, {Fragment, useState} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import makeStyles from '@material-ui/core/styles/makeStyles'
import {addItem, editItem, editListName, removeItem, removeList} from '../../../services/redux/lists/actions/lists'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone'
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone'
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone'
import CListItem from '../../atoms/CListitem'
import CModal from '../../organisms/CModal'
import IconButton from '../IconButton'

export const variables = {
    addItem: 'add_item',
    editList: 'edit_list',
    deleteList: 'delete_list',
    editItem: 'edit_item'
}

const useStyles = makeStyles(theme => ({
    root: {
        padding: '0 10px',
    },
    listItemContainer: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: 3
    },
    title: {
        margin: theme.spacing(4, 0, 2),
        backgroundColor: 'white',
        padding: '5px 10px',
        borderRadius: 3,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icons: {
       cursor: 'pointer'
    },
    noItems: {
        padding: 10,
        textAlign: 'center',
        fontWeight: 600
    }
}));

const CList = (props) => {
    const { _id, name, items } = props.list
    const classes = useStyles()
    const [modalProperties, setModalProperties] = useState({
        status: false, modalType: '', message: '', title: '', value: '', withTextField: true
    })

    const onHandleModal = (modalType) => {
        let status = true
        let withTextField = true
        let message
        let title

        switch (modalType) {
            case variables.addItem:
                title = 'Add Item'
                message = 'Give a name to the new Item'
                break

            case variables.editList:
                title = 'Edit List'
                message = 'Give a new name for this List'
                break

            case variables.deleteList:
                if (items.length > 0) {
                    title = 'Delete List'
                    message = 'Are you sure you want to delete this List? All items in it will be deleted!'
                    withTextField = false
                } else {
                    status = false
                    props.removeList(_id)
                }
                break

            default:
                break;
        }

        setModalProperties({status, title, message, modalType, withTextField})
    }

    const onCloseModal = () => {
        setModalProperties({status: false, modalType: '', message: '', title: '', value: '', withTextField: true})
    }

    const onAcceptModal = (newListOrItemName) => {
        let mType = modalProperties.modalType
        let itemId

        /* Validation just for Edit Item */
        if (mType.includes(`${variables.editItem}-`)) {
            itemId = mType.split('-')[1]
            mType = mType.split('-')[0]
        }

        switch (mType) {
            case variables.addItem:
                props.addItem(_id, newListOrItemName)
                onCloseModal()
                break

            case variables.deleteList:
                props.removeList(_id)
                onCloseModal()
                break

            case variables.editList:
                props.editListName(_id, newListOrItemName)
                onCloseModal()
                break

            case variables.editItem:
                props.editItem(itemId, _id, newListOrItemName)
                onCloseModal()
                break

            default:
                break
        }
    }

    const onHandleEditItem = (modalType) => {
        setModalProperties({
            status: true,
            title: 'Edit Item',
            message: 'Give a new name for this Item',
            modalType,
            withTextField: true
        })
    }

    const onHandleRemoveItem = (itemId) => props.removeItem(itemId, _id)

    const itemsRender = () => {
        return items.length <= 0 ? (
            <div className={classes.noItems}>
                Start adding some items to your list <span role={'img'} aria-label={'emoji'}>😊</span>
            </div>
        ) : (
            <List>
                {items.map((item, i) => (
                    <CListItem item={item}
                               key={i}
                               onRemoveItem={onHandleRemoveItem}
                               onEditItem={() => onHandleEditItem(`${variables.editItem}-${item._id}`)}/>
                ))}
            </List>
        )
    }

    return (
        <Fragment>
            <CModal modalProperties={modalProperties}
                    handleClose={onCloseModal}
                    handleAccept={onAcceptModal}
            />

            <Grid item xs={12} md={6} className={classes.root}>
                <Grid container item xs={12} id={'leftBand'} className={classes.title}>
                    <Typography variant='h6'>
                        {name}
                    </Typography>
                    <div>
                        <IconButton iconColor={'action'}
                                    iconClasses={classes.icons}
                                    tooltipTitle={'Add Item to this list'}
                                    IconComponent={AddCircleTwoToneIcon}
                                    onClick={() => onHandleModal(variables.addItem)} />

                        <IconButton iconColor={'primary'}
                                    iconClasses={classes.icons}
                                    tooltipTitle={'Edit List Name'}
                                    IconComponent={EditTwoToneIcon}
                                    onClick={() => onHandleModal(variables.editList)} />

                        <IconButton iconColor={'error'}
                                    iconClasses={classes.icons}
                                    tooltipTitle={'Delete List'}
                                    IconComponent={HighlightOffTwoToneIcon}
                                    onClick={() => onHandleModal(variables.deleteList)} />
                    </div>
                </Grid>
                <div id={'leftBand'}
                     style={items.length <= 0 ? {borderLeft: 'none'} : {}}
                     className={ classes.listItemContainer}>
                    {itemsRender()}
                </div>
            </Grid>
        </Fragment>
    )
}

CList.propTypes = {
    list: PropTypes.shape({
        _id: PropTypes.number,
        name: PropTypes.string,
        items: PropTypes.array,
    })
}

CList.defaultProps = {
    list: PropTypes.shape({
        _id: 1000,
        name: 'Food',
        items: [
            { _id: 1, listId: 1000, name: 'Cereal', date: new Date() },
            { _id: 2, listId: 1000, name: 'Milk', date: new Date('11/12/2019') },
            { _id: 3, listId: 1000, name: 'Rice', date: new Date('11/11/2019') },
            { _id: 4, listId: 1000, name: 'Meal', date: new Date('12/30/2018') },
        ]
    })
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        removeList,
        editListName,
        addItem,
        removeItem,
        editItem
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(CList)
