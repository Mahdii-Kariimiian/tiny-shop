"use client";

const Error = ({ error }: { error: Error }) => {
    return (
        <div className="flex items-center justify-center bg-red-600">
            Error fetching products data {error.message}
        </div>
    );
};

export default Error;
