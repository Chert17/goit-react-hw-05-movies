import { useState, useEffect } from 'react';
import { fetchMoviesCredits } from 'service/movieApi';
import { useParams } from 'react-router-dom';

export function Credits() {
  const [credits, setCredits] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData(id) {
      const data = await fetchMoviesCredits(id);

      setCredits(data);
    }

    fetchData(movieId);
  }, [movieId]);

  if (!credits.length) return;

  return (
    <>
      <ul>
        {credits.map(({ name, profile_path, character, id }) => (
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
