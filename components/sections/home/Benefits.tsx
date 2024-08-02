import Image from "next/image";
import React from "react";
import BenefitsLeft from "@/public/BenefitsLeft.png";

const BenefitSection = () => {
  return (
    <section className="block-space big-container grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Image src={BenefitsLeft} alt="" />
      </div>
      <div className="space-y-4 md:space-y-6 lg:space-y-8">
        <h2>
          <span className="text-blue">A Top-notch Product</span> with <br />
          Interesting Benefits{" "}
        </h2>
        <p>
          By automating customer support with AI avatars, businesses can
          significantly reduce the costs associated with hiring and training
          multilingual support staff.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <GridItem
            heading="50%"
            tagline="Average Cost Savings"
            description="Save a big amount and get an immersive experience at the same time with the Avatars."
          />
          <GridItem
            heading="24/7"
            tagline="Customer Support"
            description="Advanced AI chatbots can handle a large volume of inquiries round the clock, offering consistent and instant responses."
          />
          <GridItem
            heading="0.4 sec"
            tagline="average response time"
            description="Another unique feature is real-time data analysis and instant decision-making."
          />
          <GridItem
            heading="6"
            tagline="Different Personalities"
            description="Get 6 different personalities to guide your users. This Avatars can assist your users like a human."
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;

function GridItem({
  heading,
  description,
  tagline,
}: {
  heading: string;
  tagline: string;
  description: string;
}) {
  return (
    <div>
      <h3>{heading}</h3>
      <h4>{tagline}</h4>
      <span>{description}</span>
    </div>
  );
}
