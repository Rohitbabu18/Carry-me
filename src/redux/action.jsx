import { createAction } from "@reduxjs/toolkit";

export const userList = createAction("list/userList");
export const userIdForgetPassword = createAction("forget/forgetPassword");
export const forgetOptionAction = createAction("forgetOption/forgetOptionButton");
export const usernameSentModalAction = createAction("usernameSentModal/usernameSentModalButton");
export const vehiaclSelectAction = createAction("vehiaclSelect/vehiaclSelectButton");