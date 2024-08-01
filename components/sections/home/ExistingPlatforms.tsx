import Image from "next/image";
import React from "react";
import BlurImage from "@/public/Blur.png";
import { Button } from "@/components/ui/button";

const ExistingPlatforms = () => {
  return (
    <section className="container block-space">
      <div>
        <h2>Integrate with your existing platforms</h2>
        <span>
          Integrate Siena with your help desk in 1click and start using your autonomous customer service with minimal setup. Get your AI superhuman up and running 90% faster and more efficient than the average automation tools.
        </span>
        <Button>Coming Soon</Button>
      </div>
      <div>
        <Image src={BlurImage} alt="" />
      </div>
    </section>
  );
};

export default ExistingPlatforms;
