import Link from 'next/link';

//utils
import Logo from './utils/techhome-logo.png';
import HomeIcon from './utils/home-house-ui-svgrepo-com.svg';
import CartIcon from './utils/shopping-cart-with-product-inside-svgrepo-com.svg';
import UserIcon from './utils/user-application-identity-authentication-login-svgrepo-com.svg';

//styles
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className="w-screen">
            <div className="flex flex-row w-10/12 items-center mx-auto">
                <div>
                    <Image src={Logo} alt='tech-home-logo.png'width={300} className="w-16 m-1" />
                </div>

                <div className="content-center">
                    <h1>Tech</h1>
                    <h1>Home</h1>
                </div>

                <div className="ml-7">
                    <Link href="/">
                        <Image src={HomeIcon} width={50} height={50} alt='home-icon' />HOME
                    </Link>
                </div>
                <div className="ml-auto mr-10">
                    <Link href="/cart">
                        <Image src={CartIcon} width={50} height={50} alt='cart-icon' />CART
                    </Link>
                </div>
                <div>
                    <Link href="/login">
                        <Image src={UserIcon} width={50} height={50} alt='user-icon' />LOGIN
                    </Link>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;