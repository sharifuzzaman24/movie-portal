import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AddMoviePage = () => {
    return (

        <>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto'>
                <section className="pt-20 container mx-auto px-4 min-h-screen">
                    <h1 className="text-3xl font-bold text-center mt-10 mb-8">Add a New Movie</h1>


                    <form className="flex flex-col mx-auto items-center justify-center gap-y-5 w-2/4 mb-20">
                        <div className='w-full'>
                            <label for="poster" className="block mb-2">Movie Poster URL</label>
                            <input type="text" placeholder="Movie poster url..." className="p-3 w-full rounded-lg border dark:border-gray-700 dark:bg-gray-800" />

                        </div>
                        <div className='w-full'>
                            <label for="poster" className="block mb-2">Movie Title</label>
                            <input type="text" placeholder="Movie title..." className="p-3 w-full rounded-lg border dark:border-gray-700 dark:bg-gray-800" />

                        </div>
                        <div className='w-full'>
                            <label for="poster" className="block mb-2">Genre</label>
                            <select className="p-3 w-full rounded-lg border dark:border-gray-700 dark:bg-gray-800">
                                <option>Action</option>
                                <option>Drama</option>
                                <option>Comedy</option>
                            </select>

                        </div>
                        <div className='w-full'>
                            <label for="poster" className="block mb-2">Duration (minutes)</label>
                            <input type="text" placeholder="Duration in minutes..." className="p-3 w-full rounded-lg border dark:border-gray-700 dark:bg-gray-800" />

                        </div>
                        <div className='w-full'>
                            <label for="poster" className="block mb-2">Release Year</label>
                            <input type="text" placeholder="Release year..." className="p-3 w-full rounded-lg border dark:border-gray-700 dark:bg-gray-800" />

                        </div>
                        <div className='w-full'>
                            <label for="poster" className="block mb-2">Summary</label>
                            <textarea type="text" placeholder="Write a summary..." className="p-3 w-full rounded-lg border dark:border-gray-700 dark:bg-gray-800" />

                        </div>
                        <input className='bg-red-600 text-white py-3 rounded hover:bg-red-700 w-full' type="submit" value="Add Movie" />
                    </form>
                </section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default AddMoviePage;