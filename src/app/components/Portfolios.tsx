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
    <div className="mt-40 scroll-smooth" id="portfolio">
      <HeadingCategory
        title="Portfolio"
        subtitle="This is my personal portfolio"
      />

      <div className="flex flex-col items-center justify-center p-8">
        <div className="max-w-4xl w-full">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl transform transition-all duration-500 hover:scale-[1.02]">
            <h1 className="capitalize text-2xl lg:text-3xl font-sans text-center font-semibold tracking-widest mb-6">
              <span className="text-4xl animate-bounce">🙏🏻</span>
              <span className="bg-gradient-to-r from-[#34d399] to-[#3b82f6] text-transparent bg-clip-text animate-gradient">
                I am a programming enthusiast and a Computer Science Engineering
                graduate in 2023. I have year of experience in the web
                development field. Open to learn new technologies and to be up
                to date with my tech stack. I&apos;m a full-stack developer with
                experience in various frontend/backend frameworks.
              </span>
            </h1>
            <p className="text-xl lg:text-2xl p-4 text-center capitalize font-mono bg-gradient-to-r from-[#34d399] via-[#3b82f6] to-[#34d399] text-transparent bg-clip-text animate-gradient">
              Also, I binge watch anime{" "}
              <span className="text-[#34d399]">👒</span>
              <span className="text-[#3b82f6]">⚔</span>
              <span className="text-[#34d399]">🏴‍☠️</span>
              <span className="text-[#3b82f6]">🌊</span>, music{" "}
              <span className="text-[#34d399]">💇🏿‍♂️</span>
              <span className="text-[#3b82f6]">ﾒ𝟶</span>, love to play Chess
              <span className="text-[#34d399]">♟</span>, like Moto Riding{" "}
              <span className="text-[#3b82f6]">🏍</span>
              <span className="text-[#34d399]">🏁</span>, Travelling{" "}
              <span className="text-[#3b82f6]">🧳</span>
              <span className="text-[#34d399]">✈</span>
              <span className="text-[#3b82f6]">🌎</span> and{" "}
              <span className="text-[#34d399]">❤︎</span>Eating a lot of food{" "}
              <span className="text-[#34d399]">🧃</span>
              <span className="text-[#3b82f6]">🤤</span>
              <span className="text-[#34d399]">🍕</span>
              <span className="text-[#3b82f6]">🍔</span>.
            </p>
          </div>
        </div>
      </div>

      <div className="timeline p-8">
        <div className="container left rounded-2xl transform transition-all duration-500 hover:scale-[1.02]">
          <div className="content bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-xl">
            <h2 className="text-bold text-2xl font-mono text-gray-800">
              2023-Present
            </h2>
            <h3 className="font-sans text-3xl italic text-[#3b82f6]">
              Software Developer
            </h3>
            <h3 className="text-2xl font-serif text-[#34d399]">
              In Innovative codelabs pvt. ltd.
            </h3>
          </div>
        </div>
        <div className="container right rounded-2xl transform transition-all duration-500 hover:scale-[1.02]">
          <div className="content bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-xl">
            <h2 className="text-bold text-2xl font-mono text-gray-800">
              2022-2023
            </h2>
            <h3 className="font-sans text-3xl italic text-[#3b82f6]">
              Web Developer
            </h3>
            <h3 className="text-2xl font-serif text-[#34d399]">
              In Help by Tech pvt. ltd.
            </h3>
          </div>
        </div>
        <div className="container left rounded-2xl transform transition-all duration-500 hover:scale-[1.02]">
          <div className="content bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-xl">
            <h2 className="text-bold text-2xl font-mono text-gray-800">
              2019-2023
            </h2>
            <h3 className="text-2xl font-serif font-semibold text-[#3b82f6]">
              College Of Engineering, Roorkee
            </h3>
            <h3 className="text-2xl font-serif text-[#34d399]">
              B.tech Computer Science Engineering
            </h3>
          </div>
        </div>
        <div className="container right rounded-2xl transform transition-all duration-500 hover:scale-[1.02]">
          <div className="content bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-xl">
            <h2 className="text-bold text-2xl font-mono text-gray-800">2019</h2>
            <h3 className="text-2xl font-serif font-semibold text-[#3b82f6]">
              St.George&apos;s School, New Delhi
            </h3>
            <h3 className="text-2xl font-serif text-[#34d399]">Nursery-12th</h3>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-8">
        <p className="mt-10 font-sans text-2xl font-bold text-gray-800">
          Exploring new opportunities!
        </p>
        <Link
          className="border-4 p-4 rounded-full m-4 text-center font-medium text-2xl transition-all duration-300 bg-gradient-to-r from-[#34d399] to-[#3b82f6] text-white hover:from-[#3b82f6] hover:to-[#34d399] transform hover:scale-105"
          href={"https://salmon-libby-86.tiiny.site"}
          target="_blank"
        >
          My Resume Link
        </Link>
      </div>

      <div className="flex justify-center mt-20 p-8 gap-8 flex-wrap">
        {[
          {
            icon: (
              <SiCplusplus className="text-blue-500 text-6xl transform transition-all duration-300 hover:scale-125" />
            ),
            name: "C++",
          },
          {
            icon: (
              <FaHtml5 className="text-orange-500 text-6xl transform transition-all duration-300 hover:scale-125" />
            ),
            name: "HTML5",
          },
          {
            icon: (
              <FaCss3 className="text-blue-500 text-6xl transform transition-all duration-300 hover:scale-125" />
            ),
            name: "CSS3",
          },
          {
            icon: (
              <TbBrandJavascript className="text-yellow-300 text-6xl transform transition-all duration-300 hover:scale-125" />
            ),
            name: "JavaScript",
          },
          {
            icon: (
              <FaReact className="text-[#61dbfb] text-6xl transform transition-all duration-300 hover:scale-125 animate-spin" />
            ),
            name: "React",
          },
          {
            icon: (
              <TbBrandNextjs className="text-white text-6xl transform transition-all duration-300 hover:scale-125" />
            ),
            name: "Next.js",
          },
          {
            icon: (
              <TbBrandNodejs className="text-[#659a60] text-6xl transform transition-all duration-300 hover:scale-125" />
            ),
            name: "Node.js",
          },
          {
            icon: (
              <SiTailwindcss className="text-[#00b6d7] text-6xl transform transition-all duration-300 hover:scale-125" />
            ),
            name: "Tailwind",
          },
          {
            icon: (
              <SiFlutter className="text-[#00b6e9] text-6xl transform transition-all duration-300 hover:scale-125" />
            ),
            name: "Flutter",
          },
          {
            icon: (
              <GrMysql className="text-[#50809f] text-6xl transform transition-all duration-300 hover:scale-125" />
            ),
            name: "MySQL",
          },
          {
            icon: (
              <SiMongodb className="text-[#00ee64] text-6xl transform transition-all duration-300 hover:scale-125" />
            ),
            name: "MongoDB",
          },
          {
            icon: (
              <SiFirebase className="text-[#ffa610] text-6xl transform transition-all duration-300 hover:scale-125" />
            ),
            name: "Firebase",
          },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center group">
            {item.icon}
            <span className="mt-2 text-gray-300 group-hover:text-white transition-colors duration-300">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center mt-20 p-8">
        <h1 className="font-bold md:text-4xl text-2xl font-mono text-gray-800">
          Check out my Profile at:
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <Link
            href={"https://github.com/rithikrajkumar4"}
            target="_blank"
            className="flex items-center justify-center p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-[1.02] group"
          >
            <FaGithub className="text-5xl text-white group-hover:text-[#34d399] transition-colors duration-300" />
            <span className="ml-4 text-xl text-white group-hover:text-[#34d399] transition-colors duration-300">
              Github/RithikRajkumar
            </span>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/rrk4/"}
            target="_blank"
            className="flex items-center justify-center p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-[1.02] group"
          >
            <FaLinkedin className="text-5xl text-[#0a66c2] group-hover:text-[#34d399] transition-colors duration-300" />
            <span className="ml-4 text-xl text-white group-hover:text-[#34d399] transition-colors duration-300">
              Linkedin/RithikRajkumar
            </span>
          </Link>
          <Link
            href={"https://www.hackerrank.com/xaviorpaul9"}
            target="_blank"
            className="flex items-center justify-center p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-[1.02] group"
          >
            <FaHackerrank className="text-5xl text-[#34c366] group-hover:text-[#34d399] transition-colors duration-300" />
            <span className="ml-4 text-xl text-white group-hover:text-[#34d399] transition-colors duration-300">
              HackerRank/RithikRajkumar
            </span>
          </Link>
          <Link
            href={"https://leetcode.com/xaviorpaul9/"}
            target="_blank"
            className="flex items-center justify-center p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-[1.02] group"
          >
            <SiLeetcode className="text-5xl text-[#ffa610] group-hover:text-[#34d399] transition-colors duration-300" />
            <span className="ml-4 text-xl text-white group-hover:text-[#34d399] transition-colors duration-300">
              Leetcode/RithikRajkumar
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolios;
