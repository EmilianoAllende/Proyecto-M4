import { getProduts } from "../services/products";
import Card from "@/components/Card/Card";
import { Product } from "@/interfaces/Product";
import Link from "next/link";

export default async function Home() {
    const products: Product[] = await getProduts();

    return (
        <div className="mx-auto px-44">
            {products.map(({ name, price, image, stock, id, }) => {
                return (
                    <>
                    <div className="flex md:flex-row gap-2 md:gap-4">
                        <div>
                        <Link href={`${id}`}>
                            <Card
                                key={id}
                                name={name}
                                price={price}
                                image={image}
                                stock={stock}
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