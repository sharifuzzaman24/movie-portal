import React from 'react';
import { Link } from 'react-router-dom';
import NotFound from '../assets/undraw_page_not_found_re_e9o6.svg'

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-gradient-to-tr from-blue-600 to-purple-500 opacity-30 rounded-full blur-3xl top-10 left-20"></div>
        <div className="absolute w-96 h-96 bg-gradient-to-bl from-green-500 to-yellow-400 opacity-20 rounded-full blur-2xl bottom-10 right-20"></div>
      </div>
      <div className="relative z-10 text-center px-6">
        <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-700">
          404
        </h1>
        <h2 className="mt-4 text-3xl font-semibold">
          Lost in Space
        </h2>
        <p className="mt-2 text-lg text-gray-300">
          Sorry, the page you are looking for does not exist. It may have been moved or deleted.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="px-8 py-3 text-lg font-medium bg-red-600 rounded-lg shadow-lg hover:bg-red-700 transition"
          >
            Take Me Home
          </Link>
        </div>
      </div>
      <div className="relative mt-12">
        <img
          src={NotFound}
          alt="Lost in Space"
          className="w-full max-w-sm mx-auto"
        />
      </div>
      <footer className="absolute bottom-6 text-gray-500">
        <p className="text-sm">© {new Date().getFullYear()} Movie Portal. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default NotFoundPage;
