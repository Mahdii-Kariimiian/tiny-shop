import axios from "axios";
import Image from "next/image";
import mainImage from "../../public/main-picture.png";
import ProductCard from "@/components/product-card/page";
import { Product } from "@/type";

export default async function Home() {
    const response = await axios.get<Product[]>(
        "https://api.escuelajs.co/api/v1/products"
    );
    const products = response.data;

    return (
        <div className="text-black">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
