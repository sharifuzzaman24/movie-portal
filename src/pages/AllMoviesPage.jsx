import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AllMoviesPage = () => {
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


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
                            <img src="https://source.unsplash.com/random/400x300?movie" alt="Movie Poster" className="rounded-t-lg" />
                            <div className="p-6">
                                <h3 className="text-lg font-bold mb-2">Movie Title</h3>
                                <p className="text-sm mb-4">Genre: Drama | Duration: 120 min | Rating: 4.5 ⭐</p>
                                <a href="movie-details.html" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">See Details</a>
                            </div>
                        </div>

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