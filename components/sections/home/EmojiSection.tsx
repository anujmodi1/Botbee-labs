"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    emoji: "😋",
    label: "Mindful",
  },
  {
    emoji: "😃",
    label: "Accurate",
  },
  {
    emoji: "🤗",
    label: "Helpful",
  },
  {
    emoji: "😎",
    label: "Personalized",
  },
  {
    emoji: "😚",
    label: "Secure",
  },
];

const secondaryData = [
  {
    emoji: "😋",
    label: "Trained",
  },
  {
    emoji: "🫡",
    label: "Humble",
  },
  {
    emoji: "😜",
    label: "Customizable",
  },
  {
    emoji: "😍",
    label: "Insightful",
  },
  {
    emoji: "😎",
    label: "Friendly",
  },
  {
    emoji: "😏",
    label: "Secure",
  },
];

const EmojiSection = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".tech-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 4,
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <section className="overflow-hidden block-space " ref={container}>
      <div className="space-y-4">
        <div className="tech-row flex gap-4 items-center justify-center">
          {Array.from({ length: 10 }, (_, index) => {
            return (
              <React.Fragment key={index}>
                {data.map((item, index) => (
                  <EmojiCardData
                    key={index}
                    emoji={item.emoji}
                    label={item.label}
                    classname="tech-item"
                  />
                ))}
              </React.Fragment>
            );
          })}
        </div>
        <div className="tech-row flex gap-4 items-center justify-center">
          {Array.from({ length: 10 }, (_, index) => {
            return (
              <React.Fragment key={index}>
                {data.map((item, index) => (
                  <EmojiCardData
                    key={index}
                    emoji={item.emoji}
                    label={item.label}
                    classname="tech-item"
                  />
                ))}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EmojiSection;

function EmojiCard() {
  return (
    <div className="flex gap-2 items-center">
      <div className="rounded-full border-2 p-2">😋</div>
      <div className="rounded-full border-2 px-4 py-2">Smart</div>
    </div>
  );
}

function EmojiCardData({
  emoji,
  label,
  classname,
}: {
  emoji: string;
  label: string;
  classname?: string;
}) {
  return (
    <div className={cn("flex gap-2 items-center", classname)}>
      <div className="rounded-full border-2 p-2">{emoji}</div>
      <div className="rounded-full border-2 px-6 py-2">{label}</div>
    </div>
  );
}
