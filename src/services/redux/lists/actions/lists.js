var mockedLists = [
    {
        id: 1000,
        listName: 'Food',
        items: [
            { id: 1, listId: 1000, name: 'Cereal', date: new Date() },
            { id: 2, listId: 1000, name: 'Milk', date: new Date('11/12/2019') },
            { id: 3, listId: 1000, name: 'Rice', date: new Date('11/11/2019') },
            { id: 4, listId: 1000, name: 'Meal', date: new Date('12/30/2018') },
        ]
    },
    {
        id: 2000,
        listName: 'Animals',
        items: [
            { id: 11, listId: 2000, name: 'Dog', date: new Date() },
            { id: 12, listId: 2000, name: 'Cat', date: new Date('11/12/2019') },
            { id: 13, listId: 2000, name: 'Mouse', date: new Date('11/11/2019') },
            { id: 14, listId: 2000, name: 'Elephant', date: new Date('12/30/2018') },
        ]
    },
    {
        id: 3000,
        listName: 'Beverages',
        items: [
            { id: 21, listId: 3000, name: 'Soda', date: new Date() },
            { id: 22, listId: 3000, name: 'Water', date: new Date('11/12/2019') },
            { id: 23, listId: 3000, name: 'Coffee', date: new Date('11/11/2019') },
            { id: 24, listId: 3000, name: 'Tea', date: new Date('12/30/2018') },
        ]
    }
]

export const getLists = () => {
    return async dispatch => {
        setTimeout(() => {
            dispatch({
                type: 'GET_LISTS',
                payload: mockedLists
            })
        }, 0)
    }
}

export const addList = (listName) => {
    return async dispatch => {
        // Simulating network request
        setTimeout(() => {
            dispatch({
                type: 'ADD_LIST',
                payload: {
                    id: Math.round(Math.random() * 1000),
                    listName,
                    items: []
                }
            })
        }, 0)
    }
}

export const removeList = (listId) => {
    return async dispatch => {
        setTimeout(() => {
            dispatch({
                type: 'REMOVE_LIST',
                payload: listId
            })
        }, 0)
    }
}

export const editListName = (listId, listName) => {
    return async dispatch => {
        setTimeout(() => {
            dispatch({
                type: 'EDIT_LIST',
                payload: {
                    listId,
                    listName
                }
            })
        }, 50)
    }
}

export const addItem = (listId, itemName) => {
    return async dispatch => {
        setTimeout(() => {
            dispatch({
                type: 'ADD_ITEM',
                payload: {
                    id: Math.round(Math.random() * 1000),
                    listId,
                    name: itemName,
                    date: new Date()
                }
            })
        }, 0)
    }
}

export const editItem = (id, listId, itemName) => {
    return async dispatch => {
        setTimeout(() => {
            dispatch({
                type: 'EDIT_ITEM',
                payload: {
                    id,
                    listId,
                    itemName,
                    date: new Date()
                }
            })
        }, 0)
    }
}

export const removeItem = (id, listId) => {
    return async dispatch => {
        setTimeout(() => {
            dispatch({
                type: 'REMOVE_ITEM',
                payload: {
                    id,
                    listId
                }
            })
        }, 0)
    }
}
