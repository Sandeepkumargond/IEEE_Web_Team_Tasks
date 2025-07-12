import React from "react";

const NewsCard = ({ article }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-4 flex flex-col">
      <img src={article.urlToImage} alt="News" className="rounded-md mb-3" />
      <h2 className="text-lg font-semibold text-black">{article.title}</h2>
      <p className="text-sm text-gray-600 mt-2 flex-grow">{article.description}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 mt-4 hover:underline font-medium"
      >
        Read More
      </a>
    </div>
  );
};

export default NewsCard;
