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
      <div className="mb-2 mt-2">
        <label className="block uppercase text-gray-700 text-sm font-bold mb-2">
          Search:
        </label>
      </div>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        value={query}
        onChange={handleChangeSearchFrom}
        placeholder="Type for search lin 'BTC'"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBarInput;
