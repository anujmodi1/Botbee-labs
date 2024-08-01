import Image from "next/image";
import React from "react";
import BlurImage from "@/public/Blur.png";
import { Button } from "@/components/ui/button";

const ExistingPlatforms = () => {
  return (
    <section className="container block-space grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h2>Integrate with your existing platforms</h2>
        <p>
          Integrate Siena with your help desk with one click and start using
          your autonomous customer service with minimal setup. Get your AI
          superhuman up and running 90% faster and more efficient than the
          average automation tools.
        </p>

        <Button>Coming Soon</Button>
      </div>
      <div>
        <Image src={BlurImage} alt="" />
      </div>
    </section>
  );
};

export default ExistingPlatforms;
