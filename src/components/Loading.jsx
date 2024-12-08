import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <h1 className="mt-4 text-gray-900 dark:text-white text-xl font-semibold">Loading...</h1>
      </div>
    </div>
  );
};

export default Loading;
