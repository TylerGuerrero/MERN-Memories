import * as types from '../Types'
import * as api from '../../../api/index'

export const signInRequest = () => {
    return {
        type: types.SIGN_IN_REQUEST,
        payload: null
    }
}

export const signInSuccess = (userData) => {
    return {
        type: types.AUTH_SUCCESS,
        payload: userData
    }
}

export const signInError = (error) => {
    return {
        type: types.SIGN_IN_ERROR,
        payload: error
    }
}

export const signInAction = (formData, history) => async (dispatch) => {
    dispatch(signInRequest())

    try {
        const { data } = await api.signIn(formData) 
        dispatch(signInSuccess(data))
        history.push('/')
    } catch (error) {
        dispatch(signInError(error))
    }       
} 