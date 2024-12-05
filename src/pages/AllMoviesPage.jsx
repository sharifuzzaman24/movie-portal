import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MovieCard from '../components/MovieCard';

const AllMoviesPage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/movies')
            .then(res => res.json())
            .then(data => setMovies(data))
            .catch(error => console.error('Error fetching movies:', error));
    }, []);
    
    console.log(movies)

    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto'>
                <section className="pt-20 container mx-auto px-4 min-h-screen">
                    <h1 className="text-3xl font-bold text-center mt-10 mb-8">All Movies</h1>


                    <div className="flex justify-center mb-8">
                        <input type="text" placeholder="Search movies by title..." className="p-3 w-full max-w-lg rounded-lg border dark:border-gray-700 dark:bg-gray-800" />
                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                        {
                            movies.map(movie => <MovieCard movie={movie} key={movie._id}></MovieCard>)
                        }

                    </div>
                </section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>

    );
};

export default AllMoviesPage;