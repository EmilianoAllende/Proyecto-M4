import { getFeaturedProducts } from "../services/getProducts";
import Card from "@/components/Card/Card";
import { IProduct } from "@/interfaces/Product";
import Link from "next/link";


export default async function Home() {
    const featuredProducts: IProduct[] = await getFeaturedProducts();

    return (
        <div className="mx-auto px-44 flex md:flex-wrap justify-center gap-2 md:gap-4">
            {featuredProducts.map((product) => (
                <div key={product.id}>
                    <Link href={`/products/${product.id}`}>
                        <Card product={product} />
                    </Link>
                </div>
            ))}
        </div>
    );
}
