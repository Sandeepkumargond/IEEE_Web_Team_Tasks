import React from 'react';

const categories = ["general", "technology", "sports", "business"];

function Header({ selectedCategory, setSelectedCategory }) {
  return (
    <header className="bg-blue-900 text-white p-4 flex  flex-wrap gap-4 justify-around">
      <div className='flex gap-2.5'> <img src="Logo.png" alt="" className='h-10 rounded-3xl' />
        <h1 className="text-3xl font-bold text-blue-400">
  News<span className="text-red-500">Now</span>
</h1></div>
      <div className='flex gap-2.5'>
        {categories.map((cat) => (
        <button
          key={cat}
          className={`px-3 py-1 rounded ${selectedCategory === cat ? "bg-yellow-700" : "bg-blue-500"}`}
          onClick={() => setSelectedCategory(cat)}
        >
          {cat.toUpperCase()}
        </button>
      ))}
      </div>
    </header>
  );
}

export default Header;
