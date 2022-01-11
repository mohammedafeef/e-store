import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducers";
import api from "./middleware/api";
import cartWatcher from "./middleware/cartWatcher";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export default function () {
  const persistConfig = {
    key: "root",
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, reducer);
  return configureStore({
    reducer: persistedReducer,
    middleware: [...getDefaultMiddleware(), api, cartWatcher],
  });
}
