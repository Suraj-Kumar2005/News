import { categories } from "../constants/categories";

const Navbar = ({category, setCategory, searchQuery, setSearchQuery}) => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top glass-navbar">
      <div className="container">

        {/* Brand */}
        <a className="navbar-brand fw-bold fs-4 brand-mark" href="#">
          <span className="brand-prefix">🇺🇸US</span>
          <span className="badge brand-badge fs-5">News</span>
        </a>

        {/* Toggle */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <form className="search-form" role="search" onSubmit={(event) => event.preventDefault()}>
            <input
              className="form-control search-input"
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
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              </li>
            ))}
 
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
