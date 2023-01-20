import { createSlice } from "@reduxjs/toolkit";
import { login, registerUser } from "./authActions";

const initialState = {
  id: "",
  email: "",
  msg: "",
  error: false,
  loading: false,
};

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    clearAuthMessages: (state) => {
      state.error = false;
      state.msg = "";
      state.loading = false;
      state.id = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.email = action.payload.newUser.email;
      state.error = false;
      state.msg = action.payload.msg;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.msg = "Something went wrong";
    });
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.id = action.payload.response.dataValues.id;
      state.email = action.payload.response.dataValues.email;
      state.error = false;
      state.msg = action.payload.msg;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.msg = "Something went wrong";
    });
  },
});

export const { clearAuthMessages } = authSlice.actions;
export default authSlice.reducer;
