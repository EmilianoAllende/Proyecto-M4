import CardList from '../components/CardList/CardList';
import  Card  from '../components/Card/Card';
//types
import { Product } from '../components/Card/types';
const products: Product[] = [
    {
        title: "HomePod mini",
        image: [
        "https://www.apple.com/v/homepod-mini/j/images/overview/hero_homepod_white__fbci8wwv3oi2_large.png",
        ],
        price: "99 €",
    },
    {
        title: "AirPods Pro",
        image: [
        "https://e7.pngegg.com/pngimages/478/694/png-clipart-apple-airpods-new-in-box-lightning-bluetooth-airpods-white-bluetooth-thumbnail.png",
        ],
        price: "279 €",
    },
    {
        title: "Apple Watch Series 7",
        image: [
        "https://img.freepik.com/premium-psd/smartwatch-realistic-isolated-transparent-background_1034016-12709.jpg",
        ],
        price: "429 €",
    },
    {
        title: "HomePod mini",
        image: [
        "https://www.apple.com/v/homepod-mini/j/images/overview/hero_homepod_white__fbci8wwv3oi2_large.png",
        ],
        price: "99 €",
    },
    {
        title: "AirPods Pro",
        image: [
        "https://e7.pngegg.com/pngimages/478/694/png-clipart-apple-airpods-new-in-box-lightning-bluetooth-airpods-white-bluetooth-thumbnail.png",
        ],
        price: "279 €",
    },
    {
        title: "Apple Watch Series 7",
        image: [
        "https://img.freepik.com/premium-psd/smartwatch-realistic-isolated-transparent-background_1034016-12709.jpg",
        ],
        price: "429 €",
    },
    {
        title: "HomePod mini",
        image: [
        "https://www.apple.com/v/homepod-mini/j/images/overview/hero_homepod_white__fbci8wwv3oi2_large.png",
        ],
        price: "99 €",
    },
    {
        title: "AirPods Pro",
        image: [
        "https://e7.pngegg.com/pngimages/478/694/png-clipart-apple-airpods-new-in-box-lightning-bluetooth-airpods-white-bluetooth-thumbnail.png",
        ],
        price: "279 €",
    },
    {
        title: "Apple Watch Series 7",
        image: [
        "https://img.freepik.com/premium-psd/smartwatch-realistic-isolated-transparent-background_1034016-12709.jpg",
        ],
        price: "429 €",
    },

];


const productsPage = () => {
    return (
        <div>
            <h1>Products</h1>
            <CardList>
                {products.map((product, index) => (
                <Card key={index} {...product} />
                ))}
            </CardList>
            <div className="">
            </div>
        </div>
    );
};

export default productsPage;