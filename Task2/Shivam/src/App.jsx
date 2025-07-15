import React, { useState } from 'react';
import NewsCard from './Components/NewsCard';
import Footer from './Components/footer'; 
import Header from './Components/Header';

const App = () => {
  const [category, setCategory] = useState("general");

  return (
    <div>
      <Header setCategory={setCategory} />
      <NewsCard category={category} />
      <Footer />  
    </div>
  );
};

export default App;
