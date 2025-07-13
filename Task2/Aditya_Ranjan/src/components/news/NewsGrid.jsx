import { useNewsApi } from '../../hooks/useNewsApi';
import NewsCard from './NewsCard';

const NewsGrid = ({ category }) => {
  const { articles, loading, error } = useNewsApi(category);

  if (loading) return <div className="text-center p-6 text-lg text-gray-600 dark:text-gray-400">Loading...</div>;
  if (error) return <div className="text-center p-6 text-lg text-red-600 dark:text-red-400">{error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsGrid;
