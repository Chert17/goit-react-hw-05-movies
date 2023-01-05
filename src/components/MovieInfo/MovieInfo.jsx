import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchMoviesDetails } from '../../service/movieApi';

import { NavItem } from '../AppBar/AppBar.styled';

export function MovieInfo() {
  const { movieId } = useParams();
  const location = useLocation();
  const href = location.state?.from || '/movies';

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData(id) {
      const data = await fetchMoviesDetails(id);

      setMovie(data);
    }

    fetchData(movieId);
  }, [movieId]);

  if (!movie) return;

  const { poster_path, title, vote_average, overview, genres } = movie;

  return (
    <>
      <Link to={href}>Go back</Link>
      <img src={`https://image.tmdb.org/t/p/w92${poster_path}`} alt={title} />
      <h2>{title}</h2>
      <p>{vote_average}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h4>Genres</h4>
      <ul>
        {genres.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
      <hr />
      <ul>
        <li>
          <NavItem to={'credits'}>Cast</NavItem>
        </li>
        <li>
          <NavItem to={'reviews'}>Reviews</NavItem>
        </li>
      </ul>
    </>
  );
}
