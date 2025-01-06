import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AddMoviePage = () => {
    const [rating, setRating] = useState(0);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
    } = useForm();

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
        "Western",
    ];

    const years = Array.from({ length: 35 }, (_, i) => 1990 + i);

    const onSubmit = (data) => {
        if (rating === 0) {
            toast.error("Rating is required.");
            return;
        }

        const movieData = { ...data, rating };

        fetch("https://movie-portal-server-orcin.vercel.app/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(movieData),
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Movie has been added",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    reset();
                    setRating(0);
                }
            })
            .catch((error) => {
                console.error(error);
                toast.error("Failed to add the movie.");
            });
    };


    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className="w-11/12 mx-auto">
                <section className="pt-20 container mx-auto px-4 min-h-screen">
                    <h1 className="text-3xl font-bold text-center mt-12 mb-8">Add a New Movie</h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mx-auto items-center justify-center gap-y-5 w-2/4 mb-20">
                        <div className="w-full">
                            <label className="block mb-2">Movie Poster URL</label>
                            <input
                                type="url"
                                {...register("poster", { required: "Poster URL is required." })}
                                placeholder="Movie poster URL..."
                                className="p-3 w-full rounded-lg border dark:border-gray-700 bg-gray-200 border-gray-300 dark:bg-gray-800"
                            />
                            {errors.poster && <p className="text-red-600 text-sm">{errors.poster.message}</p>}
                        </div>
                        <div className="w-full">
                            <label className="block mb-2">Movie Title</label>
                            <input
                                type="text"
                                {...register("title", {
                                    required: "Title is required.",
                                    minLength: { value: 2, message: "Title must be at least 2 characters." },
                                })}
                                placeholder="Movie title..."
                                className="p-3 w-full rounded-lg border dark:border-gray-700 bg-gray-200 border-gray-300 dark:bg-gray-800"
                            />
                            {errors.title && <p className="text-red-600 text-sm">{errors.title.message}</p>}
                        </div>
                        <div className="w-full">
                            <label className="block mb-2">Genres</label>
                            <select
                                {...register("genres", { required: "At least one genre must be selected." })}
                                multiple
                                className="p-3 w-full rounded-lg border dark:border-gray-700 bg-gray-200 border-gray-300 dark:bg-gray-800"
                            >
                                {genres.map((genre) => (
                                    <option key={genre} value={genre}>
                                        {genre}
                                    </option>
                                ))}
                            </select>
                            {errors.genres && <p className="text-red-600 text-sm">{errors.genres.message}</p>}
                        </div>
                        <div className="w-full">
                            <label className="block mb-2">Duration (minutes)</label>
                            <input
                                type="number"
                                {...register("duration", {
                                    required: "Duration is required.",
                                    min: { value: 60, message: "Duration must be greater than 60 minutes." },
                                })}
                                placeholder="Duration in minutes..."
                                className="p-3 w-full rounded-lg border dark:border-gray-700 bg-gray-200 border-gray-300 dark:bg-gray-800"
                            />
                            {errors.duration && <p className="text-red-600 text-sm">{errors.duration.message}</p>}
                        </div>
                        <div className="w-full">
                            <label className="block mb-2">Release Year</label>
                            <select
                                {...register("releaseYear", { required: "Release year is required." })}
                                defaultValue=""
                                className="p-3 w-full rounded-lg border dark:border-gray-700 bg-gray-200 border-gray-300 dark:bg-gray-800"
                            >
                                <option value="" disabled>
                                    Choose a year
                                </option>
                                {years.map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                            {errors.releaseYear && <p className="text-red-600 text-sm">{errors.releaseYear.message}</p>}
                        </div>
                        <div className="w-full">
                            <label className="block mb-2">Summary</label>
                            <textarea
                                {...register("summary", {
                                    required: "Summary is required.",
                                    minLength: { value: 10, message: "Summary must be at least 10 characters." },
                                })}
                                placeholder="Write a summary..."
                                className="p-3 w-full rounded-lg border dark:border-gray-700 bg-gray-200 border-gray-300 dark:bg-gray-800"
                            />
                            {errors.summary && <p className="text-red-600 text-sm">{errors.summary.message}</p>}
                        </div>
                        <div className="w-full">
                            <label className="block mb-2">Rating</label>
                            <div className="flex flex-col items-center">
                                <div className="flex space-x-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => setRating(star)}
                                            className={`text-4xl ${star <= rating ? "text-yellow-400" : "text-gray-400"}`}
                                        >
                                            ★
                                        </button>
                                    ))}
                                </div>
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
