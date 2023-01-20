import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const submitUploadFiles = createAsyncThunk(
  "Docs/upload",
  async ({
    email,
    photo_ID,
    proof_of_address,
    user_agreement_freeze,
    consumer_office_freeze,
    lexis_nexis_freeze,
    positive_account,
  }) => {
    try {
      const { data } = await api.post("/docs", {
        email,
        photo_ID,
        proof_of_address,
        user_agreement_freeze,
        consumer_office_freeze,
        lexis_nexis_freeze,
        positive_account,
      });
      return data;
    } catch (error) {
      throw error;
    }
  }
);
