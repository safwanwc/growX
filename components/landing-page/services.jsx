import React from "react";
import Button from "../common/button";
import Image from "next/image";

const SERVICES = [
  {
    title: "SEO (Search Engine Optimization)",
    description:
      "We can help you achieve high rankings in the major search engines.",
    icon: "/icons/services/seo.svg",
  },
  {
    title: "SMM (Social Media Marketing)",
    description:
      "We can help you achieve high rankings in the major search engines.",
    icon: "/icons/services/smm.svg",
  },
  {
    title: "Website Design & Development",
    description:
      "We can help you achieve high rankings in the major search engines.",
    icon: "/icons/services/webdev.svg",
  },
  {
    title: "Email Marketing & PPC Marketing",
    description:
      "We can help you achieve high rankings in the major search engines.",
    icon: "/icons/services/email-ppc.svg",
  },
];

const Services = () => {
  return (
    <section id="services">
      <div className="wrapper py-[50px]">
        <div className="top">
          <h2 className="text-[42px] font-poppins ">
            Our Digital Marketing Services
          </h2>
          <p className="my-[14px]">
            Unveiling Comprehensive Solutions Through Our Cutting-Edge Digital
            Marketing Services
          </p>
          <Button>VIEW ALL SERVICES</Button>
        </div>
        <div className="services mt-10">
          <ul className="flex items-stretch justify-between gap-10">
            {SERVICES.map((service, i) => (
              <li
                key={i}
                className="service bg-[#FFEFEA] rounded-2xl p-5 flex flex-col h-full min-h-[150px] w-full max-w-[300px] relative"
                style={{ boxSizing: "border-box" }}
              >
                <span className="icon mb-3 flex items-center">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={33}
                    height={30}
                  />
                </span>
                <span className="title font-semibold text-[19px] leading-tight mb-2 font-poppins block">
                  {service.title}
                </span>
                <span className="description text-[15px] text-[#333] font-poppins mb-2 block">
                  {service.description}
                </span>
                <span className="absolute left-1/2 -translate-x-1/2 bottom-[-22px] flex items-center justify-center w-[40px] h-[40px] rounded-full bg-white shadow-md z-10">
                  <Image
                    src="/icons/right-arrow.svg"
                    alt="arrow"
                    width={20}
                    height={20}
                  />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
