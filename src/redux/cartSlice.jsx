import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addtoCart : (state, action) => {
        state.cart.push(action.payload)
    },
    removefromCart : (state, action) => {
      state.cart = state.cart.filter(x => x.btn_id !== action.payload.btn_id)
    }
  },
});

export default cartSlice.reducer;
export const {addtoCart, removefromCart} = cartSlice.actions;
