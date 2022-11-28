import {
    loginFailure,
    loginStart,
    loginSuccess,
    logout,
    registerStart,
    registerSuccess,
    registerFailure,
    registerReset
} from "./userRedux"
import { publicRequest } from '../api'
export const login = async(dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post('/auth/login', user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}
export const logOut = (dispatch) => {
    dispatch(logout())
}

export const register = async(user, dispatch) => {
    dispatch(registerStart());
    try {
        const res = await publicRequest.post('/auth/register', user)
        dispatch(registerSuccess(res.data))
    } catch (error) {
        dispatch(registerFailure())
    }
}
export const resetRegister = (dispatch) => {
    dispatch(registerReset())
}