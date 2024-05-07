import React from "react";
import { useSelector } from "react-redux";
import NewsItems from "./NewsItems";

const News = () => {
  const searchResult = useSelector((state) => state.blogNews.news);

  return (
    <div>
      <h2>All news:</h2>

      <NewsItems articles={searchResult} />
    </div>
  );
};

export default News;
