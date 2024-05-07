import { setBlogNews } from "../redux/NewsSlice";
import { searchPosts } from "../API/NewsApi";

export const fetchSearchResults = (query) => async (dispatch) => {
  try {
    const result = await searchPosts(query);
    dispatch(setBlogNews(result));
  } catch (error) {
    console.log("Error fetching search results in searchThunk");
  }
};
