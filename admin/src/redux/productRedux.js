import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        isFetching: false,
        error: false
    },
    reducers: {
        // GET ALL
        getProductStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        getProductSuccess: (state, action) => {
            state.isFetching = false
            state.products = action.payload
        },
        getProductFailure: (state) => {
            state.isFetching = false
            state.error = true

        },

        // DELETE
        deleteProductStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        deleteProductSuccess: (state, action) => {
            state.isFetching = false
                //! you can only splice in redux tool kit not normal redux(mutating)
            state.products.splice(
                state.products.findIndex(item => item._id === action.payload), 1
            )
        },
        deleteProductFailure: (state) => {
            state.isFetching = false
            state.error = true

        },
        // UPDATE
        updateProductStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        updateProductSuccess: (state, action) => {
            state.isFetching = false

            state.products[state.products.findIndex((item) => item._id === action.payload.id)] = action.payload.product
        },
        updateProductFailure: (state) => {
            state.isFetching = false
            state.error = true
        },
        // ADD
        addProductStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        addProductSuccess: (state, action) => {
            state.isFetching = false

            state.products.push(action.payload)
        },
        addProductFailure: (state) => {
            state.isFetching = false
            state.error = true
        }
    }
})


export const {
    getProductStart,
    getProductSuccess,
    getProductFailure,
    deleteProductFailure,
    deleteProductStart,
    deleteProductSuccess,
    addProductFailure,
    addProductStart,
    addProductSuccess,
    updateProductFailure,
    updateProductStart,
    updateProductSuccess
} = productSlice.actions
export default productSlice.reducer;