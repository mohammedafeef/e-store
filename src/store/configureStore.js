import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducers";
import api from "./middleware/api";
import cartWatcher from "./middleware/cartWatcher";
export default function () {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), api, cartWatcher],
  });
}
