import Link from 'next/link';

//utils
import Logo from './utils/techhome-logo.png'

//styles
import Image from 'next/image';
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className='container'>
                <div>
                    <Image src={Logo} alt='tech-home-logo.png'width={300} className={styles.logo} />
                </div>

                <div>
                    <h1>Tech Home</h1>
                </div>

                <div>
                    <Link href="/">HOME</Link>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;