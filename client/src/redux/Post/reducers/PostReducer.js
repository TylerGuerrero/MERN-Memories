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
    posts: [],
    error: null
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CREATE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case types.CREATE_SUCCESS:
            return {
                ...state,
                posts: [...state.posts, action.payload],
                loading: false,
                error: null
            }
        case types.CREATE_ERROR:
            return {
                ...state,
                loading: false,
                posts: null,
                error: action.payload
            }
        case types.FETCH_ALL_REQUEST:
            return {
                ...state,
                loading: true,
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
                error: action.payload
            }
        case types.UPDATE_POST_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case types.UPDATE_POST_SUCCESS:
            return {
                ...state,
                posts: state.posts.map((post) => post._id === action.payload._id ? action.payload: post),
                loading: false,
                error: null
            }
        case types.UPDATE_POST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case types.DELETE_POST_REQUEST:
            return {
                ...state,
                loading: true,
                error: action.payload
            }
        case types.DELETE_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: state.posts.filter((post) => post._id !== action.payload ? post : null),
                error: null
            }
        case types.DELETE_POST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload 
            }
        case types.LIKE_COUNT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case types.LIKE_COUNT_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: state.posts.map((post) => post._id === action.payload._id ? action.payload: post),
                error: null
            }
        case types.LIKE_COUNT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}