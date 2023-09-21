import React from "react";
import HeadingCategory from "./HeadingCategory";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
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
    <div>
      <HeadingCategory
        title="Services"
        subtitle="Here are the services I can provide"
      />
      <div className="flex gap-10 flex-wrap justify-center items-center mt-4">
        {services.map((item, index) => (
          <div
            key={index}
            className="flex p-8 w-auto text-center bg-gray-200 rounded-lg"
          >
            <MdOutlineMiscellaneousServices className="text-5xl animate-pulse text-green-900" />
            <p className="text-4xl ml-4 font-mono ">{item}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center text-center mt-20 w-full font-serif text-4xl font-semibold">
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
