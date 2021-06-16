import * as types from '../Types'

const initialState = {
    auth: null,
    error: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.AUTH_SUCCESS:
           localStorage.setItem('profile', JSON.stringify(action.payload))
           return {
               ...state,
               auth: action.payload,
               error: null
           }
        case types.AUTH_ERROR:
            return {
                ...state,
                auth: null,
                error: action.payload
            }
        case types.LOGOUT:
            localStorage.clear()
            return {
                ...state,
                auth: null,
                error: null
            }
        default:
            return state

    }
}