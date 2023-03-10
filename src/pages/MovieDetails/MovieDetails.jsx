import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export function MovieDetails() {
  return (
    <>
      <MovieInfo />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
