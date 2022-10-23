import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart", //! action type is "cart/addProduct"
    initialState: {
        products: [], //! this is initial state for product response from api as array
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1; //! increase quatity of this reducer by 1 each reducer call
            state.products.push(action.payload) //! push the response from api from the action to products prop in reducer
            state.total += action.payload.price * action.payload.amount; //! get the total price for the items
        }
    }
})


export const { addProduct } = cartSlice.actions
export default cartSlice.reducer;