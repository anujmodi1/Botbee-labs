import Image from "next/image";
import React from "react";
import IconGrid from "@/public/IconGrid.png";
import One from "@/public/1.png";
import Two from "@/public/2.png";
import Three from "@/public/3.png";
import Four from "@/public/4.png";
import PdfCircle from "@/public/pdfCircle.png";
import MeetTeam from "@/public/MeetTeamNull.png";
import { cn } from "@/lib/utils";
import ChatGirl from "@/public/ChatGirl.png";

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
          heading="Pick your favourite Avatar based on your preference"
          image={IconGrid}
          backgroundImage={One}
          imageLeft={false}
        />

        <GridItem
          heading="Pick your favourite Avatar based on your preference"
          image={MeetTeam}
          backgroundImage={Two}
        />

        <GridItem
          heading="Test your avatar and copy the link to upload in your website"
          image={PdfCircle}
          backgroundImage={Three}
          imageLeft={false}
        />
        <GridItem
          heading="Test your avatar and copy the link to upload in your website"
          image={ChatGirl}
          backgroundImage={Four}
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
