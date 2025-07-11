import { ArrowRight, Globe } from "lucide-react";
import React, { useState } from "react";

function NewsCard({ article }) {
  const [enlargedContent, setEnlargedContent] = useState(false);

  return (
    <div className="flex flex-col h-full rounded-lg shadow-xl/30 transition-transform hover:scale-105 shadow-gray-500">
      {/* Image div */}
      <div className="aspect-[5/3] w-full overflow-hidden rounded-t-xl">
        
        {article.urlToImage ? 
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-full object-cover"
        /> :
        <p>No image available</p>
        }
        
      </div>

      {/* content div */}
      <div className="p-4 flex flex-col flex-1">
        <h2 className="font-semibold text-gray-900 text-2xl">{article.title}</h2>

       { enlargedContent ? 
        <p className="flex-1 text-gray-700 mt-2">
          {article.description}
        </p>
        :
        <p className="flex-1 text-gray-700 mt-2 line-clamp-4">
          {article.content}
        </p>
        }

        <div className="mt-4 flex flex-col gap-2">
          <button
            onClick={() => setEnlargedContent(!enlargedContent)}
            className="flex items-center text-blue-900 cursor-pointer font-semibold gap-1"
          >
            {enlargedContent ? "Read Less" : "Read More"} 
            <ArrowRight size={18} strokeWidth={3} />
          </button>

          {enlargedContent && (
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-900 font-semibold cursor-pointer"
            >
              Visit Website <Globe size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewsCard;