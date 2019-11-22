const initialState = {
    lists: []
}

const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_LISTS':
            return {
                ...state,
                lists: action.payload
            }

        case 'ADD_LIST':
            return {
                ...state,
                lists: state.lists.concat(action.payload)
            }

        case 'REMOVE_LIST':
            return {
                ...state,
                lists: state.lists.filter(list => list._id !== action.payload)
            }

        case 'EDIT_LIST':
            return {
                ...state,
                lists: state.lists.map(list => {
                    if (list._id === action.payload.listId) {
                        list.name = action.payload.listName
                    }
                    return list
                })
            }

        case 'ADD_ITEM': {
            return {
                ...state,
                lists: state.lists.map(list => {
                    if (list._id === action.payload.listId) {
                        list.items.push(action.payload)
                    }
                    return list
                })
            }
        }

        case 'EDIT_ITEM': {
            return {
                ...state,
                lists: state.lists.map(list => {
                    if (list._id === action.payload.listId) {
                        list.items = list.items.map(item => {
                            if (item._id === action.payload._id) {
                                item.name = action.payload.itemName
                                item.date = action.payload.date
                            }
                            return item
                        })
                    }
                    return list
                })
            }
        }

        case 'REMOVE_ITEM': {
            return {
                ...state,
                lists: state.lists.map(list => {
                    if (list._id === action.payload.listId) {
                        list.items = list.items.filter(item => item._id !== action.payload._id)
                    }
                    return list
                })
            }
        }

        default: return state
    }
}

export default listsReducer
