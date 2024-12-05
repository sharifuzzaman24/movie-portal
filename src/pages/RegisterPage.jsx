import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto min-h-screen'>
                <section className="container mx-auto pt-32 pb-32">
                    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                        <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>
                        <form>
                            <div className='w-full mb-4'>
                                <label for="poster" className="block mb-2">Name</label>
                                <input type="name" placeholder="Enter your name..." className="p-3 w-full rounded-lg border dark:border-gray-700 dark:bg-gray-800" />

                            </div>
                            <div className='w-full mb-4'>
                                <label for="poster" className="block mb-2">Email</label>
                                <input type="email" placeholder="Enter your email..." className="p-3 w-full rounded-lg border dark:border-gray-700 dark:bg-gray-800" />

                            </div>
                            <div className='w-full mb-4'>
                                <label for="poster" className="block mb-2">Password</label>
                                <input type="password" placeholder="Enter your password..." className="p-3 w-full rounded-lg border dark:border-gray-700 dark:bg-gray-800" />

                            </div>
                            <button className="w-full bg-red-600 text-white py-3 rounded hover:bg-red-700">Register</button>
                        </form>
                        <p className="mt-6 text-center">
                            Already have an account? <Link to={'/login'} className="text-red-600 hover:underline">Login</Link>
                        </p>
                    </div>
                </section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default RegisterPage;