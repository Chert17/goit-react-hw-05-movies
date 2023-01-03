import { Navigate, Route, Routes } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Credits } from './Credits/Credits';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <>
      <AppBar />
      <Routes>
        <Route index element={<Navigate to={'/home'} />} />
        <Route path="/home" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="credits" element={<Credits />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
      </Routes>
    </>
  );
};
