import React, { useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { toast } from 'react-toastify';

const LoginPage = () => {

    const { signInUser, setUser, signInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState({});
    const navigate = useNavigate();
    const location = useLocation();

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user)
                navigate(location?.state ? location.state : '/')
                form.reset();
            })
            .catch((err) => {
                setError({ ...error, login: err.code })
                toast.error(`Failed to login, ${error.login}`)
            });
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate(location?.state ? location.state : '/');
            })
            .catch((err) => {
                toast.error(`Google Sign-In Failed: ${err.message}`);
            });
    };

    return (

        <>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto min-h-screen'>
                <section className="container mx-auto pt-32 pb-32">
                    <div className="max-w-md mx-auto bg-gray-200 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
                        <form onSubmit={handleSignIn}>
                            <div className='w-full mb-4'>
                                <label className="block mb-2">Email</label>
                                <input required name='email' type="email" placeholder="Enter your email..." className="p-3 w-full rounded-lg border dark:border-gray-700 bg-gray-200 border-gray-300 dark:bg-gray-800" />

                            </div>
                            <div className='w-full mb-4'>
                                <label className="block mb-2">Password</label>
                                <input required name='password' type="password" placeholder="Enter your password..." className="p-3 w-full rounded-lg border dark:border-gray-700 bg-gray-200 border-gray-300 dark:bg-gray-800" />
                                <div className='flex justify-between items-center mt-1'>
                                    {
                                        error.login && <p className='text-red-600 text-sm'>{error.login}</p>
                                    }
                                    <p className='hover:text-red-600 hover:underline cursor-pointer'>Forgot Password?</p>
                                </div>

                            </div>

                            <button className="w-full bg-red-600 text-white py-3 rounded hover:bg-red-700">Login</button>

                        </form>
                        <button
                            onClick={handleGoogleSignIn}
                            className="mt-4 w-full flex items-center justify-center bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
                        >
                            <svg
                                className="w-5 h-5 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 48 48"
                            >
                                <path
                                    fill="#EA4335"
                                    d="M24 9.5c3.24 0 5.92 1.11 7.89 2.98l5.92-5.92C33.5 3.55 28.99 2 24 2 14.82 2 7.27 7.92 4.47 15.59l6.99 5.44C13.13 13.4 18.13 9.5 24 9.5z"
                                />
                                <path
                                    fill="#34A853"
                                    d="M43.94 24.5c0-1.55-.14-3.06-.39-4.5H24v9.17h11.15c-.72 2.92-2.7 5.4-5.15 6.98v5.81h8.32C41.89 37.04 44 31.18 44 24.5z"
                                />
                                <path
                                    fill="#FBBC04"
                                    d="M11.46 28.03c-1.33-1.98-2.09-4.3-2.09-6.78s.76-4.8 2.09-6.78L4.47 9.03C1.64 13.51 0 18.99 0 24.5s1.64 10.99 4.47 15.47l6.99-5.44z"
                                />
                                <path
                                    fill="#4285F4"
                                    d="M24 48c6.48 0 11.93-2.15 15.91-5.82l-6.99-5.44c-2.01 1.34-4.59 2.11-8.92 2.11-5.88 0-10.88-3.9-12.55-9.31l-6.99 5.44C7.27 40.08 14.82 46 24 46z"
                                />
                            </svg>
                            Login with Google
                        </button>
                        <p className="mt-6 text-center">
                            Don’t have an account? <Link to={'/register'} className="text-red-600 hover:underline">Register</Link>
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

export default LoginPage;