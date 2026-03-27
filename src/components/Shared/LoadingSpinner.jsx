// src/components/Shared/LoadingSpinner.jsx

import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center min-h-[60vh]">
            <span className="loading loading-bars loading-lg text-primary"></span>
        </div>
    );
};

export default LoadingSpinner; // এই লাইনটি অত্যন্ত জরুরি