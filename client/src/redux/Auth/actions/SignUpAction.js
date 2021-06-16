import * as types from '../Types'
import * as api from '../../../api/index'

export const signUpRequest = () => {
    return {
        type: types.SIGN_UP_REQUEST,
        payload: null
    }
}

export const signUpSuccess = (user) => {
    return {
        type: types.SIGN_UP_SUCCESS,
        payload: user
    }
}

export const signUpError = (error) => {
    return {
        type: types.SIGN_UP_ERROR,
        payload: error
    }
}

export const singUpAction = (formData, history) => (dispatch) => {
    dispatch(signUpRequest())

    try {
        const user = await api
        dispatch(signUpSuccess(user))
        history.push("/")
    } catch (error) {
        dispatch(signUpError(error))
    }
}