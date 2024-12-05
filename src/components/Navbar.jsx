import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='w-full bg-gray-800 shadow-md fixed z-10 top-0'>
            <div className="w-11/12 navbar mx-auto py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
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
                            className="p-5 space-y-2 dropdown-content bg-gray-800 rounded-lg z-[1] mt-5 w-52 shadow">
                            <li><NavLink to={'/'} className='hover:text-red-600 cursor-pointer'>Home</NavLink></li>
                            <li><NavLink to={'/all-movies'} className='hover:text-red-600 cursor-pointer'>All Movies</NavLink></li>
                            <li><NavLink to={'/add-movie'} className='hover:text-red-600 cursor-pointer'>Add Movie</NavLink></li>
                            <li><NavLink to={'/favorites'} className='hover:text-red-600 cursor-pointer'>My Favorites</NavLink></li>
                            <li><a className='hover:text-red-600 cursor-pointer'>Movie News</a></li>
                        </ul>
                    </div>
                    <Link to={'/'} className="text-2xl font-bold text-red-600">MoviePortal</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex justify-between items-center gap-5 px-1">
                    <li><NavLink to={'/'} className='hover:text-red-600 cursor-pointer'>Home</NavLink></li>
                            <li><NavLink to={'/all-movies'} className='hover:text-red-600 cursor-pointer'>All Movies</NavLink></li>
                            <li><NavLink to={'/add-movie'} className='hover:text-red-600 cursor-pointer'>Add Movie</NavLink></li>
                            <li><NavLink to={'/favorites'} className='hover:text-red-600 cursor-pointer'>My Favorites</NavLink></li>
                            <li><a className='hover:text-red-600 cursor-pointer'>Movie News</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex items-center gap-5">
                    <Link to={'/login'} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 cursor-pointer">Login</Link>
                    <Link to={'/register'} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 cursor-pointer">Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;