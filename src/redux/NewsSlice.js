import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  queryParams: "",
  news: [],
};

export const newsSlice = createSlice({
  name: "blogNews",
  initialState,
  reducers: {
    updateQueryParams: (state, action) => {
      state.queryParams = action.payload;
      state.news = [];
    },
    setBlogNews: (state, action) => {
      state.news = action.payload?.articles;
    },
  },
});

export const { updateQueryParams, setBlogNews } = newsSlice.actions;

export default newsSlice.reducer;
