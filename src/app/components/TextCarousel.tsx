import React from "react";

const TextCarousel = ({ title }: { title: string }) => {
  return (
    <div className="my-[100px] text-9xl font-sans font-bold flex text-green-600 scroll-smooth">
      <div className="rra-w">
        <div className="rra">
          <span>{title}&nbsp;</span>
        </div>
        <div className="rra rra2">
          <span>{title}&nbsp;&nbsp;</span>
        </div>
      </div>
    </div>
  );
};

export default TextCarousel;
