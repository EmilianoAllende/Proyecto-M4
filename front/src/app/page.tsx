import Card from './components/Card/Card';
import CardList from './components/CardList/CardList';
import Hero from './components/Hero/Hero';
import productsMock from './mocks/products';

const homePage = () => {
  return (
    <div className="mx-auto px-44">
      <Hero/>

      <CardList>
        {productsMock.slice(0, 3).map((product, i) => (
          <Card key={i} {...product}/>
        ))}
      </CardList>

    </div>
  );
};

export default homePage;