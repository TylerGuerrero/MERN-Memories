import { combineReducers } from 'redux'
import { fetchPostReducer } from './Post/reducers/PostFetchReducer'
import { createPostReducer} from './Post/reducers/PostCreateReducer'

export const rootReducer = combineReducers({
    posts: fetchPostReducer,
    newPost: createPostReducer
})