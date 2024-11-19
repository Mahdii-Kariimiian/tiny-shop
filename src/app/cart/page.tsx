"use client";
import React from "react";
import Image from "next/image";
import { useProducts } from "@/context/products-to-cart";
import { Product } from "@/type";
import Link from "next/link"; // اضافه کردن Link از Next.js برای هدایت به صفحات دیگر

const Cart = () => {
    const { productsToCart, setProductsToCart } = useProducts();

    const handleRemoveFromCart = (id: number) => {
        setProductsToCart((prev) =>
            prev.filter((product: Product) => product.id !== id)
        );
    };

    return (
        <div className="container mx-auto p-4">
            <Link href="/" passHref>
                <button className="px-4 py-2 mb-6 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition">
                    Back to Home
                </button>
            </Link>

            <h1 className="text-2xl font-bold mb-6 text-center">
                Your Shopping Cart
            </h1>

            {productsToCart.length === 0 ? (
                <p className="text-center text-gray-500">Your cart is empty!</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {productsToCart.map((product: Product) => (
                        <div
                            key={product.id}
                            className="border rounded-lg shadow-md overflow-hidden bg-white"
                        >
                            <div className="w-full h-48 relative">
                                <Image
                                    src={product.images[0]}
                                    alt={product.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-t-lg"
                                />
                            </div>
                            <div className="p-4">
                                <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
                                    {product.title}
                                </h2>
                                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                                    {product.description}
                                </p>
                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-lg font-bold text-green-600">
                                        ${product.price}
                                    </span>
                                    <button
                                        onClick={() =>
                                            handleRemoveFromCart(product.id)
                                        }
                                        className="px-3 py-1 text-sm bg-red-600 text-white rounded-lg hover:bg-red-500 transition"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
