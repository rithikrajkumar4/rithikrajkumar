import Link from "next/link";
import React from "react";

import { BsInstagram } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-gradient-to-b from-black via-gray-900 to-black text-center scroll-smooth relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="text-white flex flex-col gap-[80px] items-center pt-20 relative z-10">
        <div className="flex flex-col gap-16 items-center">
          <h1 className="text-9xl neonText animate-pulse hover:scale-110 transition-transform duration-300">
            RR.
          </h1>

          <div className="flex flex-col gap-8 items-center">
            <h1 className="mb-6 font-sans italic text-4xl bg-gradient-to-r from-[#34d399] to-[#3b82f6] text-transparent bg-clip-text">
              Follow me on!
            </h1>

            <div className="flex flex-wrap justify-center gap-16 mb-8">
              <div className="group cursor-pointer">
                <Link
                  href={"https://www.instagram.com/rithik._.rajkumar/"}
                  className="flex items-center gap-3 p-4 rounded-xl bg-gray-900/50 backdrop-blur-sm hover:bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300"
                >
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    <BsInstagram />
                  </span>
                  <p className="text-2xl group-hover:tracking-widest transition-all duration-300">
                    Instagram/RithikRajkumar
                  </p>
                </Link>
              </div>

              <div className="group cursor-pointer">
                <Link
                  href={"https://www.linkedin.com/in/rrk4/"}
                  className="flex items-center gap-3 p-4 rounded-xl bg-gray-900/50 backdrop-blur-sm hover:bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300"
                >
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    <FaLinkedin />
                  </span>
                  <p className="text-2xl group-hover:tracking-widest transition-all duration-300">
                    Linkedin/RithikRajkumar
                  </p>
                </Link>
              </div>

              <div className="group cursor-pointer">
                <Link
                  href={"https://github.com/rithikrajkumar4"}
                  className="flex items-center gap-3 p-4 rounded-xl bg-gray-900/50 backdrop-blur-sm hover:bg-gradient-to-r from-gray-700 to-gray-900 transition-all duration-300"
                >
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    <FaGithub />
                  </span>
                  <p className="text-2xl group-hover:tracking-widest transition-all duration-300">
                    Github/RithikRajkumar
                  </p>
                </Link>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm hover:bg-gradient-to-r from-[#34d399] to-[#3b82f6] transition-all duration-300">
              <p className="text-xl font-mono hover:tracking-widest transition-all duration-300">
                Contact Me@ : rithikrajkumar@gmail.com / +91-9968556205
              </p>
            </div>
          </div>
        </div>

        <div className="pb-8">
          <p className="text-lg mb-2 hover:text-[#34d399] transition-colors duration-300">
            Feel Free to copy 💝
          </p>
          <p className="text-lg hover:text-[#3b82f6] transition-colors duration-300">
            Made with ❤️ from India
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
