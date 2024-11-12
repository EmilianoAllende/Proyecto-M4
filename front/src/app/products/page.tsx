import CardList from '../components/CardList/CardList';
import  Card  from '../components/Card/Card';
import { getProduts } from '../services/products';

const productsPage = async () => {
    const products = await getProduts();

    return (
        <div>
            <h1>Products</h1>
            <CardList>
                {products.map((product, index) => (
                <Card key={index} {...product} />
                ))}
            </CardList>
        </div>
    );
};

export default productsPage;