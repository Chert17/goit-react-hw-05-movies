import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Layout = lazy(() =>
  import('../components/Layout/Layout').then(module => ({
    default: module.Layout,
  }))
);

const HomePage = lazy(() =>
  import('../pages/HomePage/HomePage').then(module => ({
    default: module.HomePage,
  }))
);

const MoviesPage = lazy(() =>
  import('../pages/MoviesPage/MoviesPage').then(module => ({
    default: module.MoviesPage,
  }))
);

const MovieDetails = lazy(() =>
  import('../pages/MovieDetails/MovieDetails').then(module => ({
    default: module.MovieDetails,
  }))
);

const Cast = lazy(() =>
  import('../components/Cast/Cast').then(module => ({ default: module.Cast }))
);

const Reviews = lazy(() =>
  import('../components/Reviews/Reviews').then(module => ({
    default: module.Reviews,
  }))
);

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to={'home'} />} />
          <Route path="home" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="credits" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
