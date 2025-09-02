import Header from "@/components/common/header";
import AwardWinning from "@/components/landing-page/award-winning";
import Feature from "@/components/landing-page/feature";
import OurStory from "@/components/landing-page/our-story";
import Projects from "@/components/landing-page/projects";
import Services from "@/components/landing-page/services";
import Spotlight from "@/components/landing-page/spotlight";
import React from "react";

const LandingPage = () => {
  return (
    <div className="relative">
      <Header />
      <Spotlight />
      <Services />
      <OurStory />
      <Projects />
      <Feature />
      <AwardWinning />
    </div>
  );
};

export default LandingPage;
