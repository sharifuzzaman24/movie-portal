import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieCard from './MovieCard';


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


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-items-center'>
                {featuredMovies.map((movie) => <MovieCard movie={movie} key={movie._id}></MovieCard>)}
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
