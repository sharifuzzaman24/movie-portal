import React from 'react';

const NewsLetterSection = () => {
  return (
    <section className="bg-gray-200 dark:bg-gray-800 rounded-lg mb-20 text-gray-800 dark:text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Stay updated with the latest news, articles, and special offers delivered straight to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto px-4 py-3 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 px-6 py-3 text-white font-medium rounded-md transition-all"
          >
            Subscribe
          </button>
        </form>
        <p className="text-sm text-gray-400 dark:text-gray-700 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default NewsLetterSection;
