export default async function Product({
    params
}: {
    params:Promise<{ slug:string }>;
}) {
    const { slug } = await params;

    return(
        <div>
            <h1>PRODUCT {slug}</h1>
        </div>
    )
};

