import Link from "next/link";
import React from "react";
import ResponsiveNavbar from "./Client/ResponsiveNavbar";
const Header = () => {
  return (
    <div className="flex justify-evenly text-center mt-4 items-center gap-4">
      <div className="text-4xl font-bold font-mono text-[#2563eb] p-2">
        <span>🇮🇳</span>RR
      </div>
      <div className="lg:flex gap-12 pt-2 text-xl font-semibold font-mono hidden">
        <div className="hover:bg-[#2563eb] hover:rounded-full cursor-pointer p-2 hover:text-white">
          <Link href={"/"}>Home</Link>
        </div>
        <div className="hover:bg-[#2563eb] hover:rounded-full cursor-pointer p-2 hover:text-white">
          <Link href={"#services"} className="scroll-smooth">
            Services
          </Link>
        </div>
        <div className="hover:bg-[#2563eb] hover:rounded-full cursor-pointer p-2 hover:text-white">
          <Link href={"#portfolio"} className="scroll-smooth">
            My Portfolio
          </Link>
        </div>
        <div className="hover:bg-[#2563eb] hover:rounded-full cursor-pointer p-2 hover:text-white">
          <Link href={"#testimonials"} className="scroll-smooth">
            Testimonials
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="cursor-pointer w-[200px] h-[50px] text-center pt-2 rounded-full text-white font-bold text-2xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 transition-colors duration-300">
          <Link
            href={"https://cal.com/rithikrajkumar/15min"}
            target="_blank"
            className="scroll-smooth"
          >
            Let&apos;s Talk.
          </Link>
        </div>
      </div>
      <ResponsiveNavbar />
    </div>
  );
};

export default Header;
