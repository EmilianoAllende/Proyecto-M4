import Card from './components/Card/Card';
import CardList from './components/CardList/CardList';
import Hero from './components/Hero/Hero';
import productsMock from './mocks/products';

const homePage = () => {
  return (
    <div className='container main'>
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