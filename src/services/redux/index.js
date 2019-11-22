import {combineReducers} from 'redux'
import listsReducer from './lists/reducers/lists'

const rootReducer = combineReducers({
    listsReducer
})

export default rootReducer
