import React from "react";

const HeadingCategory = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="" id="services">
      <div className="flex flex-col items-center">
        <h1 className="text-7xl font-serif font-bold">
          <u className="">{title}.</u>
        </h1>
        <p className="m-16 mt-4 text-4xl font-sans">{subtitle}.</p>
      </div>
    </div>
  );
};

export default HeadingCategory;
