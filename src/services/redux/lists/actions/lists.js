const URI = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_BACKEND_URL : process.env.REACT_APP_BACKEND_URL_DEV
export const URL = `${URI}/api/`

const NETWORK_MSG = 'please check your network connection'

export const getLists = () => {
    return async dispatch => {
        try {
            const r = await fetch(URL + 'lists/')
            const data = await r.json()

            if (r.status !== 200) throw new Error(`Server Error: ${data.message}`)

            dispatch({
                type: 'GET_LISTS',
                payload: {
                    lists: data.data,
                    requestDone: true
                }
            })
        } catch (e) {
            dispatch({
                type: 'SHOW_NOTIFICATION',
                payload: {
                    type: 'error',
                    message: e.message || `Error fetching lists, ${NETWORK_MSG}`,
                    status: true
                }
            })
            dispatch({
                type: 'GET_LISTS',
                payload: {
                    lists: [],
                    requestDone: true
                }
            })
        }
    }
}

export const addList = (listName) => {
    return async dispatch => {
        try {
            const r = await fetch(URL + 'lists/', {
                method: 'POST',
                body: JSON.stringify({'name': listName}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await r.json()

            if (r.status !== 200) throw new Error(`Server Error: ${data.message}`)

            dispatch({
                type: 'ADD_LIST',
                payload: {
                    _id: data.data._id,
                    name: data.data.name,
                    items: []
                }
            })
        } catch (e) {
            dispatch({
                type: 'SHOW_NOTIFICATION',
                payload: {
                    type: 'error',
                    message: e.message || `Error trying to add a new list, ${NETWORK_MSG}`,
                    status: true
                }
            })
        }
    }
}

export const removeList = (listId) => {
    return async dispatch => {
        try {
            const r = await fetch(URL + 'lists/', {
                method: 'DELETE',
                body: JSON.stringify({'listId': listId}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await r.json()

            if (r.status !== 200) throw new Error(`Server Error: ${data.message}`)

            dispatch({
                type: 'REMOVE_LIST',
                payload: listId
            })
        } catch (e) {
            dispatch({
                type: 'SHOW_NOTIFICATION',
                payload: {
                    type: 'error',
                    message: e.message || `Error trying to remove the list, ${NETWORK_MSG}`,
                    status: true
                }
            })
        }
    }
}

export const editListName = (listId, listName) => {
    return async dispatch => {
        try {
            const r = await fetch(URL + 'lists/', {
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

            if (r.status !== 200) throw new Error(`Server Error: ${data.message}`)

            dispatch({
                type: 'EDIT_LIST',
                payload: {
                    listId,
                    listName
                }
            })
        } catch (e) {
            dispatch({
                type: 'SHOW_NOTIFICATION',
                payload: {
                    type: 'error',
                    message: e.message || `Error trying to edit the list, ${NETWORK_MSG}`,
                    status: true
                }
            })
        }
    }
}

export const addItem = (listId, itemName) => {
    return async dispatch => {
        const date = new Date()
        try {
            const r = await fetch(URL + 'items/', {
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

            if (r.status !== 200) throw new Error(`Server Error: ${data.message}`)

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
            dispatch({
                type: 'SHOW_NOTIFICATION',
                payload: {
                    type: 'error',
                    message: e.message || `Error trying to add the item ${itemName}, ${NETWORK_MSG}`,
                    status: true
                }
            })
        }
    }
}

export const editItem = (id, listId, itemName) => {
    return async dispatch => {
        const date = new Date()

        try {
            const r = await fetch(URL + 'items/', {
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

            if (r.status !== 200) throw new Error(`Server Error: ${data.message}`)

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
            dispatch({
                type: 'SHOW_NOTIFICATION',
                payload: {
                    type: 'error',
                    message: e.message || `Error trying to edit the item, ${NETWORK_MSG}`,
                    status: true
                }
            })
        }
    }
}

export const removeItem = (id, listId) => {
    return async dispatch => {
        try {
            const r = await fetch(URL + 'items/', {
                method: 'DELETE',
                body: JSON.stringify({
                    'itemId': id
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await r.json()

            if (r.status !== 200) throw new Error(`Server Error: ${data.message}`)

            dispatch({
                type: 'REMOVE_ITEM',
                payload: {
                    _id: id,
                    listId
                }
            })
        } catch (e) {
            dispatch({
                type: 'SHOW_NOTIFICATION',
                payload: {
                    type: 'error',
                    message: e.message || `Error trying to remove the item, ${NETWORK_MSG}`,
                    status: true
                }
            })
        }
    }
}
