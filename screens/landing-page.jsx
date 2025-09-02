import Header from "@/components/common/header";
import Services from "@/components/landing-page/services";
import Spotlight from "@/components/landing-page/spotlight";
import React from "react";

const LandingPage = () => {
  return (
    <div className="relative">
      <Header />
      <Spotlight />
      <Services />
    </div>
  );
};

export default LandingPage;
