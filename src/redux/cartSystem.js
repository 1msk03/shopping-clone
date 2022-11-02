import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  qty: 0,
};
const cartSystem = createSlice({
  name: "cartProduct",
  initialState,
  reducers: {
    AddCart: (state, action) => {
      const exist = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (exist >= 0) {
        state.cartItems[exist].qty = state.cartItems[exist].qty + 1;
      } else {
        const tempvar = { ...action.payload, qty: 1 };
        state.cartItems.push(tempvar);
      }
    },
    RemoveItem: (state, action) => {
      const exist = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[exist].qty === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.cartItems[exist].qty = state.cartItems[exist].qty - 1;
      }
    },
  },
});

export const { AddCart, RemoveItem } = cartSystem.actions;
export default cartSystem.reducer;
