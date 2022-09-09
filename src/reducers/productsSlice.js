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
export const fetchProducts = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const respond = await fetch("https://dummyjson.com/products");
      const data = await respond.json();
      console.log(data.products);
      return data.products;
    };
    const products = await fetchData();
    dispatch(productsActions.addToProducts(products));
  };
};
export const productsActions = productSlice.actions;
export default productSlice;
