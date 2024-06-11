import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const NewsItems = ({ articles }) => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {articles.map((result) => (
          <div
            className="rounded overflow-hidden shadow-lg flex flex-col"
            key={result.title}
          >
            <a href="#"></a>
            {result.urlToImage && (
              <div className="relative">
                <LazyLoadImage
                  className="w-full"
                  src={result.urlToImage}
                  alt={result.title}
                  effect="blur"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </div>
            )}

            <div className="px-6 py-4 mb-auto">
              <a
                href={result.url}
                target="_blank"
                className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
              >
                {result.title}
              </a>
              <p className="text-gray-500 text-sm">{result.description}</p>
            </div>
          </div>

          // <p key={result.id}>{result.title}</p>
        ))}
      </div>
    </div>
  );
};

export default NewsItems;
