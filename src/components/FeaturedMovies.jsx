import React from 'react';

const FeaturedMovies = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Featured Movies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                    <img src="" className='rounded-t-lg' alt="" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-2">Movie Title</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Genre: Action | Duration: 120 min | Rating: 4.5 ⭐</p>
                            <a href="#" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">See Details</a>
                        </div>
                </div>
                
            </div>
        </div>
    );
};

export default FeaturedMovies;