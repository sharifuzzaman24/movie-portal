// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Global CSS
import { ToastContainer } from 'react-toastify';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage'
import AllMoviesPage from './pages/AllMoviesPage';
import AddMoviePage from './pages/AddMoviePage';
import FavoritesPage from './pages/FavoritesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from './pages/RegisterPage';
import UpdateMoviePage from './pages/UpdateMoviePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/register",
    element: <RegisterPage></RegisterPage>,
  },
  {
    path: "/all-movies",
    element: <AllMoviesPage></AllMoviesPage>,
    loader: () => fetch('http://localhost:5000/movies')
  },
  {
    path: "/movie-details/:id",
    element: <MovieDetailsPage />,
    loader: ({ params }) => fetch(`http://localhost:5000/movies/${params.id}`),
  },
  {
    path: "/add-movie",
    element: <AddMoviePage></AddMoviePage>,
  },
  {
    path: "/update-movie/:id",
    element: <UpdateMoviePage></UpdateMoviePage>,
  },
  {
    path: "/favorites",
    element: <FavoritesPage></FavoritesPage>,
  },
  {
    path: "*",
    element: <NotFoundPage></NotFoundPage>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);
