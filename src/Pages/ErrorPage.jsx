// src/pages/ErrorPage.jsx

import React from "react";
import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  // The useRouteError hook provides the error that was thrown.
  const error = useRouteError();
  console.error(error); // It's good practice to log the error for debugging.

  let status = error.status || "Oops!";
  let message = error.statusText || "Something went wrong.";

  if (error.status === 404) {
    message = "Sorry, we couldn't find the page you're looking for.";
  }

  return (
    <div className="bg-gray-900 text-white flex items-center justify-center min-h-screen">
      <div className="text-center p-8">
        <h1 className="text-8xl sm:text-9xl font-extrabold text-indigo-400 tracking-tighter">
          {status}
        </h1>
        <p className="mt-4 text-2xl sm:text-3xl font-semibold text-white">
          {message}
        </p>
        <p className="mt-2 text-lg text-gray-400">
          Let's get you back on track.
        </p>
        <div className="mt-10">
          <Link
            to="/"
            className="inline-block px-8 py-3 text-lg font-bold text-white bg-indigo-600 border border-transparent rounded-md shadow-lg hover:bg-indigo-700 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            &larr; Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
