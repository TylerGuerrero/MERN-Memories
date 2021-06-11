import { combineReducers } from 'redux'
import { postReducer } from './Post/reducers/PostReducer'

export const rootReducer = combineReducers({
    posts: postReducer
})