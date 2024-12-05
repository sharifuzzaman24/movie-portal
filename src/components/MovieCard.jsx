import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="relative w-64 h-80 bg-gray-800 rounded-lg overflow-hidden shadow-lg group">

      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-full object-cover group-hover:opacity-50 transition-opacity duration-300"
      />


      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-2xl font-semibold text-white mb-4">{movie.title}</h3>
        {
          movie.genres.map((genre, idx) => <p key={idx} className='text-white mb-2'>{genre}</p>)
        }
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
  );
};

export default MovieCard;
