import Image from "next/image";
import { Product } from "@/type";
import { FC } from "react";
import Link from "next/link";
import { useProducts } from "@/context/products-to-cart";

type ProductCartProps = {
    product: Product;
};

const ProductCart: FC<ProductCartProps> = ({ product }) => {
    const { productsToCart, setProductsToCart } = useProducts();

    const handleAddToCart = () => {
        const isAdded = productsToCart.find((item) => item.id === product.id);
        if (isAdded) {
            setProductsToCart((prev) =>
                prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setProductsToCart((prev) => [...prev, { ...product, quantity: 1 }]);
        }
    };

    return (
        <div className="border rounded-lg shadow-md p-4 max-w-sm">
            <div className="w-full h-64 relative">
                <Image
                    src={product.images[6]}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                />
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-semibold text-gray-800 line-clamp-1">
                    {product.title}
                </h2>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                    {product.description}
                </p>
                <div className="flex justify-between items-center mt-4 gap-3">
                    <span className="text-lg font-bold text-green-600 mr-auto">
                        ${product.price}
                    </span>

                    <Link href={`/${product.id}`}>
                        <button className="px-4 py-2 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300 transition">
                            Detail
                        </button>
                    </Link>

                    <button
                        onClick={handleAddToCart}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;
