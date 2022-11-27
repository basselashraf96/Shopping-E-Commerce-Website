import {
    loginFailure,
    loginStart,
    loginSuccess,
    loginOut,
    getUsersStart,
    getUsersSucceful,
    getUsersFailure,
    deleteUserStart,
    deleteUserSucceful,
    deleteUserFailure,
    updateUserStart,
    updateUserSucceful,
    updateUserFailure,
    addUserStart,
    addUserSuccess,
    addUserFailure,
} from "./userRedux"
import { publicRequest, userRequest } from '../api'

import {
    deleteProductFailure,
    deleteProductStart,
    deleteProductSuccess,
    getProductFailure,
    getProductStart,
    getProductSuccess,
    updateProductFailure,
    updateProductStart,
    updateProductSuccess,
    addProductFailure,
    addProductStart,
    addProductSuccess,
} from "./productRedux";
export const login = async(dispatch, user) => {

    dispatch(loginStart());
    try {
        const res = await publicRequest.post('/auth/login', user)
        dispatch(loginSuccess(res.data))


    } catch (error) {
        dispatch(loginFailure())
    }
}
export const logout = async(dispatch, user) => {
    dispatch(loginOut())
}
export const getProducts = async(dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await publicRequest.get('/products')
        dispatch(getProductSuccess(res.data))
    } catch (error) {
        dispatch(getProductFailure())
    }
}
export const deleteProducts = async(id, dispatch) => {
    dispatch(deleteProductStart());
    try {
        const res = await userRequest.delete(`/products/${id}`)
        dispatch(deleteProductSuccess(id))
    } catch (error) {
        dispatch(deleteProductFailure())
    }
}
export const updateProducts = async(id, product, dispatch) => {
    dispatch(updateProductStart());
    try {
        const res = await userRequest.put(`/products/${id}`, product)
        dispatch(updateProductSuccess({ id, product: res.data }))
    } catch (error) {
        dispatch(updateProductFailure())
    }
}
export const addProducts = async(product, dispatch) => {
    dispatch(addProductStart());
    try {
        const res = await userRequest.post(`/products/`, product)
        dispatch(addProductSuccess(res.data))
    } catch (error) {
        dispatch(addProductFailure())
    }
}

export const getUsers = async(dispatch) => {
    dispatch(getUsersStart())
    try {
        const res = await userRequest.get('/users')
        dispatch(getUsersSucceful(res.data))
    } catch (error) {
        dispatch(getUsersFailure())
    }
}
export const deleteUser = async(id, dispatch) => {
    dispatch(deleteUserStart())
    try {
        const res = await userRequest.delete(`/users/${id}`)
        dispatch(deleteUserSucceful(id))
    } catch (error) {
        dispatch(deleteUserFailure())
    }
}
export const updateUser = async(id, user, dispatch) => {
    dispatch(updateUserStart())
    try {
        const res = await userRequest.put(`/users/${id}`, user)
        dispatch(updateUserSucceful({ id, user: res.data }))
    } catch (error) {
        dispatch(updateUserFailure())
    }
}
export const addUser = async(user, dispatch) => {
    dispatch(addUserStart());
    try {
        const res = await userRequest.post(`/auth/register`, user)
        dispatch(addUserSuccess(res.data))
    } catch (error) {
        dispatch(addUserFailure())
    }
}