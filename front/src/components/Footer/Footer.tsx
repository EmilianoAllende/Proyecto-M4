import Link from "next/link";
import Image from "next/image";
import lin from "./utils/linkedin-round-svgrepo-com.svg";
import git from "./utils/github-round-svgrepo-com.svg";
import insta from "./utils/instagram-round-svgrepo-com.svg";
import face from "./utils/facebook-round-svgrepo-com.svg";

const Footer = () => {
    return (
        <footer className="bg-secondaryColor font-semibold">
            <div className="w-10/12 mx-auto grid grid-cols-3">
                <div className="my-auto">
                    <Link href={"/work"}>WORK WITH US</Link>
                </div>

                <div className="my-auto">
                    <h4>Copyright © 1994-2024 Emiliano Allende</h4>
                </div>

                <div className="flex flex-row ml-auto">
                        <Link className="m-1" href={"https://www.linkedin.com/"}>
                            <Image alt="icon" src={lin} height={30}/>
                        </Link>

                        <Link className="m-1" href={"https://github.com/"}>
                            <Image alt="icon" src={git} height={30}/>
                        </Link>

                        <Link className="m-1" href={"https://www.instagram.com/"}>
                            <Image alt="icon" src={insta} height={30}/>
                        </Link>

                        <Link className="m-1" href={"https://www.facebook.com"}>
                            <Image alt="icon" src={face} height={30}/>
                        </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;