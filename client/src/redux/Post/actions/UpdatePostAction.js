// action creator returns a action object that has a type
// and payload field

// dispatching a action object is the only way to update the
// store, it the only way tp update the global state managemnet
// system and have a action reduced

import * as types from '../Type'
import * as api from '../../../api/index'

export const updatePostRequest = () => {
    return {
        type: types.UPDATE_POST_REQUEST,
        payload: null
    }
}

export const updatePostSuccess = (updatedPost) => {
    return {
        type: types.UPDATE_POST_SUCCESS,
        payload: updatedPost
    }
}

export const updatePostError = (error) => {
    return {
        type: types.UPDATE_POST_ERROR,
        payload: error
    }
}

export const updatePost = (id, updatedPost) => async (dispatch) => {
    dispatch(updatePostRequest())
    
    try {   
        const { data } = await api.putPost(id, updatedPost)
        dispatch(updatePostSuccess(data))
    } catch (err) {
        dispatch(updatePostError(err.message))
    }   
}