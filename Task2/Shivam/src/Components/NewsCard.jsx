import { useEffect, useState } from "react";
import NewsItem from "./NewsList";

const NewsCard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    setLoading(true);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const filteredArticles = (data.articles || []).filter(
          (article) => article.title && article.title.trim() !== ""
        );
        setArticles(filteredArticles);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetching error:", error);
        setLoading(false);
      });
  }, [category]); // ✅ updated

  if (loading) return <p className="text-center">Loading news...</p>;

  return (
    <div>
      <h2 className="text-center my-3">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div className="d-flex flex-wrap justify-content-center">
        {articles.map((news) => (
          <NewsItem
            key={news.url}
            title={news.title}
            description={news.description}
            src={news.urlToImage || "https://via.placeholder.com/150"}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsCard;
