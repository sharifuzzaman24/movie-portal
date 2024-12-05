import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const MovieDetailsPage = () => {

    const movie = useLoaderData();

    return (

        <>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto'>
                <section className="pt-32 mb-20 container mx-auto px-4">
                    <div className="flex flex-col items-center lg:flex-row gap-8 h-[470px]">
                        <img src={movie.poster} alt="Movie Poster" className="h-full rounded-lg shadow-lg w-full lg:w-1/3" />

                        <div className="flex-1">
                            <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
                            <p className="mb-4">Genre: {movie.genres.map(genre => <span>{genre}, </span>)}</p>
                            <p className="mb-4">Duration: {movie.duration} minutes</p>
                            <p className="mb-4">Release Year: {movie.releaseYear}</p>
                            <p className="mb-4 flex items-center gap-3">Rating:  <div className="rating">
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
                            </div></p>
                            <p className="mb-6">Summary: {movie.summary}</p>

                            <div className="flex space-x-4">
                                <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Add to Favorite</button>
                                <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">Delete Movie</button>
                                <a href="update-movie.html" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Update Movie</a>
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

export default MovieDetailsPage;