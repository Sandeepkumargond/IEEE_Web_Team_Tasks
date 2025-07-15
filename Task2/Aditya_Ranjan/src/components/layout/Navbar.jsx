import ThemeToggle from "../common/ThemeToggle";

const categories = [
  "general",
  "technology",
  "sports",
  "politics",
  "business",
  "entertainment",
  "health",
  "science",
];

const Navbar = ({ category, setCategory, theme, setTheme }) => {
  return (
    <nav className="nav-bg p-4 sm:p-6">
      <div className="flex justify-between items-center gap-4 flex-wrap sm:flex-nowrap">
        <div className="flex overflow-x-auto gap-2 sm:gap-3 no-scrollbar pb-2 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`category-btn capitalize ${
                category === cat ? "active-category" : ""
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="w-full flex justify-center sm:w-auto sm:justify-end">
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
