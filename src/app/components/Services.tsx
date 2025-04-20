import React from "react";
import HeadingCategory from "./HeadingCategory";
import { AiFillSetting } from "react-icons/ai";
import Link from "next/link";
const Services = () => {
  const services = [
    "Web Designing",
    "Web Development",
    "App Development",
    "Content Designing",
    "NextJS Applications",
    "Flutter Application",
    "IOS/Android Apps",
    "Portfolio Website",
    "Product Landing Website",
  ];
  return (
    <div className="scroll-smooth">
      <HeadingCategory
        title="Services"
        subtitle="Here are the services I can provide"
      />
      <div className="flex gap-4 flex-wrap justify-center items-center mt-4">
        {services.map((item, index) => (
          <div
            key={index}
            className="flex p-4 md:p-9 bg-gradient-to-br from-[#34d399]/10 to-[#3b82f6]/10 rounded-xl group hover:from-green-400 hover:to-blue-500 transition-all duration-300"
          >
            <AiFillSetting className="md:text-5xl text-3xl text-center animate-spin text-[#34d399] group-hover:text-white transition-all duration-300" />
            <p className="md:text-4xl text-2xl font-mono ml-2 bg-gradient-to-r from-[#34d399] to-[#3b82f6] text-transparent bg-clip-text group-hover:text-white">
              {item}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center text-center mt-20 w-full font-serif md:text-4xl text-2xl font-semibold">
        Please Email me your query!
        <Link
          href="mailto: rithikrajkumar@gmail.com"
          target="_top"
          className="font-sans text-[#2563eb] cursor-pointer hover:text-[#1d4ed8] border-4 p-3 border-[#2563eb] rounded-full transition-colors duration-300"
        >
          rithikrajkumar@gmail.com
        </Link>
        <span className="p-4">OR</span>
        <Link
          href={"https://cal.com/rithikrajkumar/15min"}
          className="border-2 p-4 font-mono rounded-full bg-[#2563eb] text-white font-bold hover:bg-[#2d3748] transition-colors duration-300"
        >
          Fix a Meeting with me!
        </Link>
      </div>
    </div>
  );
};

export default Services;
