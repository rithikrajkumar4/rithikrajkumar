import React from "react";

const TextCarousel = ({ title }: { title: string }) => {
  return (
    <div className="my-[100px] text-9xl font-sans font-bold flex scroll-smooth">
      <div className="rra-w">
        <div className="rra">
          <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
            {title}&nbsp;
          </span>
        </div>
        <div className="rra rra2">
          <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
            {title}&nbsp;&nbsp;
          </span>
        </div>
      </div>
    </div>
  );
};

export default TextCarousel;
