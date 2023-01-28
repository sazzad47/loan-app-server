import { createSlice } from "@reduxjs/toolkit";
import { login, registerUser } from "./authActions";

const initialState = {
  id: "",
  email: "",
  first_name: "",
  last_name: "",
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
    },
    logoutUser: (state) => {
      state.loading = false;
      state.id = "";
      state.email = "";
      state.first_name = "";
      state.last_name = "";
      state.error = false;
      state.msg = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.email = action.payload.newUser.email;
      state.first_name = action.payload.newUser.first_name;
      state.last_name = action.payload.newUser.last_name;
      state.id = action.payload.newUser.id;
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
      state.first_name = action.payload.response.dataValues.first_name;
      state.last_name = action.payload.response.dataValues.last_name;
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

export const { clearAuthMessages, logoutUser } = authSlice.actions;
export default authSlice.reducer;
