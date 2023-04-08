import { createAction } from "@reduxjs/toolkit";
export const loginRequest = createAction("loginRequest");
export const loginSuccess = createAction("loginSuccess");
export const loginFailure = createAction("loginFailure");
export const registerRequest = createAction("registerRequest");
export const registerSuccess = createAction("registerSuccess");
export const registerFailure = createAction("registerFailure");
export const logout = createAction("logout");
