"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";

const ResponsiveNavbar = () => {
  const [plus, setPlus] = useState(1);
  function NavigationResponsive() {
    const texts = document.getElementById("navigationText");
    // plus ? setPlus(0) : setPlus(1);
    if (plus) {
      texts?.classList.remove("hidden");
      setPlus(0);
    } else {
      texts?.classList.add("hidden");
      setPlus(1);
    }
  }

  return (
    <div className="lg:hidden">
      <div
        className="cursor-pointer rounded-full text-semibold"
        onClick={() => NavigationResponsive()}
      >
        {plus ? (
          <GiHamburgerMenu className="text-3xl" />
        ) : (
          <RxCross2 className="text-3xl" />
        )}
      </div>
      <div
        className="absolute w-full text-center bg-green-100 left-1 top-[7%] hidden font-semibold "
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
