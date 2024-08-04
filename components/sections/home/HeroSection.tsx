import { Button } from "@/components/ui/button";
import { LucideAtom } from "lucide-react";
import React from "react";
import Placeholder from "@/public/placeholder.png";
import Image from "next/image";
import AvatarHeroGroup from "@/public/AvatarHeroGroup.png";

const HeroSection = () => {
  return (
    <section className="block-space-large bg-mainDark text-white">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="content-center space-y-4">
          <span className="flex items-center gap-2">
            {" "}
            <LucideAtom className="text-blue text-4xl" />
            AI-Powered Voice Assistant 24/7 at your Service
          </span>
          <h1>
            Your{" "}
            <span className="text-blue">
              only AI Twin who <br /> knows
            </span>{" "}
            your customers better than them
          </h1>
          <span className="text-customMuted block">
            Save up to 50% Cost with our Multilingual Customer Support Avatar.
            It aims to revolutionize the B2B customer support sector.
          </span>
          <div className="flex flex-col md:flex-row gap-4">
            <Button
              className="rounded-full font-semibold"
              variant={"secondary"}
              size={"lg"}
            >
              Build your Avatar
            </Button>
            <Button
              className="rounded-full font-semibold border-white border-2"
              size={"lg"}
            >
              Learn More
            </Button>
          </div>
          <div className="flex gap-4 mt-4 items-center">
            <h4>50+</h4>
            <h4>Happy Customers</h4>
            <Image src={AvatarHeroGroup} alt="" />
          </div>
        </div>
        <div>
          <Image src={Placeholder} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
