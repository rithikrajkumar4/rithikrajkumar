"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const ResponsiveNavbar = () => {
  const [plus, setPlus] = useState(1);
  function NavigationResponsive() {
    const icon = document.getElementById("plusIcon");
    const texts = document.getElementById("navigationText");
    if (plus) {
      icon?.classList.add("rotate-45");
      setPlus(0);
      texts?.classList.remove("hidden");
    } else {
      icon?.classList.remove("rotate-45");
      texts?.classList.add("hidden");
      setPlus(1);
    }
  }

  return (
    <div className="lg:hidden">
      <div
        className="cursor-pointer rounded-full bg-green-100 text-semibold"
        onClick={() => NavigationResponsive()}
      >
        <AiOutlinePlus
          id="plusIcon"
          className="text-4xl transition-transform "
        />
      </div>
      <div
        className="absolute w-full text-center bg-green-100 left-1 top-[10%] hidden font-semibold "
        id="navigationText"
      >
        <div className="hover:bg-green-300  cursor-pointer p-2 border border-black rounded-xl  ">
          <Link href={"/"}>Home</Link>
        </div>
        <div className="hover:bg-green-300  cursor-pointer p-2 border border-black rounded-xl ">
          <Link href={"#services"} className="scroll-smooth">
            Services
          </Link>
        </div>
        <div className="hover:bg-green-300  cursor-pointer p-2 border border-black rounded-xl ">
          <Link href={"#portfolio"} className="scroll-smooth">
            My Portfolio
          </Link>
        </div>
        <div className="hover:bg-green-300  cursor-pointer p-2 border border-black rounded-xl ">
          <Link href={"#testimonials"} className="scroll-smooth">
            Testimonials
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveNavbar;
