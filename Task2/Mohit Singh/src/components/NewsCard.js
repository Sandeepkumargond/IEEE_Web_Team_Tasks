const NewsCard = ({ article }) => (
  <div className="bg-white shadow p-4 rounded-lg">
    {article.urlToImage && (
      <img
        src={article.urlToImage}
        alt={article.title}
        className="w-full h-48 object-cover rounded"
      />
    )}
    <h2 className="font-bold text-lg my-2">{article.title}</h2>
    <p>{article.description}</p>
    <a
      href={article.url}
      target="_blank"
      rel="noreferrer"
      className="text-blue-500 underline"
    >
      Read More
    </a>
  </div>
);

export default NewsCard;
