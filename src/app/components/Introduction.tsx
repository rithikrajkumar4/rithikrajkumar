import React from "react";
import Link from "next/link";
import Image from "next/image";
import TextCarousel from "./TextCarousel";

const Introduction = () => {
  return (
    <div>
      <div className="w-full h-full  xl:flex xl:flex-row-reverse justify-center xl:p-20 mb-20 scroll-smooth">
        <div className="flex justify-center pt-10 xl:pt-0">
          <div className="w-[600px] h-[600px] md:h-[700px] mt-20 xl:mt-0 blob bg-[#90EE90]  overflow-hidden bg-center ">
            <Image
              className=" scale-150 ml-8 mt-20 rotate-2 shadow-xl"
              src={"/rrk1.png"}
              width={700}
              height={800}
              alt="my image"
            />
          </div>
        </div>
        <div className="pt-20 text-center xl:text-left">
          <div className="xl:text-7xl text-5xl  font-bold font-sans">
            <span className="">
              Hi,I&apos;m
              <span className=" text-green-400 uppercase ">
                {" "}
                Rithik Rajkumar
              </span>
              ,
            </span>
            <br /> Full-Stack Developer &
            <br /> Creative Designer.
          </div>
          <div className="xl:w-[70%] ">
            <p className="mt-2 text-2xl">
              I code solutions and design aesthetics that captivate,combining
              technical prowess with an artistic touch to shape tomorrow&apos;s
              digital landscape.
            </p>
          </div>
          <div className="flex gap-8 items-center mt-4 text-center justify-center xl:justify-start">
            <div className="w-[200px] hover:text-gray-600 font-bold h-16 pt-3 rounded-full text-xl font-sans border-4 border-black">
              <Link
                href={"https://cal.com/rithikrajkumar/15min"}
                target="_blank"
              >
                Want to discuss?
              </Link>
            </div>
            <div className="w-[150px] font-bold h-16 pt-4 text-white hover:text-black rounded-full text-xl font-sans bg-green-600">
              <Link
                href={"https://cal.com/rithikrajkumar/15min"}
                target="_blank"
              >
                Let&apos;s Talk.
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <TextCarousel title="A Full-stack Developer" />
      </div>
    </div>
  );
};

export default Introduction;
