import * as types from '../Types'

export const authSuccess = (profile, token) => {
    return {
        type: types.AUTH_SUCCESS,
        payload: {profile, token}
    }
}

export const authError = (error) => {
    return {
        type: types.AUTH_ERROR,
        payload: error
    }
}