// action creator returns a action object that has a type
// and payload field

// dispatching a action object is the only way to update the
// store, it the only way tp update the global state managemnet
// system and have a action reduced

import * as api from '../../../api/index'
import * as types from '../Type'

export const getPostRequest = () => {
    return {
        type: types.FETCH_ALL_REQUEST,
        payload: null
    }
}

export const getPostSuccess = (posts) => {
    return {
        type: types.FETCH_ALL_SUCCESS,
        payload: posts
    } 
}

export const getPostFailure = (error) => {
    return {
        type: types.FETCH_ALL_ERROR,
        payload: error
    }
}

export const getPosts = () => async (dispatch) => {
    dispatch(getPostRequest())
    
    try {
        const { data } = await api.fetchPost()
        dispatch(getPostSuccess(data))
    } catch (error) {
        dispatch(getPostFailure(error.message))
    }
}