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
        <h1 className=" capitalize md:w-[60%] p-4 font-sans text-2xl font-semibold space-x-4 italic">
          <span className="text-4xl">🙏🏻</span>,I am a programming enthusiast and
          a Computer Science Engineering graduate in 2023. I have year of
          experience in the web development field. Also open to learn new
          technologies and to be up to date with my tech stack. I&apos;m a
          full-stack developer with experience in various frontend/backend
          frameworks.
        </h1>
        <p className="text-xl p-2 text-center capitalize font-mono md:w-[60%]">
          Also,I binge watch anime 👒⚔🏴‍☠️🌊, music 💇🏿‍♂️ﾒ𝟶,love to play Chess ♟,like
          Moto Riding 🏍🏁,Travelling 🧳✈🌎 and ❤︎Eating a lot of food 🧃🤤🍕🍔.
        </p>
        <p className="mt-10 font-sans text-2xl ">Want to Hire me?</p>
        <Link
          className="border-4 hover:bg-green-500 hover:text-white border-green-500 p-4 rounded-full text-green-700 m-4 text-center font-medium text-2xl"
          href={
            "https://drive.google.com/file/d/1cqhZkYnKMYU2_LND83aop5l6bh6Crz_M/view?usp=sharing"
          }
        >
          My Resume Link
        </Link>
      </div>
      <div className="timeline rounded-full">
        <div className="container left rounded-xl">
          <div className="content">
            <h2>2022-Present</h2>
            <h3>Freelancer</h3>
          </div>
        </div>
        <div className="container right rounded-xl">
          <div className="content ">
            <h2>2021-2022</h2>
            <h3>Web Developer</h3>
            <h3>In Help by Tech pvt. ltd.</h3>
          </div>
        </div>
        <div className="container left rounded-xl">
          <div className="content ">
            <h2>2019-2023</h2>
            <h3>College Of Engineering, Roorkee</h3>
            <h3>B.tech Computer Science Engineering</h3>
          </div>
        </div>
        <div className="container right rounded-xl">
          <div className="content ">
            <h2>2019</h2>
            <h3>St.George&apos;s School, New Delhi</h3>
            <h3>Nursery-12th</h3>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-20 p-10 gap-[100px] text-[140px] flex-wrap">
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
        <h1 className="font-bold text-4xl font-mono underline">
          Check out my Profile at:
        </h1>
        <div className="font-sans">
          <Link
            href={"https://github.com/rithikrajkumar4"}
            target="_blank"
            className="flex m-4"
          >
            <FaGithub className="text-7xl" />
            <span className="text-3xl p-4 hover:text-blue-500">
              Github/RithikRajkumar
            </span>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/rrk4/"}
            target="_blank"
            className="flex m-4"
          >
            <FaLinkedin className="text-7xl text-[#0a66c2]" />
            <span className="text-3xl p-4 hover:text-blue-500 ">
              Linkedin/RithikRajkumar
            </span>
          </Link>
          <Link
            href={"https://www.hackerrank.com/xaviorpaul9"}
            target="_blank"
            className="flex"
          >
            <FaHackerrank className="text-7xl text-[#34c366]" />
            <span className="text-3xl p-4 hover:text-blue-500">
              HackerRank/RithikRajkumar
            </span>
          </Link>
          <Link
            href={"https://leetcode.com/xaviorpaul9/"}
            target="_blank"
            className="flex m-4"
          >
            <SiLeetcode className="text-7xl text-[#ffa610]" />
            <span className="text-3xl p-4 hover:text-blue-500">
              Leetcode/RithikRajkumar
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolios;
