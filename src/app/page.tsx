"use client";
import ProductCard from "@/components/product-cart/page";
import { Product } from "@/type";
import UseAxios from "@/hooks/useAxios";
import { useEffect, useState } from "react";

export default function Home() {
    const [page, setPage] = useState<number>(1);
    const itemsPerPage = 12;

    const { response: products, error, loading, fetchData } = UseAxios();

    useEffect(() => {
        const offset = (page - 1) * itemsPerPage;
        fetchData("/products", "GET", {}, { offset, limit: itemsPerPage });
    }, [page]);

    if (loading) return <div className="p-5">Loading...</div>;

    if (error) return <div className="p-5">Error: {error}</div>;

    if (!products || !Array.isArray(products))
        return <div>No products available</div>;

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                {products.map((product: Product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <div className="w-full flex p-5 gap-20 justify-center my-10">
                <button
                    className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition "
                    onClick={() => page > 1 && setPage(page - 1)}
                >
                    Previous
                </button>
                <p className="text-blue-600">{page}</p>
                <button
                    className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition "
                    onClick={() => setPage(page + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
}
