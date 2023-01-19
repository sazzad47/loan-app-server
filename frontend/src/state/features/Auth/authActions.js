import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

// register user
export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ email, password }) => {
    console.log(email, password);
    try {
      const { data } = await api.post("/auth/register", { email, password });
      return data;
    } catch (error) {
      //console.log(error);
      // throw error
      throw error;
    }
  }
);

/* const registerUser1 = createAsyncThunk(
  "auth/register",
  async () => await api.post("/url").then((a) => a.data)
);
 */
