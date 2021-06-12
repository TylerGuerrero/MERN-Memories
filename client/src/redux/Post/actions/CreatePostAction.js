import * as types from '../Type'
import * as api from '../../../api/index'

export const createPostRequest = () => {
    return {
        type: types.CREATE_REQUEST,
        payload: null
    }   
}

export const createPostSuccess = (post) => {
    return {
        type: types.CREATE_SUCCESS,
        payload: post
    }
}

export const createPostError = (error) => {
    return {
        type: types.CREATE_ERROR,
        payload: error
    }   
}

export const createPost = (post) => async (dispatch) => {
    dispatch(createPostRequest())
    try {   
        const { data } = await api.createPost(post)
        console.log(data)
        dispatch(createPostSuccess(data))
    } catch (error) {
        dispatch(createPostError(error.message))
    }
}