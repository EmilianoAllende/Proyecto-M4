"use client";

import Link from "next/link";
import Image from "next/image";
import welcome from "@/../public/WELCOME.jpg";

export default function Landing() {
  return (
    <div className="flex">
      <div className="mx-auto items-center relative">
        <h1 className="bg-secondaryColor mx-auto p-2 w-fit text-cyan-400 font-bold text-7xl rounded-3xl">WELCOME</h1>

        <Image src={welcome} alt={"WELCOME.img"} width={550}></Image>

        <Link href={"home"}>
          <button
            className="bg-primaryColor text-quaternaryColor rounded-2xl px-2 absolute"
          >
            <p className="text-2xl font-bold">
              HOME
            </p>
          </button>
        </Link>
      </div>
    </div>
  );
};