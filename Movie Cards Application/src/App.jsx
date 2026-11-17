import { useState } from 'react'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import './App.css'

const movies = [
  {
    id: 693134,
    title: 'Dune: Part Two',
    genre: 'Sci-Fi · Adventure',
    year: 2024,
    rating: '8.3',
    poster:
      'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
  },
  {
    id: 157336,
    title: 'Interstellar',
    genre: 'Sci-Fi · Drama',
    year: 2014,
    rating: '8.7',
    poster:
      'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
  },
  {
    id: 414906,
    title: 'The Batman',
    genre: 'Crime · Mystery',
    year: 2022,
    rating: '7.7',
    poster:
      'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg',
  },
  {
    id: 569094,
    title: 'Spider-Man: Across the Spider-Verse',
    genre: 'Animation · Action',
    year: 2023,
    rating: '8.4',
    poster:
      'https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
  },
  {
    id: 872585,
    title: 'Primetime',
    genre: 'Drama · Crime',
    year: 2025,
    rating: '8.1',
    poster:
      'https://www.themoviedb.org/t/p/w1280/tFwHCZW8LLvKuYjAoCivMFQAKmJ.jpg',
  },
  {
    id: 569095,
    title: 'Avengers: Doomsday',
    genre: 'Sci-Fi · Adventure',
    year: 2026,
    rating: '9.1',
    poster:
      'https://www.themoviedb.org/t/p/w1280/1zqWkLwC1zLBBBtIWzmkmWeMWnT.jpg',
  },
]

function MovieCard({ movie, isAdded, onToggle }) {
  return (
    <article className="movie-card">
      <div className="poster-wrap">
        <img className="movie-poster" src={movie.poster} alt={`${movie.title} poster`} />
        <span className="movie-rating" aria-label={`Rating ${movie.rating} out of 10`}>
          <span aria-hidden="true">★</span> {movie.rating}
        </span>
        <button
          className={`watchlist-button${isAdded ? ' is-added' : ''}`}
          type="button"
          onClick={() => onToggle(movie)}
          aria-pressed={isAdded}
        >
          <span aria-hidden="true">{isAdded ? '✓' : '+'}</span>
          {isAdded ? 'Added to Watchlist' : 'Add to Watchlist'}
        </button>
      </div>
      <div className="movie-details">
        <h3>{movie.title}</h3>
        <p>{movie.genre}</p>
        <span className="movie-year">{movie.year}</span>
      </div>
    </article>
  )
}

function App() {
  const [watchlist, setWatchlist] = useState([])
  const [activeView, setActiveView] = useState('collection')
  const [searchQuery, setSearchQuery] = useState('')
  const [confirmation, setConfirmation] = useState('')

  const visibleMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(searchQuery.trim().toLowerCase())
    const matchesView =
      activeView === 'collection' ||
      watchlist.some((watchlistMovie) => watchlistMovie.id === movie.id)

    return matchesSearch && matchesView
  })

  function toggleWatchlist(movie) {
    const isAdded = watchlist.some((watchlistMovie) => watchlistMovie.id === movie.id)

    if (isAdded) {
      setWatchlist((currentWatchlist) =>
        currentWatchlist.filter((watchlistMovie) => watchlistMovie.id !== movie.id),
      )
      setConfirmation(`${movie.title} removed from your watchlist.`)
      return
    }

    setWatchlist((currentWatchlist) => [...currentWatchlist, movie])
    setConfirmation(`${movie.title} added to your watchlist.`)
  }

  return (
    <main className="app-shell">
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        watchlistCount={watchlist.length}
        onWatchlistClick={() =>
          setActiveView(activeView === 'watchlist' ? 'collection' : 'watchlist')
        }
      />

      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow"><span className="eyebrow-dot" /> YOUR PERSONAL CINEMA</span>
          <h1>Stories worth<br />staying in for.</h1>
          <p>Find your next favorite. Keep every great story close.</p>
          <button
            className="hero-button"
            type="button"
            onClick={() => document.getElementById('movie-collection')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore collection <span aria-hidden="true">↓</span>
          </button>
        </div>
        <div className="hero-caption"><span /> NOW SHOWING: DUNE — PART TWO</div>
      </section>

      <section className="collection-section" id="movie-collection">
        <div className="section-heading">
          <div>
            <span className="section-kicker">CURATED FOR YOU</span>
            <h2>My Movie Collection</h2>
            <p className="collection-summary">
              {activeView === 'watchlist'
                ? 'Your hand-picked lineup, all in one place.'
                : 'A few favorites for your next movie night.'}
            </p>
          </div>
          <div className="collection-tools">
            <div className="view-switch" aria-label="Movie collection view">
              <button
                type="button"
                className={activeView === 'collection' ? 'active' : ''}
                onClick={() => setActiveView('collection')}
              >
                All movies
              </button>
              <button
                type="button"
                className={activeView === 'watchlist' ? 'active' : ''}
                onClick={() => setActiveView('watchlist')}
              >
                Watchlist <span>{watchlist.length}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="watchlist-banner">
          <span className="watchlist-banner-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M6 4.75h12a1 1 0 0 1 1 1v14l-7-4-7 4v-14a1 1 0 0 1 1-1Z" />
            </svg>
          </span>
          <div>
            <strong>My Watchlist: {watchlist.length} {watchlist.length === 1 ? 'Movie' : 'Movies'}</strong>
            <span>Save the films you want to watch next.</span>
          </div>
          <span className="watchlist-banner-arrow" aria-hidden="true">↗</span>
        </div>

        <div className="movie-grid" aria-live="polite">
          {visibleMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isAdded={watchlist.some((watchlistMovie) => watchlistMovie.id === movie.id)}
              onToggle={toggleWatchlist}
            />
          ))}
        </div>
        {visibleMovies.length === 0 && (
          <div className="empty-state">
            <span aria-hidden="true">✦</span>
            <h3>{activeView === 'watchlist' ? 'Your watchlist is waiting.' : 'No movies found.'}</h3>
            <p>
              {activeView === 'watchlist'
                ? 'Add a movie from your collection and it will show up here.'
                : 'Try a different title or clear your search.'}
            </p>
            {activeView === 'watchlist' && (
              <button type="button" onClick={() => setActiveView('collection')}>Browse collection</button>
            )}
          </div>
        )}
        <p className="confirmation" role="status" aria-live="polite">{confirmation}</p>
      </section>

      <Footer />
    </main>
  )
}

export default App
