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

const intitialState = {
    loading: false,
    posts: [],
    error: null
}

export const fetchPostReducer = (state = intitialState, action) => {
    switch (action.type) {
        case types.FETCH_ALL_REQUEST: 
            return {
                ...state,
                loading: true,
                posts: [],
                error: null
            }
        case types.FETCH_ALL_SUCCESS: 
            return {
                ...state,
                loading: false,
                posts: action.payload,
                error: null
            }
        case types.FETCH_ALL_ERROR:
            return {
                ...state,
                loading: false,
                posts: [],
                error: action.payload
            }
        default:
            return state
    }
}