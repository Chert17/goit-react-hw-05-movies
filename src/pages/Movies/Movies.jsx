import { useState } from 'react';
import { SearchMoviesList } from 'components/SearchMoviesList/SearchMoviesList';

export function Movies() {
  const [query, setQuery] = useState('');

  function filterMovies(e) {
    setQuery(e.target.value.toLowerCase().trim());
  }

  function onSubmit(e) {
    e.preventDefault();
    setQuery('');
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <label>
          <input
            onChange={filterMovies}
            value={query}
            type="text"
            placeholder="Search movies"
            autoFocus={true}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <SearchMoviesList query={query} />
    </>
  );
}
