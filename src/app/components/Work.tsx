"use  client";
import React, { useState } from "react";

import HeadingCategory from "./HeadingCategory";
import WorkCarousel from "../Client/WorkCarousel";

const Work = () => {
  return (
    <div className="mt-20">
      <HeadingCategory title="Work" subtitle="My Works" />
      <div>
        <WorkCarousel />
      </div>
    </div>
  );
};

export default Work;
