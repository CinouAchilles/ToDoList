import React from 'react';
import notfound from '../assets/not-found.png';
import '../App.css';

export default function ErrorP() {
    const handleGoBack = () => {
        window.history.back(); // Takes the user back to the previous page
    };

    return (
        <div className="flex flex-col items-center justify-center h-[85vh] p-8 bg-gray-100 relative">
            <div className="fourerror flex flex-col items-center text-center p-6 md:px-10 md:mx-20 rounded-lg shadow-lg bg-white/70 backdrop-blur-lg animate-fade-in">
                <h1 className="text-6xl font-extrabold text-blue-600 mb-2">404</h1>
                <img src={notfound} alt="404 Not Found" className="h-40 w-40 mb-4" />
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Page Not Found</h2>
                <p className="text-lg text-gray-600 mb-6">
                    Oops! The page you're looking for doesn't exist. <br />
                    Please check the URL or go back to the previous page.
                </p>
                <button
                    onClick={handleGoBack}
                    className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                    Go Back
                </button>
            </div>
        </div>
    );
}
