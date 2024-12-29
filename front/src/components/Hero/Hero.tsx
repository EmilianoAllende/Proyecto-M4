import Link from 'next/link';

const Hero = () => {
    return (
        <header className="h-48 flex flex-col items-center bg-secondaryColor opacity-80 rounded-lg">
            <h1>WELCOME TO TECH HOME</h1>
            <Link href='/products'><button className="bg-tertiaryColor rounded-full p-2">Go to Products</button></Link>
        </header>

    );
};

export default Hero;