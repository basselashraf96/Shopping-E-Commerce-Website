import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user", //! action type is "user/loginStart for example"
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
        users: []
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
        //get users
        getUsersStart: (state) => {
            state.isFetching = true;
            state.error = false
        },
        getUsersSucceful: (state, action) => {
            state.isFetching = false;
            state.users = action.payload
        },
        getUsersFailure: (state) => {
            state.isFetching = false;
            state.error = true
        },
        //Delete user
        deleteUserStart: (state) => {
            state.isFetching = true;
            state.error = false
        },
        deleteUserSucceful: (state, action) => {
            state.isFetching = false;
            //! you can only splice in redux tool kit not normal redux(mutating)
            state.users.splice(
                state.users.findIndex(item => item._id === action.payload), 1
            )
        },
        deleteUserFailure: (state) => {
            state.isFetching = false;
            state.error = true
        },
        //Update user
        updateUserStart: (state) => {
            state.isFetching = true;
            state.error = false
        },
        updateUserSucceful: (state, action) => {
            state.isFetching = false;
            state.users[state.users.findIndex((item) => item._id === action.payload.id)] = action.payload.user
        },
        updateUserFailure: (state) => {
            state.isFetching = false;
            state.error = true
        },
    }
})


export const {
    loginStart,
    loginSuccess,
    loginFailure,
    getUsersStart,
    getUsersSucceful,
    getUsersFailure,
    deleteUserStart,
    deleteUserSucceful,
    deleteUserFailure,
    updateUserStart,
    updateUserSucceful,
    updateUserFailure,
} = userSlice.actions
export default userSlice.reducer;