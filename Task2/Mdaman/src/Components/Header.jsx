import React from "react";

const categories = ["general", "business", "technology", "sports"];

const Header = ({onSelectCategory,selectedCategory }) => {
  return (
    <header className="bg-blue-600 text-white p-4 px-10 flex justify-between items-center">
      <h1 className="text-4xl font-bold">NewsNow</h1>
      <nav className="flex gap-10 px-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`capitalize text-black bg-sky-50 rounded-lg text-xl p-1 font-medium shadow-amber-50 shadow-xs hover:scale-110 cursor-pointer hover:ease-in-out ${
              selectedCategory === cat ? "" : ""
            }`}
          >
            {cat} 
          </button>
        ))}
 
        {/* <button className="text-black bg-sky-50 rounded-lg text-xl p-1 font-medium shadow-amber-50 shadow-xs hover:scale-110 cursor-pointer hover:ease-in-out " onClick={() => onSelectCategory('general')} >General</button>
        <button className="text-black bg-sky-50 rounded-lg text-xl p-1 font-medium shadow-amber-50 shadow-xs hover:scale-110 cursor-pointer hover:ease-in-out " onClick={() => onSelectCategory('business')} >Business</button>
        <button className="text-black bg-sky-50 rounded-lg text-xl p-1 font-medium shadow-amber-50 shadow-xs hover:scale-110 cursor-pointer hover:ease-in-out " onClick={() => onSelectCategory('technology')} >Technology</button>
        <button  className="text-black bg-sky-50 rounded-lg text-xl p-1 font-medium shadow-amber-50 shadow-xs hover:scale-110 cursor-pointer hover:ease-in-out " onClick={() => onSelectCategory('sports')} >Sports</button> */}

      </nav>
    </header>
  );
};

export default Header;
