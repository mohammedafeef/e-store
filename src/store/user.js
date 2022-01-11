import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

// slice
const slice = createSlice({
  name: "user",
  initialState: {
    error: false,
    redirectTo: false,
    data: {
      token: null,
    },
  },
  reducers: {
    userSignedIn: (user, action) => {
      user.error = false;
      user.redirectTo = true;
      user.data.token = action.payload.token;
    },
    userSignUp: (user, action) => {
      user.error = false;
      user.redirectTo = true;
      user.data = {
        _id: action.payload._id,
        username: action.payload.username,
        email: action.payload.email,
      };
    },
    userSignedOut: (user, action) => {
      user.error = false;
      user.data = {};
    },
    errorOccured: (user, action) => {
      user.error = true;
    },
    userRedirected: (user, action) => {
      user.redirectTo = false;
    },
  },
});

//actions
export const {
  userSignedIn,
  userSignedOut,
  userSignUp,
  errorOccured,
  userRedirected,
} = slice.actions;

//reducer
export default slice.reducer;

//actions creators
export const signIn = (data) =>
  apiCallBegan({
    url: "/user/login",
    method: "POST",
    data,
    onSuccess: userSignedIn.type,
    onError: errorOccured.type,
  });

export const register = (data) =>
  apiCallBegan({
    url: "/user/register",
    method: "POST",
    data,
    onSuccess: userSignUp.type,
    onError: errorOccured.type,
  });

//selectors
export const getUser = (state) => state.user;
