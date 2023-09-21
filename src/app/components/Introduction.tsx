import React from "react";
import Link from "next/link";
import Image from "next/image";

const Introduction = () => {
  return (
    <div className="w-full h-[100%] xl:h-[70%] xl:flex xl:flex-row-reverse justify-between xl:p-20 mb-20">
      <div className="flex justify-center pt-10 xl:pt-0">
        <div className="w-[600px] h-[600px] mt-20 md:mt-0 blob bg-green-400  overflow-hidden bg-center ">
          <Image
            className="hover:scale-125"
            src={"/rrk1.png"}
            width={600}
            height={600}
            alt="me"
          />
        </div>
      </div>
      <div className="pt-20 text-center xl:text-left">
        <div className="xl:text-7xl text-5xl  font-bold font-sans">
          <span className="">
            Hi,I&apos;m
            <span className=" text-green-400 uppercase ">Rithik Rajkumar</span>,
          </span>
          <br /> Full-Stack Developer &
          <br /> Creative Designer.
        </div>
        <div className="xl:w-[70%] ">
          <p className="mt-2 text-2xl">
            I code solutions and design aesthetics that captivate,combining
            technical prowess with an artistic touch to shape tomorrow's digital
            landscape.
          </p>
        </div>
        <div className="flex gap-8 items-center mt-4 text-center justify-center xl:justify-start">
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
