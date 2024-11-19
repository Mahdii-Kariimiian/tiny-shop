"use client"

import { createContext, useContext, useEffect, useState } from "react";
import { Product } from "@/type";

export const ProductsContext = createContext<{
    productsToCart: Product[];
    setProductsToCart: React.Dispatch<React.SetStateAction<Product[]>>;
}>({
    productsToCart: [],
    setProductsToCart: () => {},
});

const ProductsProvider = ({ children }: { children: React.ReactElement }) => {
    const savedProducts = (() => {
        const cart = localStorage.getItem("cart");
        return cart ? JSON.parse(cart) : [];
    })();

    const [productsToCart, setProductsToCart] =
        useState<Product[]>(savedProducts);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(productsToCart));
    }, [productsToCart]);

    return (
        <ProductsContext.Provider value={{ productsToCart, setProductsToCart }}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsProvider;

export const useProducts = () => useContext(ProductsContext);
