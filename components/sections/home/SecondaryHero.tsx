import React from "react";
import RegularCustomService from "@/public/RegularCustomerService.png";
import Image from "next/image";

const SecondaryHeroSection = () => {
  return (
    <section className="block-space bg-mainDark text-white">
      <div className="container">
        <div className="text-center mb-6 md:mb-8 lg:mb-16 space-y-4">
          <h2>
            Regular Customer Support Service <br /> can be Frustrating
          </h2>
          <span className="text-customMuted block">
            With traditional customer support services, you can face major
            issues like high <br /> operational cost, inconsistent quality, long
            response time and many more.
          </span>
        </div>
        <Image src={RegularCustomService} alt="" />
      </div>
    </section>
  );
};

export default SecondaryHeroSection;
