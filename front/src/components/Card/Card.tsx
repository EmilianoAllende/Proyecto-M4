import Image from 'next/image';
import { IProduct } from '@/interfaces/Product';
import AddProduct from '../AddProduct';
import Link from 'next/link';

export default function Card({ product }: { product: IProduct }) {
  const { name, price, image } = product;

  return (
    <div className="text-quaternaryColor bg-secondaryColor bg-opacity-70 text-center rounded-lg flex flex-col items-center transform group hover:scale-110 hover:transition-all duration-1000 hover:bg-primaryColor p-2 w-80 h-96">
      <h3 className='mb-auto'>{name}</h3>
      <Image src={image} alt={`${name}`} width={400} height={400} className='max-h-60 max-w-52 my-auto' />
      <Link href={`/products/${product.id}`} className='mt-auto mb-1 text-transparent rounded-3xl px-2 group-hover:text-primaryColor group-hover:bg-tertiaryColor'>Full Product</Link>
      <p className='align-text-bottom mt-auto'>${price}</p>
      <div className='mt-2 mb-1 bg-secondaryColor rounded-full py-2 px-3 w-fit'>
        <AddProduct product={product}/>
      </div>
    </div>
  );
};