import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../reducers/cartSlice";
import productSlice from "../reducers/productsSlice";

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
