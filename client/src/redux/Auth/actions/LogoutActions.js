import * as types from '../Types'

export const logOut = () => {
    return {
        type: types.LOGOUT,
        payload: null
    }
}