import Link from 'next/link';
import { UserWidget } from './UserWidget/UserWidget';

//utils
import Logo from './utils/techhome-logo.png';
import HomeIcon from './utils/home-house-ui-svgrepo-com.svg';
import CartIcon from './utils/shopping-cart-with-product-inside-svgrepo-com.svg';

//styles
import Image from 'next/image';

// interface NavItem {
//     image: typeof Image,
//     path: string,
// };

// const navConfig: NavItem[] = [
//     { image: HomeIcon, path: "home"},
//     { image: CartIcon, path: "home"},
// ];

export default function Navbar() {
    return (
        <nav className="w-screen">
            {/* <ul>
                {navConfig.map((el: NavItem)=>{
                    return(
                        <li key={`/${el.path}`}>
                            <Link href={el.path}>
                                <span>{el.image}</span>
                            </Link>
                        </li>
                    );
                })};
            </ul> */}

            <div className="flex flex-row lg:w-10/12 items-center mx-auto">
                <div>
                    <Image src={Logo} alt='tech-home-logo.png'width={300} className="w-16 m-1" />
                </div>

                <div className="text-center">
                    <h1>Tech<br/>Home</h1>
                </div>

                <div className="ml-7">
                    <Link href="/">
                        <Image src={HomeIcon} width={50} height={50} alt='home-icon' />
                    </Link>
                </div>

                <div className="ml-auto mr-10">
                    <Link href="/cart">
                        <Image src={CartIcon} width={50} height={50} alt='cart-icon' />
                    </Link>
                </div>
                <div>
                    <UserWidget/>
                </div>
            </div>
        </nav>

    );
};