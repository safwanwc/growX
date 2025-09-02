import Image from "next/image";
import React from "react";
import Button from "../common/button";

const Spotlight = () => {
  return (
    <section id="spotlight">
      <div className="wrapper py-[50px] flex items-center">
        <div className="left w-1/2">
          <h1 className=" text-[100px] font-poppins font-semibold leading-[1.1] relative">
            Unlock Your{" "}
            <span className="font-semibold text-[#FE4A0F]">
              Online
              <br />
              Marketing
            </span>
            <span className="absolute right-[60px] top-[-32px]">
              <Image
                src="/icons/spotlight/star.svg"
                alt="Star"
                width={59}
                height={57}
              />
            </span>
          </h1>
          <p className="mt-6 text-[20px] font-poppins ">
            Empowering Success: Unleashing Strategic Excellence with Our
            Results-Driven Digital Marketing Agency
          </p>
          <Button className="mt-10">GET IN TOUCH</Button>
        </div>
        <div className="right w-1/2">
          <Image
            src="/images/spotlight-hero.png"
            alt="Spotlight"
            className="mx-auto"
            width={600}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
