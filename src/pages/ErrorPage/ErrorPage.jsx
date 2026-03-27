import React from 'react';
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    // Get error details from the router
    const error = useRouteError();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center bg-[#F8FAFC] px-4">
            
            {/* Display status code (e.g., 404) */}
            <h1 className="text-9xl font-black text-gray-200">
                {error?.status || "404"}
            </h1>

            {/* Main error message */}
            <p className="text-2xl font-bold mt-4 text-gray-800">
                Oops! {error?.statusText || "Page not found"}
            </p>

            {/* Short description for the user */}
            <p className="text-gray-500 mt-2 max-w-sm">
                The page you are looking for doesn't exist or an unexpected error occurred.
            </p>

            {/* Navigation button to return home */}
            <Link 
                to="/" 
                className="mt-8 bg-[#8B5CF6] hover:bg-[#7c4dff] text-white px-10 py-3 rounded-xl font-bold transition-all shadow-lg active:scale-95"
            >
                Go Back Home
            </Link>
            
        </div>
    );
};

export default ErrorPage;