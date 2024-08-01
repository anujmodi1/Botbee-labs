import React from "react";
import Map from "@/public/Map.png";
import Image from "next/image";

const WorldMapSection = () => {
  return (
    <section className="container block-space">
      <h2>Why Personalized Customer Engagement is a High Priority in 2024</h2>
      <Image src={Map} alt="" />
      <div className="grid grid-cols-4 gap-4">
        <GridItem
          heading="$27 billion"
          description="could be the size of global chatbot market by the year 2030"
        />
        <GridItem
          heading="$27 billion"
          description="could be the size of global chatbot market by the year 2030"
        />
        <GridItem
          heading="$27 billion"
          description="could be the size of global chatbot market by the year 2030"
        />
        <GridItem
          heading="$27 billion"
          description="could be the size of global chatbot market by the year 2030"
        />
      </div>
    </section>
  );
};

export default WorldMapSection;

function GridItem({
  heading,
  description,
}: {
  heading: string;
  description: string;
}) {
  return (
    <div>
      <h2>{heading}</h2>
      <p>{description}</p>
    </div>
  );
}
