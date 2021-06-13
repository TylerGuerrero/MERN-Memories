// action creator returns a action object that has a type
// and payload field

// dispatching a action object is the only way to update the
// store, it the only way tp update the global state managemnet
// system and have a action reduced

import * as types from '../Type'
import * as api from '../../../api/index'

export const deletePostRequest = () => {
    return {
        type: types.DELETE_POST_REQUEST,
        payload: null
    }
}

export const deletePostSuccess = (id) => {
    return {
        type: types.DELETE_POST_SUCCESS,
        payload: id
    }
}

export const deletePostError = (error) => {
    return {
        type: types.DELETE_POST_ERROR,
        payload: error
    }
}

export const deletePost = (id) => async (dispatch) => {
    dispatch(deletePostRequest())
    
    try {
        await api.deletePost(id)
        dispatch(deletePostSuccess(id))
    } catch (err) {
        console.log(err)
        dispatch(deletePostError())
    }   
}   