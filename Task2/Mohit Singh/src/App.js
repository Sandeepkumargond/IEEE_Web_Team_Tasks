import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import NewsCard from "./components/NewsCard";
import Footer from "./components/Footer";

function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("general");

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=e4a0573d8ebb46d78d84d09d704ab221`
      );
      const data = await res.json();
      setArticles(data.articles);
    };
    fetchNews();
  }, [category]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header setCategory={setCategory} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {articles.map((article, idx) => (
          <NewsCard key={idx} article={article} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
