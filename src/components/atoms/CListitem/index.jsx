import React from 'react'
import {css, StyleSheet} from 'aphrodite'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import LabelImportantTwoToneIcon from '@material-ui/icons/LabelImportantTwoTone'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import PropTypes from 'prop-types'

const aphroditeStyle = StyleSheet.create({
    listItem: {
        ':hover': {
            backgroundColor: '#eee'
        },
        cursor: 'default'
    },
    listItemOption: {
        ':hover': {
            fontWeight: 600
        },
        cursor: 'pointer'
    }
})

const CListItem = (props) => {
    let { item, onRemoveItem, onEditItem } = props
    return (
        <div>
            <ListItem key={item.id}
                      className={css(aphroditeStyle.listItem)}
            >
                <ListItemIcon>
                    <LabelImportantTwoToneIcon />
                </ListItemIcon>
                <ListItemText
                    primary={item.name}
                    secondary={item.date.toLocaleString()}
                />
                <span className={css(aphroditeStyle.listItemOption)}
                      onClick={() => onEditItem()}
                >
                    Edit
                </span>
                &nbsp;|&nbsp;
                <span className={css(aphroditeStyle.listItemOption)}
                      onClick={() => onRemoveItem(item.id)}
                >
                    Delete
                </span>
            </ListItem>
        </div>
    )
}

CListItem.propTypes = {
    item: PropTypes.object.isRequired,
    onRemoveItem: PropTypes.func.isRequired,
    onEditItem: PropTypes.func.isRequired,
}

CListItem.defaultProps = {
    item: { id: 1, name: 'Taco', date: new Date() },
    onRemoveItem: () => {},
    onEditItem: () => {}
}

export default CListItem
