import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const Introduction = () => {
  return (
    <div className="w-full h-[50vh] md:flex justify-evenly items-center bg-gray-100 rounded-full mr-2">
      <div className="flex justify-center">
        <div className="w-[400px] h-[400px] bg-green-400 rounded-full overflow-hidden bg-center ">
          <Image
            className="hover:scale-125 scroll-smooth"
            src={"/rrk1.png"}
            width={400}
            height={400}
            alt="me"
          />
        </div>
      </div>
      <div className="text-center">
        <div className="text-4xl uppercase font-serif">
          Hey,I am <span className=" text-green-600">Rithik Rajkumar</span>,
          <br /> An Experienced Freelancer,
          <br /> A Full-Stack Developer &
          <br /> Creative Designer.
        </div>
        <div className="flex gap-4 justify-center m-4">
          <div className="flex items-center text-2xl font-mono">
            <AiFillStar className="text-yellow-500" />
            MERN
          </div>
          <div className="flex items-center text-2xl font-mono">
            <AiFillStar className="text-yellow-500" />
            NextJS
          </div>
          <div className="flex items-center text-2xl font-mono">
            <AiFillStar className="text-yellow-500" />
            CSS
          </div>
          <div className="flex items-center text-2xl font-mono">
            <AiFillStar className="text-yellow-500" />
            Flutter
          </div>
        </div>
        <div className="flex gap-8 items-center justify-center">
          <div className="w-[200px] hover:text-gray-600 font-bold h-16 pt-3 rounded-full text-xl font-sans border-4 border-black">
            <Link href={"https://cal.com/rithikrajkumar/15min"} target="_blank">
              Want to discuss?
            </Link>
          </div>
          <div className="w-[150px] font-bold h-16 pt-4 text-white hover:text-black rounded-full text-xl font-sans bg-green-600">
            <Link href={"https://cal.com/rithikrajkumar/15min"} target="_blank">
              Let&apos;s Talk.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
