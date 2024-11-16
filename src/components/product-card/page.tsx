import Image from "next/image";
import { Product } from "@/type";
import { FC } from "react";

type ProductCardProps = {
    product: Product;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="border rounded-lg shadow-md p-4 max-w-sm bg-white">
            <div className="w-full h-64 relative">
                <Image
                    src={product.images[1]}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                />
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-semibold text-gray-800">
                    {product.title}
                </h2>
                <p className="text-sm text-gray-600 mt-2">
                    {product.description.slice(0, 100)}...
                </p>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-bold text-green-600">
                        ${product.price}
                    </span>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
