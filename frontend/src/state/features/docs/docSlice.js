import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  photo_ID: "",
  proof_of_address: "",
  user_agreement_freeze: false,
  consumer_office_freeze: false,
  lexis_nexis_freeze: false,
  positive_account: false,
  uploadSuccess: false,
  uploadError: false,
  uploadLoading: false,
  uploadMsg: "",
};

const docSlice = createSlice({
  name: "Docs",
  initialState,
  reducers: {
    docStateUpdate: (state, action) => {
      state.email = action.payload.email;
      state.photo_ID = action.payload.photo_ID;
      state.proof_of_address = action.payload.proof_of_address;
      state.user_agreement_freeze = action.payload.user_agreement_freeze;
      state.consumer_office_freeze = action.payload.consumer_office_freeze;
      state.lexis_nexis_freeze = action.payload.lexis_nexis_freeze;
      state.positive_account = action.payload.positive_account;
      console.log(action.payload);
    },
  },
  extraReducers: (builder) => {},
});

export const { docStateUpdate } = docSlice.actions;

export default docSlice.reducer;
