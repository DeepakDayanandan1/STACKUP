# Frame — Movie Cards Application

A React movie collection app for browsing movie cards and managing a personal watchlist. Movie posters and the hero image are loaded from TMDB's image CDN.

## Features

- Browse five movies with posters, genres, release years, and ratings.
- Search the collection by movie title.
- Add movies to or remove movies from your watchlist.
- View the watchlist count and filter the page to watchlist movies.
- Get a confirmation message after adding or removing a movie.
- Responsive layout for desktop and mobile screens.

Watchlist data is stored in React state and resets when the page is refreshed. Movie images are loaded remotely, so an internet connection is needed to display them. The app uses TMDB image URLs directly and does not require a TMDB API key.

## Requirements

- Node.js compatible with Vite 8
- npm

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed by Vite in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check the project with ESLint |

## Project structure

```text
public/
src/
├── components/
│   ├── Footer.jsx
│   └── Header.jsx
├── assets/
├── App.jsx
├── App.css
├── index.css
└── main.jsx
index.html
package.json
```

- `main.jsx` mounts the React application.
- `App.jsx` contains the movie data, `MovieCard` component, watchlist state, and collection UI. It composes the header and footer components.
- `components/Header.jsx` contains the search field and watchlist count.
- `components/Footer.jsx` contains the page footer.
- `App.css` and `index.css` contain the application and global styles.
