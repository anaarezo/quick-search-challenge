import { createSlice } from "@reduxjs/toolkit";
import { libraryInitialState } from "./initialState";

export const librarySlice = createSlice({
  name: "user",
  initialState: libraryInitialState,
  reducers: {},
});
