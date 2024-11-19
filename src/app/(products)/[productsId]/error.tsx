"use client";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold text-red-600 mb-4">
                Something went wrong!
            </h1>
            <p className="text-gray-600 mb-8">{error.message}</p>
            <button
                onClick={reset}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Try Again
            </button>
        </div>
    );
};

export default Error;
