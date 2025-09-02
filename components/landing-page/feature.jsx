import React from "react";
import Button from "../common/button";

const FEATURES = [
  {
    title: "Detailed analytics",
    descriptions: [
      "See the full picture of all your projects in one place and take action immediately.",
      "Our extensive tool will help you maximize the profits and scale your business.",
    ],
    button: "GET STARTED",
  },
  {
    title: "Leads sources",
    descriptions: [
      "Discover where all your converted leads are from and take action into the right direction.",
      "Grow your audience using the channel that drives most of traffic.",
    ],
    button: "GET STARTED",
  },
  {
    title: "Projects overview",
    descriptions: [
      "Track and manage and manage all projects very easy without back and forth.",
      "Discover who is working on what and see your team members performance.",
    ],
    button: "GET STARTED",
  },
];

const Feature = () => {
  return (
    <section id="feature">
      <div className="wrapper py-[50px]">
        <span className="text-[#FE4A0F] text-[18px]">Our Feature</span>
        <h2 className="text-[58px] font-poppins font-semibold leading-[1.1]">
          Optimizing Brands For Online Success
        </h2>
        <ul className="features mt-10 flex items-stretch justify-between gap-10">
          {FEATURES.map((feature, i) => (
            <li
              key={i}
              className="feature bg-[#FFEFEA] rounded-2xl p-5 h-full min-h-[150px] w-full relative"
              style={{ boxSizing: "border-box" }}
            >
              <span className="title font-semibold text-[20px] leading-tight mb-4 font-poppins block">
                {feature.title}
              </span>
              <div className="description text-[16px] text-[#333] font-poppins block mb-8">
                {feature.descriptions.map((desc, idx) => (
                  <p key={idx} className="mb-2">
                    {desc}
                  </p>
                ))}
              </div>
              <Button>GET STARTED</Button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Feature;
