"use client";

import UseAxios from "@/hooks/useAxios";
import { useEffect, useState } from "react";

const ProductsId = ({ params }: { params: { productsId: string } }) => {
    const { response, error, loading, fetchData } = UseAxios();

    const [selectedImage, setSelectedImage] = useState<number>(0);

    const handleChangeImage = (index: number) => {
        setSelectedImage(index);
    };

    useEffect(() => {
        fetchData(`products/${params.productsId}`);
    }, [params.productsId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!response) {
        return <div>No product data available.</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row gap-5">
                <div>
                    {response.images.map((image, index) => {
                        return (
                            <div
                                className="cursor-pointer"
                                onClick={() => handleChangeImage(index)}
                                key={index}
                            >
                                <img
                                    src={image}
                                    alt={response.title}
                                    className="w-28 h-auto rounded-lg shadow-lg mb-2"
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="mb-4 md:mb-0">
                    <img
                        src={response.images[selectedImage]}
                        alt={response.title}
                        className="w-96 h-auto rounded-lg shadow-lg"
                    />
                </div>
                <div className="pl-0 md:pl-8 max-w-xl">
                    <h2 className="text-2xl font-semibold mb-2 line-clamp-1">
                        {response.title}
                    </h2>
                    <p className="text-lg mb-4 line-clamp-2">
                        {response.description}
                    </p>
                    <p className="text-xl font-bold text-green-600">
                        Price: ${response.price}
                    </p>
                    <div className="mt-4">
                        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsId;
