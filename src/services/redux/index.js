import {combineReducers} from 'redux'
import listsReducer from './lists/reducers/lists'
import snackbarReducer from './snackbar/reducers/snackbar'

const rootReducer = combineReducers({
    listsReducer,
    snackbarReducer
})

export default rootReducer
