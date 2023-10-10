import React from "react";
import HeadingCategory from "./HeadingCategory";

import { HiUserCircle } from "react-icons/hi";

const Testimonials = () => {
  const reviews = [
    {
      company: "Shoe E-commerce Store",
      remark:
        "From the moment we started working together,Rithik demonstrated a high level of professionalism and expertise. He took the time to understand my project requirements, offered valuable insights, and delivered exceptional results ahead of schedule",
      desgination: "A Startup Owner",
    },
    {
      company: "RR Associates",
      remark:
        "What sets him apart is his remarkable attention to detail and commitment to excellence.He consistently communicated progress updates and was receptive to feedback, making the collaboration smooth and stress-free.",
      desgination: "Founder of RRAssociates",
    },
    {
      company: "Personal Portofolio",
      remark:
        "I wholeheartedly recommend Rithik to anyone in need of top-notch freelancing service. He is truely talented, and I look forward to working together on future projects. Thanks to him, my project exceeded my expectations!",
      desgination: "Anonymous Client",
    },
  ];
  return (
    <div className="mt-40 scroll-smooth" id="testimonials">
      <HeadingCategory
        title="Testimonials"
        subtitle="Clients I have worked for"
      />
      <div className="lg:flex gap-10 justify-center mb-10 overflow-clip">
        {reviews.map((item, index) => (
          <div
            className="flex flex-col justify-center items-center m-20 lg:m-0"
            key={index}
          >
            <div className=" absolute mb-[430px]">
              <HiUserCircle className="text-9xl text-green-900" />
            </div>
            <div className="w-[22rem] h-[430px] border-4 border-black rounded-3xl">
              <div className="p-10">
                <h2 className="text-center text-xl m-1 pt-2 font-semibold underline font-mono">
                  {item.company}
                </h2>
                <p className="font-sans text-center p-2 ">
                  <span className="text-3xl italic">&quot;</span>
                  {item.remark}
                  <span className="text-3xl italic">&quot;</span>
                </p>
                <h1 className="text-center mt-4 font-bold italic font-mono">
                  {item.desgination}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
