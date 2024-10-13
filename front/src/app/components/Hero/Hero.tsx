import Link from 'next/link';

//styles
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <header className={styles.hero}>
            <h1>WELCOME TO TECH HOME</h1>
            <Link href='/products'><button className={styles.button}>Go to Products</button></Link>
        </header>

    );
};

export default Hero;