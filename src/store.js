import { configureStore } from "@reduxjs/toolkit";
import BlogReducer from "./redux/NewsSlice";

export const store = configureStore({
  reducer: {
    blogNews: BlogReducer,
  },
});
