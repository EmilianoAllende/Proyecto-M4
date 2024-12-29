"use client";

import Link from "next/link";
import Image from "next/image";
import welcome from "@/../public/WELCOME.jpg";

export default function Landing() {
  return (
    <div className="flex">
      <div className="mx-auto items-center relative">
        <h1 className="bg-secondaryColor p-2 w-fit text-cyan-400 font-bold text-7xl rounded-3xl">WELCOME</h1>

        <Image src={welcome} alt={"WELCOME.img"} width={400}></Image>

        <Link href={"home"}>
          <button
            className="bg-primaryColor text-quaternaryColor rounded-2xl px-2 absolute"
            onClick={() => {
              alert("It Works!");
            }}
          >
            HOME
          </button>
        </Link>
      </div>
    </div>
  );
};