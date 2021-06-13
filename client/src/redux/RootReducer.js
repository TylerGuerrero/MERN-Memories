import { combineReducers } from 'redux'
import { fetchPostReducer } from './Post/reducers/PostFetchReducer'
import { createPostReducer} from './Post/reducers/PostCreateReducer'
import { updatedPostReducer } from './Post/reducers/PostUpdateReducer'

export const rootReducer = combineReducers({
    posts: fetchPostReducer,
    newPost: createPostReducer,
    updatedPost: updatedPostReducer
})