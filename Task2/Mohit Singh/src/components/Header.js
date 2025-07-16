const Header = ({ setCategory }) => (
  <div className="flex justify-center gap-4 p-4 bg-blue-600 text-white">
    {["general", "technology", "sports", "business"].map((cat) => (
      <button
        key={cat}
        onClick={() => setCategory(cat)}
        className="capitalize hover:underline"
      >
        {cat}
      </button>
    ))}
  </div>
);

export default Header;
