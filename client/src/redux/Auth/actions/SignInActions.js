import * as types from '../Types'
import * as api from '../../../api/index'

export const signInRequest = () => {
    return {
        type: types.SIGN_IN_REQUEST,
        payload: null
    }
}

export const signInSuccess = (user) => {
    return {
        type: types.SIGN_IN_SUCCESS,
        payload: user
    }
}

export const signInError = (error) => {
    return {
        type: types.SIGN_IN_ERROR,
        payload: error
    }
}

export const signInAction = (formData, history) => (dispatch) => {
    dispatch(signInRequest())

    try {
        const user = await api  
        dispatch(signInSuccess(user))
        history.push('/')
    } catch (error) {
        dispatch(signInError(error))
    }
} 