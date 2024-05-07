import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchResults } from "../Thunks/SearchThunks";
import { updateQueryParams } from "../redux/NewsSlice";

const SearchBarInput = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.blogNews.queryParams);

  const handleChangeSearchFrom = (e) => {
    e.preventDefault();
    dispatch(updateQueryParams(e.target.value));
  };

  const handleSubmitFormClick = (e) => {
    e.preventDefault();
    dispatch(fetchSearchResults(query));
  };

  return (
    <form onSubmit={handleSubmitFormClick}>
      <input
        type="text"
        value={query}
        onChange={handleChangeSearchFrom}
        placeholder="Search..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBarInput;
