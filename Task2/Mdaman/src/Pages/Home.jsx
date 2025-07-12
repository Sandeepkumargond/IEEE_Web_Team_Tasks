import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import NewsList from "../Components/Newslist";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("general");

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
      );
      const data = await res.json();
      setArticles(data.articles);
    };
    fetchNews();
  }, [category]);

  return (
        <div className="w-fit">
      <Header  onSelectCategory={setCategory} selectedCategory={category} />
      <NewsList articles={articles} />
      <footer className="text-center text-gray-500 p-4">NewsNow by Md Aman</footer>
    </div>
   
  );
};

export default Home;
