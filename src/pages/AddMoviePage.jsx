import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Swal from 'sweetalert2';

const AddMoviePage = () => {
    const [rating, setRating] = useState(0);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [formErrors, setFormErrors] = useState({});

    const genres = [
        "Action",
        "Adventure",
        "Animation",
        "Comedy",
        "Crime",
        "Documentary",
        "Drama",
        "Fantasy",
        "Historical",
        "Horror",
        "Musical",
        "Mystery",
        "Romance",
        "Sci-Fi",
        "Sports",
        "Thriller",
        "War",
        "Western"
    ];
    const years = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];

    const handleRating = (value) => {
        setRating(value);
    };

    const handleGenreChange = (e) => {
        const options = Array.from(e.target.selectedOptions, (option) => option.value);
        setSelectedGenres(options);
    };

    const validateForm = (form) => {
        const errors = {};

        const poster = form.poster.value;
        if (!poster) {
            errors.poster = 'Poster URL is required.';
        }

        const title = form.title.value;
        if (!title.trim()) {
            errors.title = 'Title is required.';
        } else if (title.length < 2) {
            errors.title = 'Title must be at least 2 characters.';
        }


        if (selectedGenres.length === 0) {
            errors.genres = 'At least one genre must be selected.';
        }

        const duration = form.duration.value;
        if (!duration) {
            errors.duration = 'Duration is required.';
        } else if (duration <= 60) {
            errors.duration = 'Duration must be greater than 60 minutes.';
        }

        const releaseYear = form.releaseYear.value;
        if (!releaseYear) {
            errors.releaseYear = 'Release year is required.';
        }


        if (rating === 0) {
            errors.rating = 'Rating is required.';
        }


        const summary = form.summary.value;
        if (!summary.trim()) {
            errors.summary = 'Summary is required.';
        } else if (summary.length < 10) {
            errors.summary = 'Summary must be at least 10 characters.';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        if (validateForm(form)) {
            const movieData = {
                poster: form.poster.value,
                title: form.title.value,
                genres: selectedGenres,
                duration: form.duration.value,
                releaseYear: form.releaseYear.value,
                summary: form.summary.value,
                rating,
            };

            // Submit movie data (POST request)
            fetch('http://localhost:8000/movies', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(movieData),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    if (data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Movie has been added",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        form.reset();
                        setRating(0);
                    }
                })
                .catch((error) => {
                    console.log(error)
                    toast.error('Failed to add the movie.');
                });
        } else {
            toast.error('Please fix the errors before submitting.');
        }
    };

    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className="w-11/12 mx-auto">
                <section className="pt-20 container mx-auto px-4 min-h-screen">
                    <h1 className="text-3xl font-bold text-center mt-10 mb-8">Add a New Movie</h1>

                    <form onSubmit={handleSubmit} className="flex flex-col mx-auto items-center justify-center gap-y-5 w-2/4 mb-20">
                        <div className="w-full">
                            <label className="block mb-2">Movie Poster URL</label>
                            <input
                                type="url"
                                name="poster"
                                placeholder="Movie poster URL..."
                                className="p-3 w-full rounded-lg border dark:border-gray-700 dark:bg-gray-800"
                            />
                            {formErrors.poster && <p className="text-red-600 text-sm">{formErrors.poster}</p>}
                        </div>

                        <div className="w-full">
                            <label className="block mb-2">Movie Title</label>
                            <input
                                type="text"
                                name="title"
                                placeholder="Movie title..."
                                className="p-3 w-full rounded-lg border dark:border-gray-700 dark:bg-gray-800"
                            />
                            {formErrors.title && <p className="text-red-600 text-sm">{formErrors.title}</p>}
                        </div>

                        <div className="w-full">
                            <label className="block mb-2">Genres</label>
                            <select
                                name="genres"
                                multiple
                                onChange={handleGenreChange}
                                className="p-3 w-full rounded-lg border dark:border-gray-700 dark:bg-gray-800"
                            >
                                {genres.map((genre) => (
                                    <option key={genre} value={genre}>
                                        {genre}
                                    </option>
                                ))}
                            </select>
                            {formErrors.genres && <p className="text-red-600 text-sm">{formErrors.genres}</p>}
                            <p className="mt-2 text-sm text-gray-400">Hold `Ctrl` (or `Cmd` on Mac) to select multiple genres.</p>
                        </div>

                        <div className="w-full">
                            <label className="block mb-2">Duration (minutes)</label>
                            <input
                                type="number"
                                name="duration"
                                placeholder="Duration in minutes..."
                                className="p-3 w-full rounded-lg border dark:border-gray-700 dark:bg-gray-800"
                            />
                            {formErrors.duration && <p className="text-red-600 text-sm">{formErrors.duration}</p>}
                        </div>

                        <div className="w-full">
                            <label className="block mb-2">Release Year</label>
                            <select defaultValue="" name="releaseYear" className="p-3 w-full rounded-lg border dark:border-gray-700 dark:bg-gray-800">
                                <option value="" disabled>
                                    Choose a year
                                </option>
                                {years.map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                            {formErrors.releaseYear && <p className="text-red-600 text-sm">{formErrors.releaseYear}</p>}
                        </div>

                        <div className="w-full">
                            <label className="block mb-2">Summary</label>
                            <textarea
                                name="summary"
                                placeholder="Write a summary..."
                                className="p-3 w-full rounded-lg border dark:border-gray-700 dark:bg-gray-800"
                            />
                            {formErrors.summary && <p className="text-red-600 text-sm">{formErrors.summary}</p>}
                        </div>

                        <div className="w-full">
                            <label className="block mb-2">Rating</label>
                            <div className="flex flex-col items-center">
                                <div className="flex space-x-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => handleRating(star)}
                                            className={`text-4xl ${star <= rating ? 'text-yellow-400' : 'text-gray-400'}`}
                                        >
                                            ★
                                        </button>
                                    ))}
                                </div>
                                {formErrors.rating && <p className="text-red-600 text-sm">{formErrors.rating}</p>}
                                <p className="mt-2">Movie Rating: {rating} stars</p>
                            </div>
                        </div>

                        <input className="bg-red-600 text-white py-3 rounded hover:bg-red-700 w-full" type="submit" value="Add Movie" />
                    </form>
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default AddMoviePage;
