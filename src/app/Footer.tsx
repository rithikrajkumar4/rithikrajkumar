import Link from "next/link";
import React from "react";

import { BsInstagram } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full  h-full bg-black text-center ">
      <div className="text-white flex flex-col gap-[100px] items-center pt-20">
        <div className="flex flex-col-reverse gap-20">
          <h1 className="text-9xl">RR.</h1>
          <div className="flex flex-col items-center">
            <h1 className="mb-6 font-sans italic text-4xl">Follow me on!</h1>
            <div className="flex gap-20 mb-8">
              <div className=" cursor-pointer">
                <Link
                  href={"https://www.instagram.com/rithik._.rajkumar/"}
                  className="flex"
                >
                  <span className="text-3xl">
                    <BsInstagram />
                  </span>
                  <p className="text-2xl">Instagram/RithikRajkumar</p>
                </Link>
              </div>
              <div className=" cursor-pointer">
                <Link
                  href={"https://www.linkedin.com/in/rrk4/"}
                  className="flex"
                >
                  <span className="text-3xl">
                    <FaLinkedin />
                  </span>
                  <p className="text-2xl">Linkedin/RithikRajkumar</p>
                </Link>
              </div>
            </div>
            <div className="flex gap-20">
              <div className=" cursor-pointer">
                <Link
                  href={"https://github.com/rithikrajkumar4"}
                  className="flex"
                >
                  <span className="text-3xl">
                    <FaGithub />
                  </span>
                  <p className="text-2xl">Github/RithikRajkumar</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>&#169;All right are reserved.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
