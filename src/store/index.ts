import { configureStore } from "@reduxjs/toolkit";
import libraryApi from "./library/apiSlice";
import { librarySlice } from "./library/slice";

export const store = configureStore({
  reducer: {
    library: librarySlice.reducer,
    [libraryApi.reducerPath]: libraryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(libraryApi.middleware),
});
