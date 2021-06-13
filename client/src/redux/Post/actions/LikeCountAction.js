// action creator returns a action object that has a type
// and payload field

// dispatching a action object is the only way to update the
// store, it the only way tp update the global state managemnet
// system and have a action reduced

import * as types from '../Type'
import * as api from '../../../api/index'

export const likeCountRequest = () => {
    return {
        type: types.LIKE_COUNT_REQUEST,
        payload: null
    }
}

export const likeCountSuccess = (post) => {
    return {
        type: types.LIKE_COUNT_SUCCESS,
        payload: post
    }
}

export const likeCountError = (error) => {
    return {
        type: types.LIKE_COUNT_ERROR,
        payload: error
    }
}

export const likeCount = (id) => async (dispatch) => {
    dispatch(likeCountRequest())

    try {
        const { data } = await api.likePost(id)
        dispatch(likeCountSuccess(data))
    } catch (err) {
        console.log(err)
        dispatch(likeCountError(err.message))
    }
}