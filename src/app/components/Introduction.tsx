"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import TextCarousel from "./TextCarousel";

const Introduction = () => {
  return (
    <div>
      <div className="w-full h-full xl:flex xl:flex-row-reverse justify-center xl:p-20 mb-20 scroll-smooth">
        <div className="flex justify-center pt-10 xl:pt-0">
          <div className="w-[600px] h-[600px] md:h-[700px] mt-20 xl:mt-0 blob bg-gradient-to-r from-blue-900 via-gray-800 to-indigo-900 overflow-hidden bg-center">
            <Image
              className="scale-150 ml-8 mt-20 rotate-2 shadow-xl"
              src="/rrk1.png"
              width={700}
              height={800}
              alt="my image"
            />
          </div>
          <div
            className="blob absolute -z-10 bg-gradient-to-r from-[#34d399] to-[#3b82f6]"
            style={{
              width: "700px",
              height: "700px",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              filter: "blur(100px)",
            }}
          />
        </div>
        <div className="pt-20 text-center xl:text-left">
          <div className="xl:text-7xl text-5xl font-bold font-sans">
            <span className="">
              Hi, I&apos;m
              <span className="text-[#4299e1] uppercase"> Rithik Rajkumar</span>
              ,{" "}
            </span>
            <br />
            <div className="marquee-container mt-4">
              <span className="marquee text-3xl font-sans font-medium tracking-wide">
                🚀 Backend Developer • ⚡ API Architect • 🔧 System Designer •
                💾 Database Expert • ☁️ Cloud Engineer • 🛠️ DevOps Enthusiast •
                🔐 Security Focused • 🎯 Problem Solver
              </span>
            </div>
          </div>

          <div className="flex gap-8 items-center mt-4 text-center justify-center xl:justify-start">
            <div className="w-[200px] hover:text-[#2563eb] font-bold h-16 pt-3 rounded-full text-xl font-sans border-4 border-[#2563eb] hover:bg-[#2563eb] hover:text-white transition-colors duration-300">
              <Link
                href={"https://cal.com/rithikrajkumar/15min"}
                target="_blank"
              >
                Want to discuss?
              </Link>
            </div>
            <div className="w-[150px] font-bold h-16 pt-4 text-white hover:text-[#2563eb] rounded-full text-xl font-sans bg-[#2563eb] hover:bg-[#2d3748] transition-colors duration-300">
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
