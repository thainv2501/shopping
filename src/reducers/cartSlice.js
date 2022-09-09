import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    showCart: false,
  },
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
      //   return { ...state, cart: [{ ...action.payload }, ...state.cart] };
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter((c) => c.product.id !== action.payload.id);
    },
    changeCartQuantity(state, action) {
      state.cart = state.cart.filter((c) =>
        c.product.id === action.payload.id
          ? (c.quantity = action.payload.qty)
          : c.quantity
      );
    },
    showCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
