// state object get binded to the initial state object
// action object get binded to the action object from the dispatch method

// (prevState, action) => newState

// state is immutable. Every time state is updated it creates
// a brand new state. We do this for debugging reasons. When
// creating a new state we can see the previous states back in
// time. This is why we always create a brand new state

// return state object that was the same exact type and stucture 
// of a state object as before

import * as types from '../Type'

const initialState = {
    loading: false,
    updatedPost: null,
    error: null
}

export const updatedPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_ALL_REQUEST:
            return {
                ...state,
                loading: true,
                updatedPost: null,
                error: null
            }
        case types.UPDATE_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                updatedPost: action.payload,
                error: null
            }
        case types.UPDATE_POST_ERROR:
            return {
                ...state,
                loading: false,
                payload: null,
                error: action.payload
            }
        default:
            return state
    }
}