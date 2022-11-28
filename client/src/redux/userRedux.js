import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user", //! action type is "cart/addProduct"
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
        success: false
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true
        },
        logout: (state) => {
            state.currentUser = null
        },
        registerStart: (state) => {
            state.isFetching = true;
            state.success = false
        },
        registerSuccess: (state, action) => {
            state.isFetching = false;
            state.success = true
            state.error = false
            state.currentUser = action.payload;

        },
        registerFailure: (state) => {
            state.isFetching = false;
            state.error = true
            state.success = false
        },
        registerReset: (state) => {
            state.isFetching = false
            state.error = false
            state.success = false
        }

    }
})


export const {
    loginStart,
    loginSuccess,
    loginFailure,
    logout,
    registerStart,
    registerSuccess,
    registerFailure,
    registerReset
} = userSlice.actions
export default userSlice.reducer;