import React from "react";

const NewsItems = ({ articles }) => {
  return (
    <div>
      {articles.map((result) => (
        <p key={result.id}>{result.title}</p>
      ))}
    </div>
  );
};

export default NewsItems;
