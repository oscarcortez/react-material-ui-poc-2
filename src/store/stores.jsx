import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./tokenSlice";

export const stores = configureStore({
  reducer: {
    token: tokenReducer,
  },
});

