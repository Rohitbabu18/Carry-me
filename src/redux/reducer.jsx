import { createReducer } from "@reduxjs/toolkit";
import { userList } from "./action";

const initialState = {
    list: [],
};

const userReducer = createReducer(initialState, (builder) => {
    builder.addCase(userList, (state, action) => { state.list = action.payload });
});

export default userReducer;