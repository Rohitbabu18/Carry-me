import { createReducer } from "@reduxjs/toolkit";
import { forgetOptionAction, userIdForgetPassword, userList, usernameSentModalAction } from "./action";

const initialState = {
    list: [],
    forgetPasswordId: '',
    forgetOption: '1',
    usernameSentModal: false
};

const userReducer = createReducer(initialState, (builder) => {
    builder.addCase(userList, (state, action) => { state.list = action.payload });
    builder.addCase(userIdForgetPassword, (state, action) => { state.forgetPasswordId = action.payload });
    builder.addCase(forgetOptionAction, (state, action) => { state.forgetOption = action.payload });
    builder.addCase(usernameSentModalAction, (state, action) => { state.usernameSentModal = action.payload });
});

export default userReducer;