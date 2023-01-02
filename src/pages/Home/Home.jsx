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

  return (
    <>
      <main>
        <MoviesList>
          {movies.map(item => (
            <MoviesItem key={item.id}>{item.title}</MoviesItem>
          ))}
        </MoviesList>
      </main>
    </>
  );
}
