import { useState, useEffect } from 'react';
import { getMovies } from 'service/movieApi';

import { MoviesList, MoviesItem } from './Home.styled';

export function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getMovies();

      setMovies(data);
    }

    fetchData();
  }, []);

  if (!movies.length) return;

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
