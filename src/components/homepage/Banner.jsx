import Link from "next/link";
import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="text-center space-y-4 mt-12 flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold">
        We Build{" "}
        <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-primary font-bold">
          Productive
        </span>{" "}
        Apps
      </h1>
      <p className="text-[17px] w-[75%] text-center">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className="space-x-4 mt-5">
        <Link target="blank" href="https://play.google.com/store/apps">
          <button className="btn cursor-pointer border-2 px-4 py-2 rounded-2xl">
            {" "}
            Google Play
          </button>
        </Link>
        <Link target="_blank" href="https://www.apple.com/app-store/">
          <button className="btn cursor-pointer border-2 px-4 py-2 rounded-2xl">
            App Store
          </button>
        </Link>
      </div>
      <div className="mt-7">
        <Image src="/hero.png" width={800} height={500} alt="Hero image" />
      </div>
    </div>
  );
};

export default Banner;
