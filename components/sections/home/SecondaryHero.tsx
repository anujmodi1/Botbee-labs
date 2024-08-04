"use client";

import React, { useRef } from "react";
import RegularCustomService from "@/public/RegularCustomerService.png";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const SecondaryHeroSection = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      let t1 = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top center",
          end: "bottom top",
          // restart each time it enters the viewport
          toggleActions: "restart pause resume pause",
        },
      });

      t1.fromTo(".box", { opacity: 0 }, { opacity: 1, duration: 0.5 });
      t1.fromTo(".car", { opacity: 0 }, { opacity: 1 }, "+=0.5");
    },
    {
      scope: container,
    }
  );

  return (
    <section className="block-space-large bg-mainDark text-white">
      <div className="container" ref={container}>
        <div className="text-center box mb-6 md:mb-8 lg:mb-16 space-y-4">
          <h2>
            Regular Customer Support Service <br /> can be Frustrating
          </h2>
          <span className="text-customMuted block">
            With traditional customer support services, you can face major
            issues like high <br /> operational cost, inconsistent quality, long
            response time and many more.
          </span>
        </div>
        <Image src={RegularCustomService} alt="" className="car" />
      </div>
    </section>
  );
};

export default SecondaryHeroSection;
