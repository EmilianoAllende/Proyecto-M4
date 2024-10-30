import { getFeaturedProducts } from '../../service/products';
import Card from './components/Card/Card';
import CardList from './components/CardList/CardList';
import Hero from './components/Hero/Hero';

const homePage = async () => {
  const products = await getFeaturedProducts();
  return (
    <div className="mx-auto px-44">
      <Hero/>

      <CardList>
        {products.map((product, i) => (
          <Card key={i} {...product}/>
        ))}
      </CardList>

    </div>
  );
};

export default homePage;