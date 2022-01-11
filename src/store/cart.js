import { createSlice, createSelector } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

// cart slice
const slice = createSlice({
  name: "cart",
  initialState: {
    list: [],
  },
  reducers: {
    itemUpdated: (cart, action) => {
      cart.list = action.payload;
    },
    itemAdded: (cart, action) => {
      const itemIndex = cart.list.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex > -1) {
        cart.list[itemIndex].quandity += 1;
      } else {
        cart.list.push(action.payload);
      }
    },
    itemRemoved: (cart, action) => {
      const itemIndex = cart.list.findIndex(
        (item) => item._id === action.payload._id
      );
      if (cart.list[itemIndex].quantity > 1) {
        cart.list[itemIndex].quantity -= 1;
      } else {
        cart.list.splice(itemIndex, 1);
      }
    },
  },
});

//actions
export const { itemAdded, itemRemoved, itemUpdated } = slice.actions;

//reducer
export default slice.reducer;

//action creators
const url = "/cart";

export const loadCartItems = () =>
  apiCallBegan({
    url: url,
    method: "GET",
    onSuccess: itemUpdated.type,
  });
export const addToCart = (id) =>
  apiCallBegan({
    url,
    method: "POST",
    data: { productId: id },
    onSuccess: itemUpdated.type,
  });

export const removeFromCart = (id) =>
  apiCallBegan({
    url,
    method: "DELETE",
    data: { productId: id },
    onSuccess: itemUpdated.type,
  });

//selector
export const getCartItems = (state) => state.cart;

export const getCartItemsCount = createSelector(
  (state) => state.cart.list,
  (cart) => cart.reduce((count, item) => count + item.quantity, 0)
);

export const getTotalPrice = createSelector(
  (state) => state.cart.list,
  (cart) => cart.reduce((total, item) => item.quantity * item.price + total, 0)
);
