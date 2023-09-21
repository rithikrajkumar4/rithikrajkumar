import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="lg:flex justify-evenly text-center mt-4 items-center gap-4">
      <div className="text-4xl font-bold font-mono text-green-400 p-2">
        <span>🇮🇳</span>RR.
      </div>
      <div className="lg:flex gap-12 pt-2 text-2xl font-semibold font-mono">
        <div className="hover:bg-green-300 hover:rounded-full cursor-pointer p-2 hover:text-white">
          <Link href={"/"}>Home</Link>
        </div>
        <div className="hover:bg-green-300 hover:rounded-full cursor-pointer p-2 hover:text-white">
          <Link href={"#services"}>Services</Link>
        </div>
        <div className="hover:bg-green-300 hover:rounded-full cursor-pointer p-2 hover:text-white">
          <Link href={"#portfolio"}>My Portfolio</Link>
        </div>
        <div className="hover:bg-green-300 hover:rounded-full cursor-pointer p-2 hover:text-white">
          <Link href={"#testimonials"}>Testimonials</Link>
        </div>
      </div>
      <div className="flex justify-center">
        <div className=" cursor-pointer w-[200px] h-[50px] text-center pt-2 rounded-full bg-green-600 text-white font-bold text-2xl hover:text-black ">
          <Link href={"https://cal.com/rithikrajkumar/15min"} target="_blank">
            Let&apos;s Talk.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
