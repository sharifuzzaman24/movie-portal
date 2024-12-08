import React, { useContext } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthProvider';

const MovieDetailsPage = () => {
    const { user } = useContext(AuthContext);
    const movie = useLoaderData();
    const navigate = useNavigate();

    const handleAddFavorite = (movie) => {
        const { poster, title, genres, duration, releaseYear, summary, rating, _id } = movie;
        const userEmail = user.email;
        const favoriteMovie = {
            poster,
            title,
            genres,
            duration,
            releaseYear,
            summary,
            rating,
            _id,
            userEmail,
        };

        fetch('https://movie-portal-server-orcin.vercel.app/favorites', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(favoriteMovie),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message === 'Movie added to favorites') {
                    Swal.fire({
                        title: 'Success!',
                        text: 'The movie has been added to your favorites.',
                        icon: 'success',
                        confirmButtonText: 'Cool',
                    });
                } else if (data.message === 'Movie is already in your favorites') {
                    Swal.fire({
                        title: 'Oops!',
                        text: 'This movie is already in your favorites.',
                        icon: 'warning',
                        confirmButtonText: 'Got it',
                    });
                }
            });
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://movie-portal-server-orcin.vercel.app/movies/${id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'The movie has been deleted.',
                                icon: 'success',
                            });
                            navigate('/all-movies');
                        }
                    });
            }
        });
    };

    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className="w-11/12 mx-auto min-h-screen pt-20">
                <section className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
                    <img
                        src={movie.poster}
                        alt="Movie Poster"
                        className="w-full lg:w-1/3 rounded-lg shadow-lg object-cover"
                    />

                    <div className="flex-1 space-y-4">
                        <h1 className="text-4xl font-bold text-center lg:text-left">{movie.title}</h1>
                        <p className="text-gray-400 text-center lg:text-left">{movie.genres.join(', ')}</p>
                        <p className="text-gray-400">Duration: {movie.duration} minutes</p>
                        <p className="text-gray-400">Release Year: {movie.releaseYear}</p>
                        <p className="text-gray-400 flex items-center gap-2">
                            Rating:
                            <div className="flex">
                                {[...Array(5)].map((_, index) => (
                                    <div
                                        key={index}
                                        className={`mask mask-star-2 ${
                                            index < movie.rating ? 'bg-yellow-400' : 'bg-gray-300'
                                        }`}
                                    />
                                ))}
                            </div>
                        </p>
                        <p className="text-gray-400">Summary: {movie.summary}</p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button
                                onClick={() => handleAddFavorite(movie)}
                                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                            >
                                Add to Favorite
                            </button>
                            <button
                                onClick={() => handleDelete(movie._id)}
                                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                            >
                                Delete Movie
                            </button>
                            <Link
                                to={`/update-movie/${movie._id}`}
                                className="bg-blue-600 text-white text-center px-4 py-2 rounded hover:bg-blue-700"
                            >
                                Update Movie
                            </Link>
                        </div>
                    </div>
                </section>

                <div className="mt-12 text-center">
                    <Link
                        to="/all-movies"
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 inline-block"
                    >
                        See all Movies
                    </Link>
                </div>
            </main>
            <footer className="mt-12">
                <Footer />
            </footer>
        </>
    );
};

export default MovieDetailsPage;
