import { createSlice } from "@reduxjs/toolkit";
import { libraryInitialState } from "./initialState";

export const librarySlice = createSlice({
  name: "library",
  initialState: libraryInitialState,
  reducers: {},
});

export default librarySlice.reducer