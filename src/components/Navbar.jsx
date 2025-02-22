import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import ThemeToggle from '../ThemeToggle';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
   

    return (
        <div className='w-full bg-gray-200 dark:bg-gray-800 shadow-md fixed z-10 top-0'>
            <div className="w-11/12 navbar h-[70px] mx-auto py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-900 dark:text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="p-5 space-y-2 dropdown-content bg-gray-100 dark:bg-gray-800 rounded-lg z-[1] mt-5 w-52 shadow">
                            <li><NavLink to={'/'} className='hover:text-red-600 cursor-pointer text-gray-900 dark:text-white'>Home</NavLink></li>
                            <li><NavLink to={'/all-movies'} className='hover:text-red-600 cursor-pointer text-gray-900 dark:text-white'>All Movies</NavLink></li>
                            <li><NavLink to={'/add-movie'} className='hover:text-red-600 cursor-pointer text-gray-900 dark:text-white'>Add Movie</NavLink></li>
                            <li><NavLink to={'/favorites'} className='hover:text-red-600 cursor-pointer text-gray-900 dark:text-white'>My Favorites</NavLink></li>
                            <li><NavLink to={'/movie-news'} className='hover:text-red-600 cursor-pointer text-gray-900 dark:text-white'>Movie News</NavLink></li>

                        </ul>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Link to={'/'} className="text-2xl font-bold text-red-600">MoviePortal</Link>
                        <ThemeToggle></ThemeToggle>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex justify-between items-center gap-5 px-1">
                        <li><NavLink to={'/'} className='hover:text-red-600 cursor-pointer text-gray-900 dark:text-white'>Home</NavLink></li>
                        <li><NavLink to={'/all-movies'} className='hover:text-red-600 cursor-pointer text-gray-900 dark:text-white'>All Movies</NavLink></li>
                        <li><NavLink to={'/add-movie'} className='hover:text-red-600 cursor-pointer text-gray-900 dark:text-white'>Add Movie</NavLink></li>
                        <li><NavLink to={'/favorites'} className='hover:text-red-600 cursor-pointer text-gray-900 dark:text-white'>My Favorites</NavLink></li>
                        <li><NavLink to={'/movie-news'} className='hover:text-red-600 cursor-pointer text-gray-900 dark:text-white'>Movie News</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">


                    {
                        user && user?.email ? <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar tooltip tooltip-info tooltip-left" data-tip={user.displayName}>
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={user?.photoURL} />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content dark:bg-gray-800 bg-gray-100 rounded-lg z-[1] mt-5 w-52 p-2 shadow">
                                <li>
                                    <a className='text-gray-900 dark:text-white'>Profile</a>
                                </li>
                                <li><a className='text-gray-900 dark:text-white'>Settings</a></li>
                                <li><a onClick={logOut} className='text-gray-900 dark:text-white'>Logout</a></li>
                            </ul>
                        </div> : <div className=' flex items-center gap-5'>
                            <Link to={'/login'} className="bg-red-600 text-gray-900 dark:text-white px-4 py-2 rounded hover:bg-red-700 cursor-pointer">Login</Link>
                            <Link to={'/register'} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 cursor-pointer">Register</Link>
                        </div>
                    }



                </div>
            </div>
        </div>
    );
};

export default Navbar;