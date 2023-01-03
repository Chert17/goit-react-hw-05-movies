import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchMoviesDetails } from 'service/movieApi';

import { NavItem } from 'components/AppBar/AppBar.styled';

export function MovieDetails() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData(id) {
      const data = await fetchMoviesDetails(id);

      setMovie(data);
    }

    fetchData(movieId);
  }, [movieId]);

  if (!movie) return;

  const { poster_path, title, vote_average, overview } = movie;

  return (
    <>
      <img src={poster_path} alt={title} />
      <h2>{title}</h2>
      <p>{vote_average}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h4>Genres</h4>
      <hr />
      <ul>
        <li>
          <NavItem to={'credits'}>Credits</NavItem>
        </li>
        <li>
          <NavItem to={'reviews'}>Reviews</NavItem>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
