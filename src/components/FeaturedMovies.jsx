import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const FeaturedMovies = () => {
    const [allMovies, setAllMovies] = useState([]);
    const [featuredMovies, setFeaturedMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch('https://movie-portal-server-orcin.vercel.app/movies');
                const data = await response.json();
                setAllMovies(data);
            } catch (error) {
                console.error('Failed to fetch all movies:', error);
            }
        };

        fetchMovies();
    }, []);

    useEffect(() => {

        if (allMovies.length > 0) {
            const topRatedMovies = [...allMovies]
                .sort((a, b) => b.rating - a.rating)
                .slice(0, 6);
            setFeaturedMovies(topRatedMovies);
        }
    }, [allMovies]);

    return (
        <section className="featured-movies mt-12">
            <h2 className="text-center text-3xl font-bold mb-8">Featured Movies</h2>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-items-center'>
                {featuredMovies.map((movie) => (

                    <div key={movie._id} className="relative w-96 h-[400px] bg-gray-800 rounded-lg overflow-hidden shadow-lg group">
                        <img
                            src={movie.poster}
                            alt={movie.title}
                            className="w-full h-full object-cover group-hover:opacity-50 transition-opacity duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-2xl text-center font-semibold text-white mb-4">{movie.title}</h3>
                            {movie.genres.map((genre, idx) => (
                                <p key={idx} className="text-white mb-2">{genre}</p>
                            ))}
                            <p className="text-white mb-2">Duration: {movie.duration} min</p>
                            <p className="text-white mb-4">Release Year: {movie.releaseYear}</p>

                            <div className="rating mb-4">
                                {[...Array(5)].map((_, index) => (
                                    <input
                                        key={index}
                                        type="radio"
                                        name={`rating-${movie._id}`}
                                        className={`mask mask-star-2 ${index < movie.rating ? 'bg-yellow-400' : 'bg-gray-300'}`}
                                        disabled
                                        checked={index < movie.rating}
                                    />
                                ))}
                            </div>

                            <Link
                                to={`/movie-details/${movie._id}`}
                                className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors duration-200"
                            >
                                See Details
                            </Link>
                        </div>
                    </div>

                ))}
            </div>


            <div className="mt-8 text-center">
                <button
                    className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition-colors duration-200"
                    onClick={() => navigate('/all-movies')}
                >
                    See All Movies
                </button>
            </div>
        </section>
    );
};

export default FeaturedMovies;
