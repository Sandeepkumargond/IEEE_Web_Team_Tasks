import { useState, useEffect } from 'react';

export const useNewsApi = (category) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const apiKey = import.meta.env.VITE_NEWS_API_KEY;
        const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.status === 'ok') {
          setArticles(data.articles);
        } else {
          setError('Failed to fetch news');
        }
      } catch (err) {
        console.error('Error fetching news:', err);
        setError('An error occurred while fetching news');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  return { articles, loading, error };
};