import { combineReducers } from 'redux'
import { postReducer } from './Post/reducers/PostReducer'
import { authReducer } from './Auth/reducers/AuthReducers'

export const rootReducer = combineReducers({
    posts: postReducer,
    auth: authReducer
})