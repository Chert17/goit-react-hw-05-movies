import { useState, useEffect } from 'react';
import { fetchMoviesByQuery } from 'service/movieApi';

import { MoviesList, MoviesItem } from '../../pages/Home/Home.styled';

export function SearchMoviesList({ query }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData(query) {
      if (!query) return;

      const data = await fetchMoviesByQuery(query);

      setMovies(data);
    }

    fetchData(query);
  }, [movies.length, query]);

  if (!movies.length) return <p>Not found</p>;

  return (
    <>
      <MoviesList>
        {movies.map(({ id, title }) => (
          <MoviesItem to={`/movies/${id}`} key={id}>
            {title}
          </MoviesItem>
        ))}
      </MoviesList>
    </>
  );
}
