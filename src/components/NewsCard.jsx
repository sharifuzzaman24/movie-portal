import React from 'react';

const NewsCard = ({ newsItem }) => {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
      <img src={newsItem.image} alt={newsItem.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{newsItem.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mt-2">{newsItem.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-600 dark:text-gray-400">{newsItem.date}</span>
          <a href="#" className="text-red-600 hover:underline">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
