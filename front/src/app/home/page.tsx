import { getFeaturedProducts } from "../services/getProducts";
import Card from "@/components/Card/Card";
import Product from "@/interfaces/Product";
import Link from "next/link";

export default async function Home() {
    const featuredProducts: Product[] = await getFeaturedProducts();

    return (
        <div className="mx-auto px-44 flex md:flex-wrap justify-center gap-2 md:gap-4">
            {featuredProducts.map(({ name, price, image, id, }) => {
                return (
                    <>
                    <div className="">
                        <div>
                            <Link href={`/products/${id}`}>
                                <Card
                                    key={id}
                                    name={name}
                                    price={price}
                                    image={image}
                                />
                            </Link>
                        </div>
                    </div>
                    </>
                );
            })};
        </div>
    );
};