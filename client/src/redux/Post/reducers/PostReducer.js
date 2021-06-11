import { CREATE, FETCH_ALL} from '../Type'

const intitialState = {
    posts: []
}

export const postReducer = (state = intitialState, action) => {
    switch(action.type) {
        case FETCH_ALL: 
            return {
                ...state,

            }
        case CREATE: 
            return {
                ...state,

            }
        default:
            return state
    }
}