import Link from 'next/link';
import { UserWidget } from './UserWidget/UserWidget';

//utils
import Logo from './utils/techhome-logo.png';
import HomeIcon from './utils/home-house-ui-svgrepo-com.svg';
import CartIcon from './utils/shopping-cart-with-product-inside-svgrepo-com.svg';

//styles
import Image from 'next/image';


const excludePaths = ["/"];

export default function Navbar() {
    const currentPath = typeof window !== "undefined" ? window.location.pathname : "";

    console.log(currentPath);

if (!excludePaths.includes(currentPath))
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
                    <Link href="/cart">
                        <Image src={CartIcon} width={50} height={50} alt='cart-icon' />
                    </Link>
                </div>

                <div className="mr-10">
                    <Link href="/about">
                        <h3 className='font-black bg-primaryColor text-quaternaryColor rounded-full px-2'>ABOUT</h3>
                    </Link>
                </div>

                <div>
                    <UserWidget/>
                </div>
            </div>
        </nav>

    );
};