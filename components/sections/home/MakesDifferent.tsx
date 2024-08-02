import Image from "next/image";
import React from "react";
import PersonalizedInteraction from "@/public/PersonalizedInteraction.png";
import { cn } from "@/lib/utils";
import AiDrivenChat from "@/public/AI-DrivenChat.png";
import AiVoice from "@/public/AiVoice.png";
import BestAnswerChat from "@/public/BestAnswerChat.png";
import RealHumanChat from "@/public/RealHumanChat.png";

const MakesDifferent = () => {
  return (
    <section className="block-space container">
      <div className="text-center mb-6 md:mb-8 lg:mb-12 space-y-4">
        <h2>
          What makes us <span className="text-blue">Different</span> from an{" "}
          <br /> Ordinary Customer Support?{" "}
        </h2>
        <span className="block text-customMuted text-sm">
          Unlock the essence of our offerings with these key highlights,
          showcasing <br /> the most impactful features and benefits tailored
          for you.
        </span>
      </div>

      <div className="space-y-12">
        <GridItem
          imageLeft={false}
          image={PersonalizedInteraction}
          heading="Personalized Interactions & Brand Customization"
          description="Use customer data to personalize interactions, making the chatbot feel
          more like a human assistant. Allow deep customization of the
          chatbot's appearance and conversational tone to match the brand
          identity."
        />

        <GridItem
          imageLeft={true}
          image={AiDrivenChat}
          heading="Get AI-Driven Insights during Conversation"
          description="The AI avatar collects and analyzes customer interaction data to provide valuable insights into customer preferences, behavior, and common queries. This feature provides a human-like conversation between the user and our Avatar. Where AI can give suggestions to the user during communication."
        />
        <GridItem
          imageLeft={false}
          image={AiVoice}
          heading="Advanced Real-time Voice Communication"
          description="You can talk with Agents by typing in your question in the text input box, or by clicking the microphone icon and talking with the Agent just like you would talk with another person."
        />

        <GridItem
          imageLeft={true}
          image={BestAnswerChat}
          heading="Provides the Best Answer based on Customer feedbacks"
          description="RLHF enhances an agent's decision-making by incorporating nuanced human insights, leading to improved performance and faster learning. This approach is particularly useful for handling complex tasks that are difficult to encode with traditional reward functions."
        />

        <GridItem
          imageLeft={false}
          image={RealHumanChat}
          heading="Communicate with Real Human for Extra Enquiry"
          description="This feature Implement a seamless transition from Al to human agents for complex queries. Incorporate mechanisms to flag Al errors and involve human agents for corrections."
        />
      </div>
    </section>
  );
};

export default MakesDifferent;

const GridItem = ({
  heading,
  description,
  image,
  imageLeft = true,
}: {
  heading: string;
  description: string;
  imageLeft: boolean;
  image: any;
}) => {
  return (
    <div
      className={cn("flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12", {
        "md:flex-row-reverse": imageLeft,
      })}
    >
      <div className="flex-1 content-center">
        <h3>{heading}</h3>
        <p>{description}</p>
      </div>
      <div className="flex-1">
        <Image src={image} alt="" />
      </div>
    </div>
  );
};
