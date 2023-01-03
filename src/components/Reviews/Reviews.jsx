import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from 'service/movieApi';

export function Reviews() {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData(id) {
      const data = await fetchMoviesReviews(id);

      setReviews(data);
    }

    fetchData(movieId);
  }, [movieId]);

  if (!reviews.length) return <p>Not found</p>;

  return (
    <>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>{author}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
