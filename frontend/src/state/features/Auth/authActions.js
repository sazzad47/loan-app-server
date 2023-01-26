import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

// register user
export const registerUser = createAsyncThunk(
  "auth/register",
  async ({
    email,
    password,
    first_name,
    last_name,
    state,
    zip_code,
    city,
    phone,
    ss_number,
    dob,
  }) => {
    try {
      const { data } = await api.post("/auth/register", {
        email,
        password,
        first_name,
        last_name,
        state,
        zip_code,
        city,
        phone,
        ss_number,
        dob,
      });
      return data;
    } catch (error) {
      //console.log(error);
      // throw error
      throw error;
    }
  }
);

// login
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    try {
      const { data } = await api.post("/auth/login", { email, password });
      return data;
    } catch (error) {
      throw error;
    }
  }
);

/* const registerUser1 = createAsyncThunk(
  "auth/register",
  async () => await api.post("/url").then((a) => a.data)
);
 */
