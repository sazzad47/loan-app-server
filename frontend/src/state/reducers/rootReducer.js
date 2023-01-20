import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/authSlice";
import docReducer from "../features/docs/docSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  docs: docReducer,
});

export default rootReducer;
