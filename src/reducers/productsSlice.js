import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    addToProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const productsActions = productSlice.actions;
export default productSlice;
