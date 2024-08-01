import { Button } from "@/components/ui/button";
import React from "react";

const ConsultationSection = () => {
  return (
    <section className="blue-gradient block-space container rounded-lg text-white">
      <h2>Book your Free Consultation Call Today!</h2>
      <span>
        Our platform is designed to scale effortlessly, allowing businesses to
        expand their support capabilities as they grow.
      </span>
      <Button variant={"secondary"}>Book a Call Now</Button>
    </section>
  );
};

export default ConsultationSection;
