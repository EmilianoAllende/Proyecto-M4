import { getProducts } from "../services/getProducts";
import { IProduct } from "@/interfaces/Product";
import Card from "@/components/Card/Card";


export default async function productsPage() {
    const products: IProduct[] = await getProducts();

    return (
        <div className="mx-auto px-44 flex md:flex-wrap justify-center gap-2 md:gap-4">
            {products.map((product) => (
                <div key={product.id}>
                        <Card product={product} />
                </div>
            ))}
        </div>
    );
}