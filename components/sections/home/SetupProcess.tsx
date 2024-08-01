import Image from "next/image";
import React from "react";
import IconGrid from "@/public/IconGrid.png";
import One from "@/public/1.png";
import { cn } from "@/lib/utils";

const SetupProcess = () => {
  return (
    <section className="bg-mainDark text-white block-space">
      <div className="container">
        <h2>Easy to setup Process</h2>
        <span>
          Step by step process to train your Avatar. Select your preferable
          language and favourite Avatar. Upload the files regarding your website
          and train your bot.
        </span>

        <GridItem
          heading="Choose your preferable language from the huge language library"
          image={IconGrid}
          backgroundImage={One}
        />

        <GridItem
          heading="Choose your preferable language from the huge language library"
          image={IconGrid}
          backgroundImage={One}
          imageLeft={false}
        />
      </div>
    </section>
  );
};

export default SetupProcess;

function GridItem({
  heading,
  image,
  backgroundImage,
  imageLeft = true,
}: {
  heading: string;
  image: any;
  backgroundImage: any;
  imageLeft?: boolean;
}) {
  return (
    <div
      className={cn("flex flex-col md:flex-row gap-4", {
        "md:flex-row-reverse": !imageLeft,
      })}
    >
      <div className="flex-1">
        <Image src={image} alt="" />
      </div>
      <div className="relative overflow-hidden flex-1">
        <div className="z-10 absolute content-center inset-0">
          <h2>{heading}</h2>
        </div>
        <div className="">
          <Image src={backgroundImage} alt="" className="mx-auto" />
        </div>
      </div>
    </div>
  );
}
