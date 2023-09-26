"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const WorkCarousel = () => {
  const totalImages = 2;
  const [imgno, setImgno] = useState(1);
  function move() {
    setImgno((prev) => (prev % totalImages) + 1);
  }

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="border-4 border-black rounded-xl p-2">
        <Image
          id="carouselImage"
          alt="workimage"
          src={`/workimage${imgno}.png`}
          width={2000}
          height={100}
          className="h-full w-full"
        />
      </div>
      <div className="flex gap-10">
        <div onClick={() => move()}>
          <AiFillCaretLeft className="text-4xl m-2 hover:text-5xl transition-transform cursor-pointer" />
        </div>
        <div onClick={() => move()}>
          <AiFillCaretRight className="text-4xl m-2 hover:text-5xl transition-transform cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default WorkCarousel;
