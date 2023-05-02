import { createReducer } from "@reduxjs/toolkit";
import { forgetOptionAction, userIdForgetPassword, userList, usernameSentModalAction, vehiaclSelectAction } from "./action";

const initialState = {
    list: [],
    forgetPasswordId: '',
    forgetOption: '1',
    usernameSentModal: false,
    vehiaclSelected: 0
};

const userReducer = createReducer(initialState, (builder) => {
    builder.addCase(userList, (state, action) => { state.list = action.payload });
    builder.addCase(userIdForgetPassword, (state, action) => { state.forgetPasswordId = action.payload });
    builder.addCase(forgetOptionAction, (state, action) => { state.forgetOption = action.payload });
    builder.addCase(usernameSentModalAction, (state, action) => { state.usernameSentModal = action.payload });
    builder.addCase(vehiaclSelectAction, (state, action) => { state.vehiaclSelected = action.payload });
});

export default userReducer;