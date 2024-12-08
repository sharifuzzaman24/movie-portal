import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AllMoviesPage = () => {
    const [movies, setMovies] = useState([]); 
    const [searchQuery, setSearchQuery] = useState("");
    useEffect(() => {
        fetch("http://localhost:5000/movies")
            .then((res) => res.json())
            .then((data) => setMovies(data))
            .catch((err) => console.error("Failed to fetch movies", err));
    }, []);
    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
        <header>
            <Navbar />
        </header>
        <main className="w-11/12 mx-auto">
            <section className="pt-20 mb-20 container mx-auto px-4 min-h-screen">
                <h1 className="text-3xl font-bold text-center mt-12 mb-8">All Movies</h1>
                <div className="flex justify-center mb-8">
                    <input
                        type="text"
                        placeholder="Search by Title..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="p-3 w-full max-w-lg rounded-lg border dark:border-gray-700 dark:bg-gray-800"
                    />
                </div>
                
                {filteredMovies.length === 0 ? (
                    <p className="text-center text-lg font-semibold">No movies found.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredMovies.map((movie) => (
                            <MovieCard movie={movie} key={movie._id} />
                        ))}
                    </div>
                )}
            </section>
        </main>
        <footer>
            <Footer />
        </footer>
        </>
    );
};

export default AllMoviesPage;
