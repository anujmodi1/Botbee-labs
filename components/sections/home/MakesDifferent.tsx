import React from "react";

const MakesDifferent = () => {
  return (
    <section className="block-space container">
      <div>
        <h2>
          What makes us Different from an <br /> Ordinary Customer Support?{" "}
        </h2>
        <span>
          Unlock the essence of our offerings with these key highlights,
          showcasing the most impactful features and benefits tailored for you.
        </span>
      </div>

      <GridItem />
    </section>
  );
};

export default MakesDifferent;

const GridItem = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h3>Personalized Interactions & Brand Customization</h3>
        <p>
          Use customer data to personalize interactions, making the chatbot feel
          more like a human assistant. Allow deep customization of the
          chatbot&apos;s appearance and conversational tone to match the brand
          identity.
        </p>
      </div>
      <div></div>
    </div>
  );
};
