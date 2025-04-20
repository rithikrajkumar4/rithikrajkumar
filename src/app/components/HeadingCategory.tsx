import React from "react";

const HeadingCategory = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className=" scroll-smooth" id="services">
      <div className="flex flex-col items-center">
        <h1 className="md:text-7xl text-5xl font-serif font-bold">
          <u className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
            {title}.
          </u>
        </h1>
        <p className="m-16 mt-4 md:text-4xl text-2xl font-sans">{subtitle}.</p>
      </div>
    </div>
  );
};

export default HeadingCategory;
