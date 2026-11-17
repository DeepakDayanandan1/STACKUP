function Header({ searchQuery, onSearchChange, watchlistCount, onWatchlistClick }) {
  return (
    <header className="site-header">
      <a className="brand" href="#" aria-label="Frame home">
        <span className="brand-mark" aria-hidden="true">F</span>
        <span>FRAME<span className="brand-period">.</span></span>
      </a>
      <label className="search-box">
        <span className="search-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <circle cx="10.8" cy="10.8" r="6.8" />
            <path d="m16 16 4.2 4.2" />
          </svg>
        </span>
        <input
          type="search"
          placeholder="Search your next favorite..."
          value={searchQuery}
          onChange={(event) => onSearchChange(event.target.value)}
          aria-label="Search movies by title"
        />
        <kbd>⌘ K</kbd>
      </label>
      <button className="header-watchlist" type="button" onClick={onWatchlistClick}>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 4.75h12a1 1 0 0 1 1 1v14l-7-4-7 4v-14a1 1 0 0 1 1-1Z" />
        </svg>
        <span>My Watchlist</span>
        <span className="watchlist-count">{watchlistCount}</span>
      </button>
    </header>
  )
}

export default Header
