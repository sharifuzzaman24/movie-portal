import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const RegisterPage = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then((result) => {
                const newUser = { name, photo, email }
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "User created successfully!",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                        form.reset();
                    })
            })
            .catch((error) => {
                toast.error('failed to create user')

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
                        <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>
                        <form onSubmit={handleRegister}>
                            <div className='w-full mb-4'>
                                <label className="block mb-2">Name</label>
                                <input required type="text" name='name' placeholder="Enter your name..." className="p-3 w-full rounded-lg border dark:border-gray-700 dark:bg-gray-800" />

                            </div>
                            <div className='w-full mb-4'>
                                <label className="block mb-2"> Photo-URL</label>
                                <input required type="url" name='photo' placeholder="Enter your photo url..." className="p-3 w-full rounded-lg border dark:border-gray-700 dark:bg-gray-800" />

                            </div>
                            <div className='w-full mb-4'>
                                <label className="block mb-2">Email</label>
                                <input required type="email" name='email' placeholder="Enter your email..." className="p-3 w-full rounded-lg border dark:border-gray-700 dark:bg-gray-800" />

                            </div>
                            <div className='w-full mb-4'>
                                <label className="block mb-2">Password</label>
                                <input required type="password" name='password' placeholder="Enter your password..." className="p-3 w-full rounded-lg border dark:border-gray-700 dark:bg-gray-800" />

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