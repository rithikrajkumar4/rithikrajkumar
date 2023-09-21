import React from "react";
import HeadingCategory from "./HeadingCategory";
import Link from "next/link";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaHackerrank,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import {
  TbBrandNextjs,
  TbBrandJavascript,
  TbBrandNodejs,
} from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import {
  SiCplusplus,
  SiTailwindcss,
  SiFlutter,
  SiMongodb,
  SiFirebase,
  SiLeetcode,
} from "react-icons/si";

const Portfolios = () => {
  return (
    <div className="mt-40" id="portfolio">
      <HeadingCategory
        title="Portfolio"
        subtitle="This is my personal portfolio"
      />
      <div className="flex flex-col items-center justify-center">
        <h1 className=" capitalize lg:w-[60%] p-4 font-sans text-2xl lg:text-3xl text-center font-semibold space-x-4 italic tracking-widest">
          <span className="text-4xl">🙏🏻</span>,I am a programming enthusiast and
          a Computer Science Engineering graduate in 2023. I have year of
          experience in the web development field.Open to learn new technologies
          and to be up to date with my tech stack. I&apos;m a full-stack
          developer with experience in various frontend/backend frameworks.
        </h1>
        <p className="text-xl lg:text-2xl p-2 text-center capitalize font-mono lg:w-[60%]">
          Also,I binge watch anime 👒⚔🏴‍☠️🌊, music 💇🏿‍♂️ﾒ𝟶,love to play Chess ♟,like
          Moto Riding 🏍🏁,Travelling 🧳✈🌎 and ❤︎Eating a lot of food 🧃🤤🍕🍔.
        </p>
        <p className="mt-10 font-sans text-2xl ">Want to Hire me?</p>
        <Link
          className="border-4 hover:bg-green-500 hover:text-white border-green-500 p-4 rounded-full text-green-700 m-4 text-center font-medium text-2xl"
          href={
            "https://drive.google.com/file/d/1cqhZkYnKMYU2_LND83aop5l6bh6Crz_M/view?usp=sharing"
          }
          target="_blank"
        >
          My Resume Link
        </Link>
      </div>
      <div className="timeline rounded-full">
        <div className="container left rounded-xl">
          <div className="content">
            <h2 className="text-bold text-2xl font-mono">2022-Present</h2>
            <h3 className="font-sans text-3xl">Freelancer</h3>
          </div>
        </div>
        <div className="container right rounded-xl">
          <div className="content ">
            <h2 className="text-bold text-2xl font-mono">2021-2022</h2>
            <h3 className="font-sans text-3xl">Web Developer</h3>
            <h3 className="text-2xl font-serif">In Help by Tech pvt. ltd.</h3>
          </div>
        </div>
        <div className="container left rounded-xl">
          <div className="content ">
            <h2 className="text-bold text-2xl font-mono">2019-2023</h2>
            <h3 className="text-2xl font-serif">
              College Of Engineering, Roorkee
            </h3>
            <h3 className="text-2xl font-serif">
              B.tech Computer Science Engineering
            </h3>
          </div>
        </div>
        <div className="container right rounded-xl">
          <div className="content ">
            <h2 className="text-bold text-2xl font-mono">2019</h2>
            <h3 className="text-2xl font-serif">
              St.George&apos;s School, New Delhi
            </h3>
            <h3 className="text-2xl font-serif">Nursery-12th</h3>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-20 p-10 md:gap-[100px] gap-[50px] md:text-[140px] text-8xl flex-wrap">
        <SiCplusplus className="text-blue-500 hover:scale-125" />
        <FaHtml5 className="text-orange-500 hover:scale-125" />
        <FaCss3 className="text-blue-500 hover:scale-125" />
        <TbBrandJavascript className="text-yellow-300 hover:scale-125" />
        <FaReact className="text-[#61dbfb] hover:scale-125 animate-spin" />
        <TbBrandNextjs className="hover:scale-125" />
        <TbBrandNodejs className="text-[#659a60] hover:scale-125" />
        <SiTailwindcss className="text-[#00b6d7] hover:scale-125" />
        <SiFlutter className="text-[#00b6e9] hover:scale-125" />
        <GrMysql className="text-[#50809f] hover:scale-125" />
        <SiMongodb className="text-[#00ee64] hover:scale-125" />
        <SiFirebase className="text-[#ffa610] hover:scale-125" />
      </div>

      <div className="flex flex-col items-center mt-20 text-center">
        <h1 className="font-bold md:text-4xl text-2xl font-mono underline">
          Check out my Profile at:
        </h1>
        <div className="font-sans text-center flex flex-col items-center">
          <Link
            href={"https://github.com/rithikrajkumar4"}
            target="_blank"
            className="flex m-4"
          >
            <FaGithub className="md:text-7xl text-5xl" />
            <span className="md:text-3xl text-2xl p-4 hover:text-blue-500">
              Github/RithikRajkumar
            </span>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/rrk4/"}
            target="_blank"
            className="flex m-4"
          >
            <FaLinkedin className="md:text-7xl text-5xl text-[#0a66c2]" />
            <span className="md:text-3xl text-2xl p-4 hover:text-blue-500 ">
              Linkedin/RithikRajkumar
            </span>
          </Link>
          <Link
            href={"https://www.hackerrank.com/xaviorpaul9"}
            target="_blank"
            className="flex"
          >
            <FaHackerrank className="md:text-7xl text-5xl text-[#34c366]" />
            <span className="md:text-3xl text-2xl p-4 hover:text-blue-500">
              HackerRank/RithikRajkumar
            </span>
          </Link>
          <Link
            href={"https://leetcode.com/xaviorpaul9/"}
            target="_blank"
            className="flex m-4"
          >
            <SiLeetcode className="md:text-7xl text-5xl text-[#ffa610]" />
            <span className="md:text-3xl text-2xl p-4 hover:text-blue-500">
              Leetcode/RithikRajkumar
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolios;
