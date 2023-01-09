import { SearchMoviesList } from 'components/MovieList/SearchMovieList';
import { useSearchParams } from 'react-router-dom';

import { Input } from '@mui/material';
import { Label, Form } from './MoviesPage.styled';

export function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  function filterMovies(e) {
    const value = e.target.value.toLowerCase().trim();
    setSearchParams(value !== '' ? { query: value } : {});
  }

  return (
    <>
      <Form>
        <Label>
          <Input
            onChange={filterMovies}
            value={query}
            type="text"
            placeholder="Search movies"
            autoFocus={true}
          />
        </Label>
      </Form>
      <SearchMoviesList query={query} />
    </>
  );
}
