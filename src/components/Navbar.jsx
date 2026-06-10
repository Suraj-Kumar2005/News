import { categories } from "../constants/categories";

const Navbar = ({category, setCategory, searchQuery, setSearchQuery, theme, setTheme}) => {
  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <nav className="navbar navbar-expand-lg sticky-top glass-navbar">
      <div className="container nav-shell">
        <div className="nav-left">
          {/* Brand */}
          <a className="navbar-brand fw-bold fs-4 brand-mark" href="#">
            <span className="brand-prefix">NewsPulse🇺🇸</span>
            <span className="badge brand-badge fs-5">News</span>
          </a>

          <div className="collapse navbar-collapse nav-center" id="navbarNav">
            <form className="search-form" role="search" onSubmit={(event) => event.preventDefault()}>
              <input
                className="form-control search-input glass-control"
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search headlines"
                aria-label="Search headlines"
              />
            </form>

            <ul className="navbar-nav align-items-lg-center gap-lg-2 category-nav">
              {categories.map((item) => (
                <li className="nav-item" key={item}>
                  <button
                    className={`nav-link fw-semibold glass-nav-link ${category === item ? "is-active" : ""}`}
                    type="button"
                    aria-current={category === item ? "page" : undefined}
                    onClick={() => setCategory(item)}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="nav-right">
          {/* Toggle */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <button
            className="theme-toggle-button toggle-btn"
            type="button"
            aria-label={`Switch to ${nextTheme} mode`}
            title={`Switch to ${nextTheme} mode`}
            onClick={() => setTheme(nextTheme)}
          >
            <span aria-hidden="true">{theme === "dark" ? "☀️" : "🌙"}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
