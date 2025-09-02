import Image from "next/image";
import React from "react";
import Progressbar from "../common/progressbar";

const Projects = () => {
  // More accurate, dynamic, and realistic data
  const projects = [
    {
      name: "International Authority",
      right: "$4000",
      progress: 80,
    },
    {
      name: "Real Authority Method",
      right: "12 Month",
      progress: 60,
    },
  ];

  return (
    <section id="projects">
      <div className="wrapper py-[50px] flex gap-10">
        <div className="left w-1/2">
          <span className="text-[#FE4A0F] text-[18px]">Our Projects</span>
          <h2 className="text-[58px] font-poppins font-semibold leading-[1.1]">
            Drive More Traffic, Get More Sales
          </h2>
          <p className="mt-4 text-[18px]">
            We help businesses grow their online presence and increase sales
            through proven digital marketing strategies. Our recent projects
            have delivered measurable results for clients worldwide.
          </p>
          <ul className="progresses">
            {projects.map((project, i) => (
              <li key={i}>
                <Progressbar project={project} />
              </li>
            ))}
          </ul>
        </div>
        <div className="right w-1/2">
          <Image
            src={"/images/growth-strategies.png"}
            alt={"Growth strategy"}
            width={600}
            height={600}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
