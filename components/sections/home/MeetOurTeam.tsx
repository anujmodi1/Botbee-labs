import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import TeamPortrait from "@/public/3d-portrait-people 1.png";

const MeetOurTeam = () => {
  return (
    <section className="container block-space rounded-lg border-2">
      <h2>Meet Our Team‍️</h2>
      <span>
        Get 6 different personalities to guide your users. This Avatars can
        assist your users like a human. Offer a better user experience with our
        different Avatars.
      </span>
      <Button>Build your Avatar</Button>
      <Image src={TeamPortrait} alt="" />
    </section>
  );
};

export default MeetOurTeam;
