import { combineReducers } from "redux";
import cart from "./cart";
import user from "./user";
import product from "./product";

export default combineReducers({
  cart,
  user,
  product
});
