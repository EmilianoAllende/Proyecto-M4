import styles from './Hero.module.css';

const Hero = () => {
    return (
        <header className={styles.hero}>
            <h1>Hero</h1>
            <button>Go to Products</button>
        </header>

    );
};

export default Hero;