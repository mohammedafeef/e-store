import { createSlice, current } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

//slice for products
const slice = createSlice({
  name: "product",
  initialState: {
    list: [],
    isLoading: false,
  },
  reducers: {
    productRecived: (product, action) => {
      // console.log(current(product), action.payload);
      // const products = [...action.payload];
      console.log(product, action);
      product.list = action.payload;
    },
  },
});

//actions
export const { productRecived } = slice.actions;

//reducer
export default slice.reducer;

//action creators
export const loadProducts = () =>
  apiCallBegan({
    url: "/product",
    method: "GET",
    onSuccess: productRecived.type,
  });

//selectors
export const getProducts = (state) => state.product;
