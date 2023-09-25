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
          <div key={index} className="flex p-4 md:p-9 bg-gray-300 rounded-xl">
            <AiFillSetting className="md:text-5xl text-3xl text-center animate-spin text-green-700" />
            <p className="md:text-4xl text-2xl font-mono ">{item}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center text-center mt-20 w-full font-serif md:text-4xl text-2xl font-semibold">
        Please Email me your query!
        <Link
          href="mailto: rithikrajkumar@gmail.com"
          target="_top"
          className="font-sans text-blue-600 cursor-pointer hover:text-blue-900 border-4 p-3 border-blue-500 rounded-full"
        >
          rithikrajkumar@gmail.com
        </Link>
        <span className="p-4">OR</span>
        <Link
          href={"https://cal.com/rithikrajkumar/15min"}
          className="border-2 p-4 font-mono rounded-full bg-green-400 font-bold hover:text-white"
        >
          Fix a Meeting with me!
        </Link>
      </div>
    </div>
  );
};

export default Services;
