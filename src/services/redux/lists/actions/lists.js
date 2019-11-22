const url = `http://localhost:3001/api/`

export const getLists = () => {
    return async dispatch => {
        try {
            const r = await fetch(url + 'lists/')
            const data = await r.json()
            dispatch({
                type: 'GET_LISTS',
                payload: data.data
            })
        } catch (e) {

        }
    }
}

export const addList = (listName) => {
    return async dispatch => {
        try {
            const r = await fetch(url + 'lists/', {
                method: 'POST',
                body: JSON.stringify({'name': listName}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await r.json()
            dispatch({
                type: 'ADD_LIST',
                payload: {
                    _id: data.data._id,
                    name: data.data.name,
                    items: []
                }
            })
        } catch (e) {
        }
    }
}

export const removeList = (listId) => {
    return async dispatch => {
        try {
            const r = await fetch(url + 'lists/', {
                method: 'DELETE',
                body: JSON.stringify({'listId': listId}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await r.json()
            dispatch({
                type: 'REMOVE_LIST',
                payload: listId
            })
        } catch (e) {
        }
    }
}

export const editListName = (listId, listName) => {
    return async dispatch => {
        try {
            const r = await fetch(url + 'lists/', {
                method: 'PUT',
                body: JSON.stringify({
                    'listId': listId,
                    'name': listName
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await r.json()
            dispatch({
                type: 'EDIT_LIST',
                payload: {
                    listId,
                    listName
                }
            })
        } catch (e) {
        }
    }
}

export const addItem = (listId, itemName) => {
    return async dispatch => {
        const date = new Date()
        try {
            const r = await fetch(url + 'items/', {
                method: 'POST',
                body: JSON.stringify({
                    'listId': listId,
                    'name': itemName,
                    'date': date
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await r.json()
            dispatch({
                type: 'ADD_ITEM',
                payload: {
                    _id: data.data._id,
                    name: itemName,
                    listId,
                    date
                }
            })
        } catch (e) {
        }
    }
}

export const editItem = (id, listId, itemName) => {
    return async dispatch => {
        const date = new Date()

        try {
            const r = await fetch(url + 'items/', {
                method: 'PUT',
                body: JSON.stringify({
                    'itemId': id,
                    'name': itemName,
                    'date': date
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await r.json()
            dispatch({
                type: 'EDIT_ITEM',
                payload: {
                    _id: data.data._id,
                    itemName,
                    listId,
                    date
                }
            })
        } catch (e) {
        }
    }
}

export const removeItem = (id, listId) => {
    return async dispatch => {
        try {
            const r = await fetch(url + 'items/', {
                method: 'DELETE',
                body: JSON.stringify({
                    'itemId': id
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await r.json()
            dispatch({
                type: 'REMOVE_ITEM',
                payload: {
                    _id: id,
                    listId
                }
            })
        } catch (e) {
        }
    }
}
