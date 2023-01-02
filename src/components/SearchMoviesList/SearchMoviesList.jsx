import { useState, useEffect } from 'react';
import { fetchMoviesByQuery } from 'service/movieApi';

import { MoviesList, MoviesItem } from '../../pages/Home/Home.styled';

export function SearchMoviesList({ query }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData(query) {
      if (!query) return;

      const data = await fetchMoviesByQuery(query);
      console.log(data);

      setMovies(data);
    }

    fetchData(query);
  }, [query]);

  return (
    <>
      <MoviesList>
        {movies.map(item => (
          <MoviesItem key={item.id}>{item.title}</MoviesItem>
        ))}
      </MoviesList>
    </>
  );
}
