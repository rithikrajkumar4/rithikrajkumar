import Link from "next/link";
import React from "react";

import { BsInstagram } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full  h-full bg-black text-center scroll-smooth">
      <div className="text-white flex flex-col gap-[100px] items-center pt-20">
        <div className="flex flex-col gap-20 items-center">
          <h1 className="text-9xl neonText animate-pulse">RR.</h1>
          <div className="flex flex-col gap-10 items-center">
            <h1 className="mb-6 font-sans italic text-4xl">Follow me on!</h1>
            <div className="flex flex-wrap justify-center gap-20 mb-8">
              <div className=" cursor-pointer hover:text-pink-500 hover:scale-110">
                <Link
                  href={"https://www.instagram.com/rithik._.rajkumar/"}
                  className="flex"
                >
                  <span className="text-3xl">
                    <BsInstagram />
                  </span>
                  <p className="text-2xl hover:tracking-widest">
                    Instagram/RithikRajkumar
                  </p>
                </Link>
              </div>
              <div className=" cursor-pointer hover:text-blue-500  hover:scale-110">
                <Link
                  href={"https://www.linkedin.com/in/rrk4/"}
                  className="flex"
                >
                  <span className="text-3xl">
                    <FaLinkedin />
                  </span>
                  <p className="text-2xl hover:tracking-widest">
                    Linkedin/RithikRajkumar
                  </p>
                </Link>
              </div>
              <div className=" cursor-pointer hover:scale-110">
                <Link
                  href={"https://github.com/rithikrajkumar4"}
                  className="flex"
                >
                  <span className="text-3xl">
                    <FaGithub />
                  </span>
                  <p className="text-2xl hover:tracking-widest">
                    Github/RithikRajkumar
                  </p>
                </Link>
              </div>
            </div>
            <div>
              <p>Contact Me@ : rithikrajkumar@gmail.com/+91-9968556205</p>
            </div>
          </div>
        </div>
        <div>
          <p>Feel Free to copy 💝.</p>
          <p>Made with ❤️ from India.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
