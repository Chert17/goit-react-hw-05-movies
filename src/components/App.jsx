import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
// import { Home } from 'pages/Home/Home';
// import { Movies } from 'pages/Movies/Movies';
// import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
// import { Credits } from './Credits/Credits';
// import { Reviews } from './Reviews/Reviews';
import { Suspense, lazy } from 'react';

const Home = lazy(() =>
  import('../pages/Home/Home').then(module => ({ default: module.Home }))
);

const Movies = lazy(() =>
  import('../pages/Movies/Movies').then(module => ({ default: module.Movies }))
);

const MovieDetails = lazy(() =>
  import('../pages/MovieDetails/MovieDetails').then(module => ({
    default: module.MovieDetails,
  }))
);

const Credits = lazy(() =>
  import('./Credits/Credits').then(module => ({ default: module.Credits }))
);

const Reviews = lazy(() =>
  import('./Reviews/Reviews').then(module => ({ default: module.Reviews }))
);

export const App = () => {
  return (
    <>
      <AppBar />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense>
              <Outlet />
            </Suspense>
          }
        >
          <Route index element={<Navigate to={'home'} />} />
          <Route path="home" element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="credits" element={<Credits />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};
