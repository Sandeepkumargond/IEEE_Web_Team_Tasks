import Header from '../components/layout/Header';
import Navbar from '../components/layout/Navbar';
import NewsGrid from '../components/news/NewsGrid';
import Footer from '../components/layout/Footer';

const Home = ({ category, setCategory, theme, setTheme }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar category={category} setCategory={setCategory} theme={theme} setTheme={setTheme} />
      <NewsGrid category={category} />
      <Footer />
    </div>
  );
};

export default Home;