import { SearchMoviesList } from 'components/MovieList/SearchMovieList';
import { useSearchParams } from 'react-router-dom';

export function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  function filterMovies(e) {
    const value = e.target.value.toLowerCase().trim();
    setSearchParams(value !== '' ? { query: value } : {});
  }

  return (
    <>
      <form>
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
