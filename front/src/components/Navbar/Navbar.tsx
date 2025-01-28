import Link from 'next/link';
import { UserWidget } from './UserWidget/UserWidget';
import Logo from './utils/techhome-logo.png';
import HomeIcon from './utils/home-house-ui-svgrepo-com.svg';
import CartIcon from './utils/shopping-cart-with-product-inside-svgrepo-com.svg';
import Image from 'next/image';
import CartStatus from '../CartStatus';

export default function Navbar() {
    return (
        <nav className="w-screen">

            <div className="flex flex-row lg:w-10/12 items-center mx-auto">
                <div>
                    <Image src={Logo} alt='tech-home-logo.png'width={300} className="w-16 m-1" />
                </div>

                <div className="text-center">
                    <h1>Tech<br/>Home</h1>
                </div>

                <div className="ml-7">
                    <Link href="home">
                        <Image src={HomeIcon} width={50} height={50} alt='home-icon' />
                    </Link>
                </div>

                <div className="ml-7">
                    <Link href="/products">
                        <h3 className='font-black bg-primaryColor text-quaternaryColor rounded-full px-2'>PRODUCTS</h3>
                    </Link>
                </div>

                <div className="ml-auto mr-7">
                    <CartStatus />
                    <Link href="/cart">
                        <Image src={CartIcon} width={50} height={50} alt='cart-icon' />
                    </Link>
                </div>

                <div className="mr-10">
                    <Link href="/about">
                        <h3 className='font-black bg-primaryColor text-quaternaryColor rounded-full px-2'>ABOUT</h3>
                    </Link>
                </div>

                <div className="mr-10">
                    <Link href="/dashboard">
                        <h3 className='font-black bg-primaryColor text-quaternaryColor rounded-full px-2'>DASHBOARD</h3>
                    </Link>
                </div>

                <div>
                    <UserWidget/>
                </div>
            </div>
        </nav>

    );
};