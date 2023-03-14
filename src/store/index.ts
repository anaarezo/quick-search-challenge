import { combineReducers, configureStore, PreloadedState } from "@reduxjs/toolkit";
import libraryApi from "./library/apiSlice";
import { librarySlice } from "./library/slice";

const rootReducer = combineReducers({
  library: librarySlice.reducer,
  [libraryApi.reducerPath]: libraryApi.reducer,
})

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(libraryApi.middleware),
    preloadedState,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>

