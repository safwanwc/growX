import React from "react";
import Button from "../common/button";
import Image from "next/image";

const CLIENTS = [
  "/icons/clients/client-01.svg",
  "/icons/clients/client-02.svg",
  "/icons/clients/client-03.svg",
  "/icons/clients/client-04.svg",
  "/icons/clients/client-05.svg",
];

const OurStory = () => {
  return (
    <section id="our-story">
      <div className="wrapper py-[50px]">
        <div className="top">
          <h2 className="text-[48px] font-poppins ">Our Story</h2>
          <p className="text-[24px] mt-3">
            Crafting Narratives, Igniting Impact: The Art of Amplifying Your
            Story with Purposeful Creativity
          </p>
        </div>
        <div className="content flex gap-10 mt-10">
          <div className="left w-1/2">
            <p className="text-[20px]">
              GrowX Company, a dynamic force in the marketing landscape, was
              born from the vision of industry pioneers dedicated to redefining
              brand narratives. Established in 2010, GrowX swiftly evolved into
              a trailblazing marketing powerhouse, specializing in strategic
              amplification of brands across diverse platforms. With a
              client-centric approach, the company has cultivated lasting
              partnerships by seamlessly blending creativity with data-driven
              insights.
            </p>
            <Button className="mt-8">WATCH MORE</Button>
          </div>
          <div className="right w-1/2">
            <Image
              src="/images/story-hero.png"
              className="w-full"
              alt="Our Story"
              width={600}
              height={400}
            />
          </div>
        </div>
        <div className="clients mt-16">
          <ul className="flex items-center justify-between gap-10">
            {CLIENTS.map((src, i) => (
              <li key={i} className="client w-full max-w-[150px]">
                <Image
                  src={src}
                  alt={`Client ${i + 1}`}
                  width={150}
                  height={50}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
