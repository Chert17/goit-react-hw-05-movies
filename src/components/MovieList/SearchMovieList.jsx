import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMoviesByQuery } from '../../service/movieApi';

import { MoviesList, MoviesItem } from './MovieList.styled';

export function SearchMoviesList({ query }) {
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    async function fetchData(query) {
      if (!query) {
        setMovies([]);
        return;
      }

      const data = await fetchMoviesByQuery(query);
      setMovies(data);
    }

    fetchData(query);
  }, [movies.length, query]);

  if (!movies.length) return;

  return (
    <>
      <MoviesList>
        {movies.map(({ id, title }) => (
          <span key={id}>
            <MoviesItem state={{ from: location }} to={`/movies/${id}`}>
              {title}
            </MoviesItem>
          </span>
        ))}
      </MoviesList>
    </>
  );
}
