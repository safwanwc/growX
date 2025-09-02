import Image from "next/image";
import React from "react";

const Progressbar = ({ project }) => {
  // const progressPercent = Math.round(project.progress * 100);
  const progressPercent = project.progress;
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold text-[18px] md:text-[20px] lg:text-[22px]">
          {project.name}
        </span>
        <span className="font-semibold text-[18px] md:text-[20px] lg:text-[22px]">
          {project.right}
        </span>
      </div>
      <div className="relative h-[38px]">
        <div className="absolute left-0 top-[22px] w-full h-[4px] bg-[#FFE5DB] rounded-full"></div>
        <div
          className="absolute left-0 top-[22px] h-[4px] bg-[#FE4A0F] rounded-full"
          style={{ width: `${progressPercent}%` }}
        ></div>
        <div
          className="absolute flex flex-col items-center"
          style={{
            left: `calc(${progressPercent}% )`,
            top: "-38px",
            transform: "translate(-50%, 0)",
            width: "48px",
          }}
        >
          <div className="flex flex-col items-center relative">
            <Image
              className="w-[60px]"
              src={"/icons/progress-indication.svg"}
              alt="Progress"
              width={100}
              height={100}
            />
            <span className="percent absolute left-1/2 top-1/4 -translate-x-1/2 text-[14px]">
              {progressPercent}%
            </span>
          </div>
          <div
            className="w-4 h-4 bg-[#FE4A0F] rounded-full border-0 shadow-md"
            style={{
              marginTop: "2px",
              boxShadow: "0 2px 6px 0 rgba(0,0,0,0.08)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Progressbar;
