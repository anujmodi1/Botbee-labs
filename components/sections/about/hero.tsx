import { Button } from "@/components/ui/button";
import React from "react";

const AboutHeroSection = () => {
  return (
    <section className="block-space bg-mainDark">
      <div className="container">
        <h1>Your only AI Twin who knows your customers better than them</h1>
        <span className="text-customMuted">
          Save up to 50% Cost with our Multilingual Customer Support Avatar. It
          aims to revolutionize the B2B customer support sector.
        </span>
        <Button>Build your Avatar</Button>
        <Button>Learn More</Button>
      </div>
    </section>
  );
};

export default AboutHeroSection;
