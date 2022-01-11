import { createAction } from "@reduxjs/toolkit";

export const apiCallBegan = createAction("api/callBegan");
export const apiCallFailed = createAction("api/callFailed");
export const apiCallSuccess = createAction("api/callSuccess");
