// import { useState } from 'react';
import { SearchMoviesList } from 'components/SearchMoviesList/SearchMoviesList';
import { useSearchParams } from 'react-router-dom';

export function Movies() {
  // const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  function filterMovies(e) {
    // setQuery(e.target.value.toLowerCase().trim());
    setSearchParams({ query: e.target.value.toLowerCase().trim() });
  }

  function onSubmit(e) {
    e.preventDefault();
    // setQuery('');
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
      </form>
      <SearchMoviesList query={query} />
    </>
  );
}
