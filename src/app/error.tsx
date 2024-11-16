"use client";

import { useEffect } from "react";

const Error = ({ error }: { error: Error }) => {
    useEffect(() => {
        console.log(error);
    }, [error]);
    return (
        <div className="flex items-center justify-center bg-red-600">
            Error fetching products data
        </div>
    );
};

export default Error;
