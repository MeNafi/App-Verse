import React from 'react';

// Added "message" prop to make the spinner context-aware
const LoadingSpinner = ({ message = "Loading AppVerse..." }) => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[60vh] gap-4">
            {/* Animated Dots Container */}
            <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 bg-[#6366f1] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-4 h-4 bg-[#6366f1] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-4 h-4 bg-[#6366f1] rounded-full animate-bounce"></div>
            </div>
            
            {/* Dynamic Message: Changes based on searching or navigating */}
            <p className="text-gray-500 font-bold text-sm uppercase tracking-widest animate-pulse">
                {message}
            </p>
        </div>
    );
};

export default LoadingSpinner;