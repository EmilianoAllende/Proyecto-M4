import { getFeaturedProducts } from "../services/getProducts";
import Card from "@/components/Card/Card";
import { IProduct } from "@/interfaces/Product";


export default async function Home() {
    const featuredProducts: IProduct[] = await getFeaturedProducts();

    return (
        <div className="mx-auto px-44 flex md:flex-wrap justify-center gap-2 md:gap-4">
            {featuredProducts.map((product) => (
                <div key={product.id}>
                        <Card product={product} />
                </div>
            ))}
        </div>
    );
}
