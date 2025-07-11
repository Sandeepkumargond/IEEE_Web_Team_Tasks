import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import NewsCard from "./NewsCard";
import Loader from '../ui/Loader'
import { ArrowLeft } from "lucide-react";

function NewsList() {
  const url = "https://newsapi.org/v2/everything";
  const [article, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [field, setField] = useState('science')

  const categories = ["technology", "business", "general", "entertainment", "health", "science", "sports", "climate change"]

  // api call

  const fetchNews = async(category) => {
    setField(category)
    setIsLoading(true)
    try{
        const response = await axios.get(url,
            {
                params: {
                    q : category,
                    apiKey: import.meta.env.VITE_NEWS_API
                }
            })
        
        setArticles(response.data.articles)
        setIsLoading(false);

    }
    catch(error){
        toast.error(error.response?.message)
        setIsLoading(false)
    }
  }


  // deafult call on loading
  useEffect(() => {
    fetchNews('science');
  },[])

  return (
    <>
    {isLoading ? 
        <Loader/> :
    <section className='w-full flex flex-col gap-[5rem] py-5'>

        {/* buttons for categories */}
        
        <div>

        <h1 className='text-center text-2xl font-semibold text-blue-950'>Categories</h1>
        <div className='grid grid-cols-2 font-semibold  gap-x-5 gap-y-2 w-[80%] mx-auto py-4 md:grid-cols-4 lg:grid-cols-8 lg:gap-5'>

        { categories.map((category) => (
          <button
          key={category}
          onClick={() => fetchNews(category)}
          className={`px-2 py-1 rounded-xl border bg-blue-100 font-semibold cursor-pointer transition
            ${
              category === field
                ? "bg-blue-800 text-white ring-2 ring-blue-800 hover:shadow-2xl"
                : "hover:bg-blue-300"
            }`}
        >
          {category}
        </button>
        ))}
        </div>
        </div>


        {/* news list component */} 
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-[80%] mx-auto'>
        {article.map((article, index) => (
          <NewsCard article={article} key={index} />
        ))}
      </div>

    </section>
    }
    </>
  );
}

export default NewsList;