const NewsCard = ({ article }) => {
  const author = article.author ? article.author : "Unknown";
  const date = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "Unknown date";

  return (
    <div className="glass-card max-w-sm mx-auto rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6 bg-white dark:bg-gray-900 flex flex-col">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 line-clamp-2">
          {article.title}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">
          {article.description}
        </p>

        {/* Author and Date Row */}
        <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
          <span className="italic">By {author}</span>
          <span>{date}</span>
        </div>

        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="gradient-btn inline-block self-start"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
