import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import AllMoviesPage from '../pages/AllMoviesPage';
import AddMoviePage from '../pages/AddMoviePage';
import MovieDetailsPage from '../pages/MovieDetailsPage';
import FavoritesPage from '../pages/FavoritesPage';
import UpdateMoviePage from '../pages/UpdateMoviePage';
import NotFoundPage from '../pages/NotFoundPage';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/all-movies" element={<AllMoviesPage />} />
      <Route path="/movies/:id" element={<MovieDetailsPage />} />
      <Route path="/add-movie" element={<AddMoviePage />} />
      <Route path="/update-movie/:id" element={<UpdateMoviePage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
