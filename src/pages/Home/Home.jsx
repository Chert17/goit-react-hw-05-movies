import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getMovies } from 'service/movieApi';

import { MoviesList, MoviesItem } from './Home.styled';

export function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

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
