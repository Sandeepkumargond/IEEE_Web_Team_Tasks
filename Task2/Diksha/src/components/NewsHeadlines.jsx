import React, { useEffect, useState } from "react";
import axios from "axios";
import { Star} from 'lucide-react'
import { motion } from "framer-motion";

function NewsHeadlines() {
  const [headlines, setHeadlines] = useState([]);
  const url = "https://newsapi.org/v2/top-headlines";

  useEffect(() => {
    async function fetchHeadlines() {
      try {
        const res = await axios.get(url, {
          params: {
            category: "technology",
            apiKey: import.meta.env.VITE_NEWS_API,
          },
        });
        setHeadlines(res.data.articles);
      }
       catch (err) {
      }
    }
    fetchHeadlines();
  }, []);

  if (headlines.length === 0) return null;

  return (
    <div className="overflow-hidden whitespace-nowrap py-1 w-[90%] mx-auto">
      <motion.div
        className="inline-flex"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 75, ease: "linear", repeat: Infinity }}
      >
        {headlines.map((headline, index) => (
        <div 
        key={index || headline.url} 
        className='flex items-center'>
          <span 
          className="mx-8 text-gray-300 text-[16px] font-semibold">
            {headline.title}
          </span>

          <span><Star fill='yellow' strokeWidth={0} size={18} /></span>
        </div>
        ))}
      </motion.div>
    </div>
  );
}

export default NewsHeadlines