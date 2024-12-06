import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { toast } from 'react-toastify';

const LoginPage = () => {

    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
            .then((result) => {
                console.log(result.user)
                navigate('/')
                form.reset();
            })
            .catch((error) => {
                toast.error('failed to login')
                console.log(error)
            });
    }

    return (

        <>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto min-h-screen'>
                <section className="container mx-auto pt-32 pb-32">
                    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
                        <form onSubmit={handleSignIn}>
                            <div className='w-full mb-4'>
                                <label className="block mb-2">Email</label>
                                <input required name='email' type="email" placeholder="Enter your email..." className="p-3 w-full rounded-lg border dark:border-gray-700 dark:bg-gray-800" />

                            </div>
                            <div className='w-full mb-4'>
                                <label className="block mb-2">Password</label>
                                <input required name='password' type="password" placeholder="Enter your password..." className="p-3 w-full rounded-lg border dark:border-gray-700 dark:bg-gray-800" />

                            </div>
                            <button className="w-full bg-red-600 text-white py-3 rounded hover:bg-red-700">Login</button>
                        </form>
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