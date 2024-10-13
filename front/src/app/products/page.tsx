import CardList from '../components/CardList/CardList';
import  Card  from '../components/Card/Card';
import productsMock from '../mocks/products';

const productsPage = () => {
    return (
        <div>
            <h1>Products</h1>
            <CardList>
                {productsMock.map((product, index) => (
                <Card key={index} {...product} />
                ))}
            </CardList>
        </div>
    );
};

export default productsPage;