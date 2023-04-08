import { createReducer } from "@reduxjs/toolkit";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  registerRequest,
  registerSuccess,
  registerFailure,
  logout,
} from "./common-action";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const commonReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loginRequest, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(loginSuccess, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    })
    .addCase(loginFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(registerRequest, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(registerSuccess, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    })
    .addCase(registerFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(logout, (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
    });
});
