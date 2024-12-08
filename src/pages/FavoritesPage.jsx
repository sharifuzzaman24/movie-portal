import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const FavoritesPage = () => {
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);

    const userEmail = user?.email;

    useEffect(() => {
        if (userEmail) {
            fetch(`https://movie-portal-server-orcin.vercel.app/favorites?email=${userEmail}`)
                .then((res) => res.json())
                .then((data) => {
                    setFavorites(data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error fetching favorites:', error);
                    setLoading(false);
                });
        }
    }, [userEmail]);

    const handleDeleteFavorite = (id) => {
        fetch(`https://movie-portal-server-orcin.vercel.app/favorites/${id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then(() => {
                setFavorites((prevFavorites) =>
                    prevFavorites.filter((movie) => movie._id !== id)
                );
            })
            .catch((error) => console.error('Error deleting favorite:', error));
    };


    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className="w-11/12 mx-auto min-h-screen">
                <section className="container pt-20 mx-auto px-4 py-6">
                    <h2 className="text-3xl font-bold mb-8 mt-12 text-center">Your Favorite Movies</h2>
                    {
                        loading ? <div className="text-center">
                            <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
                            <h1 className="mt-4 text-gray-900 dark:text-white text-xl font-semibold">Loading...</h1>
                        </div> : <div>
                            {favorites.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {favorites.map((movie) => (
                                        <div
                                            key={movie._id}
                                            className="bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                                        >
                                            <div className="flex">
                                                <img
                                                    src={movie.poster}
                                                    alt={movie.title}
                                                    className="w-2/5 h-62 object-cover"
                                                />
                                                <div className="p-4 w-3/5">
                                                    <h3 className="mb-2 text-xl font-semibold">{movie.title}</h3>
                                                    <p className="text-sm mb-1 text-gray-600 dark:text-gray-400">
                                                        Genre: {movie.genres.join(', ')}
                                                    </p>
                                                    <p className="text-sm mb-1 text-gray-600 dark:text-gray-400">
                                                        Duration: {movie.duration} min
                                                    </p>
                                                    <p className="text-sm mb-1 text-gray-600 dark:text-gray-400">
                                                        Release Year: {movie.releaseYear}
                                                    </p>
                                                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                        <span>Rating:</span>
                                                        <div className="rating">
                                                            {[...Array(5)].map((_, index) => (
                                                                <input
                                                                    key={index}
                                                                    type="radio"
                                                                    name={`rating-${movie._id}`}
                                                                    className={`mask mask-star-2 ${index < movie.rating
                                                                        ? 'bg-yellow-400'
                                                                        : 'bg-gray-300'
                                                                        }`}
                                                                    disabled
                                                                    checked={index < movie.rating}
                                                                />
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="mt-4 flex justify-between">
                                                        <button
                                                            onClick={() => handleDeleteFavorite(movie._id)}
                                                            className="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700"
                                                        >
                                                            Delete Favorite
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center mt-12">
                                    <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
                                        You don't have any favorite movies yet. Start exploring and add some!
                                    </p>
                                </div>
                            )
                            }
                        </div>
                    }
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default FavoritesPage;
