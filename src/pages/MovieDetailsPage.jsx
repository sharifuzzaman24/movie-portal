import React, { useContext } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthProvider';



const MovieDetailsPage = () => {

    const { user } = useContext(AuthContext);
    console.log(user.email)
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
            userEmail
        }

        fetch('http://localhost:5000/favorites', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(favoriteMovie)
        })
            .then(res => res.json())
            .then(data => {
                if (data.message === 'Movie added to favorites') {
                    Swal.fire({
                        title: 'Success!',
                        text: 'The movie has been added to your favorites.',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                } else if (data.message === 'Movie is already in your favorites') {
                    Swal.fire({
                        title: 'Oops!',
                        text: 'This movie is already in your favorites.',
                        icon: 'warning',
                        confirmButtonText: 'Got it'
                    });
                }
            })

    };





    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/movies/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            navigate('/all-movies')
                        }
                    })


            }
        });
    }

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
                            <p className='mb-4'>{movie.genres.join(', ')}</p>
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
                                <button onClick={() => handleAddFavorite(movie)} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Add to Favorite</button>
                                <button onClick={() => handleDelete(movie._id)} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">Delete Movie</button>
                                <Link to={`/update-movie/${movie._id}`} href="update-movie.html" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Update Movie</Link>
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