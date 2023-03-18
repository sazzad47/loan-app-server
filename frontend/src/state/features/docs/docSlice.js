import { createSlice } from "@reduxjs/toolkit";
import { submitUploadFiles } from "./docActions";

const initialState = {
  email: "",
  photo_ID: {},
  proof_of_address: {},
  user_agreement_freeze: false,
  consumer_office_freeze: false,
  lexis_nexis_freeze: false,
  positive_account: false,
  boomplay: false,
  kikoff: false,
  self: false,
  creditstrong: false,
  experian: false,
  credit: false,
  innovice: false,
  clarityservices: false,
  chexsystems: false,
  sagestreamilc: false,
  smartcredit: false,
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
      state.boomplay = action.payload.boomplay;
      state.kikoff = action.payload.kikoff;
      state.self = action.payload.self;
      state.creditstrong = action.payload.creditstrong;
      state.experian = action.payload.experian;
      state.credit = action.payload.credit;
      state.innovice = action.payload.innovice;
      state.clarityservices = action.payload.clarityservices;
      state.sagestreamilc = action.payload.sagestreamilc;
      state.smartcredit = action.payload.smartcredit;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(submitUploadFiles.pending, (state) => {
      state.uploadLoading = true;
    });
    builder.addCase(submitUploadFiles.fulfilled, (state, action) => {
      state.uploadLoading = false;
      state.uploadSuccess = true;
      state.uploadMsg = action.payload?.message;
      state.email = action.payload?.newDocs.email;
      state.photo_ID = action.payload?.newDocs.photo_ID;
      state.proof_of_address = action.payload?.newDocs.proof_of_address;
      state.user_agreement_freeze =
        action.payload?.newDocs.user_agreement_freeze;
      state.consumer_office_freeze =
        action.payload?.newDocs.consumer_office_freeze;
      state.lexis_nexis_freeze = action.payload?.newDocs.lexis_nexis_freeze;
      state.positive_account = action.payload?.newDocs.positive_account;
    });
    builder.addCase(submitUploadFiles.rejected, (state, action) => {
      state.uploadError = true;
      state.uploadMsg = "Something went wrong!";
    });
  },
});

export const { docStateUpdate } = docSlice.actions;

export default docSlice.reducer;
