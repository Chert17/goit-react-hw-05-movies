import { Route, Routes } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';

export const App = () => {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
      </Routes>
    </>
  );
};
