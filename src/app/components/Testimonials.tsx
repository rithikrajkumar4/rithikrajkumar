import React from "react";
import HeadingCategory from "./HeadingCategory";
import { HiUserCircle } from "react-icons/hi";

const Testimonials = () => {
  const reviews = [
    {
      company: "Shoe E-commerce Store",
      remark:
        "From the moment we started working together, Rithik demonstrated a high level of professionalism and expertise. He took the time to understand my project requirements, offered valuable insights, and delivered exceptional results ahead of schedule",
      desgination: "A Startup Owner",
    },
    {
      company: "RR Associates",
      remark:
        "What sets him apart is his remarkable attention to detail and commitment to excellence. He consistently communicated progress updates and was receptive to feedback, making the collaboration smooth and stress-free.",
      desgination: "Founder of RRAssociates",
    },
    {
      company: "Personal Portfolio",
      remark:
        "I wholeheartedly recommend Rithik to anyone in need of top-notch freelancing service. He is truly talented, and I look forward to working together on future projects. Thanks to him, my project exceeded my expectations!",
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
            className="flex flex-col justify-center items-center m-20 lg:m-0 group"
            key={index}
          >
            <div className="absolute mb-[430px] transform group-hover:scale-110 transition-transform duration-300">
              <HiUserCircle className="text-9xl bg-gradient-to-r from-[#34d399] to-[#3b82f6] text-transparent bg-clip-text" />
            </div>
            <div className="w-[22rem] h-[430px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-1 group-hover:scale-105 transition-all duration-300">
              <div className="w-full h-full bg-black rounded-3xl p-8 relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>

                <div className="relative z-10">
                  <h2 className="text-center text-2xl m-1 pt-2 font-semibold bg-gradient-to-r from-[#34d399] to-[#3b82f6] text-transparent bg-clip-text">
                    {item.company}
                  </h2>
                  <div className="mt-6">
                    <p className="font-sans text-center p-2 text-gray-300 group-hover:text-white transition-colors duration-300">
                      <span className="text-4xl italic text-[#34d399]">
                        &quot;
                      </span>
                      {item.remark}
                      <span className="text-4xl italic text-[#3b82f6]">
                        &quot;
                      </span>
                    </p>
                  </div>
                  <h1 className="text-center mt-8 font-bold italic font-mono text-[#34d399] group-hover:text-[#3b82f6] transition-colors duration-300">
                    {item.desgination}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
