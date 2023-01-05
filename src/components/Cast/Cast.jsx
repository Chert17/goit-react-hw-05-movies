import { useState, useEffect } from 'react';
import { fetchMoviesCredits } from '../../service/movieApi';
import { useParams } from 'react-router-dom';

export function Cast() {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData(id) {
      const data = await fetchMoviesCredits(id);

      setCast(data);
    }

    fetchData(movieId);
  }, [movieId]);

  if (!cast.length) return;

  return (
    <>
      <ul>
        {cast.map(({ name, profile_path, character, id }) => (
          <li key={id}>
            <div>
              {profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w92${profile_path}`}
                  alt={name}
                />
              )}
            </div>
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
