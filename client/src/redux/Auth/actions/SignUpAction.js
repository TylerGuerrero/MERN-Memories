import * as types from '../Types'
import * as api from '../../../api/index'

export const signUpRequest = () => {
    return {
        type: types.SIGN_UP_REQUEST,
        payload: null
    }
}

export const signUpSuccess = (userData) => {
    return {
        type: types.AUTH_SUCCESS,
        payload: userData
    }
}

export const signUpError = (error) => {
    return {
        type: types.SIGN_UP_ERROR,
        payload: error
    }
}

export const signUpAction = (formData, history) => async (dispatch) => {
    dispatch(signUpRequest())

    try {
        const { data } = await api.signUp(formData)
        dispatch(signUpSuccess(data))
        history.push("/")
    } catch (error) {
        dispatch(signUpError(error))
    }
}