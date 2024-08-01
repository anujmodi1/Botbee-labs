import React from "react";
import ClientGirl from "@/public/ClientGirl.png";
import Image from "next/image";
import Quote, { QuoteIcon } from "lucide-react";
import SegmentIcon from "@/public/SegmentLogo.png";

const ClientsSection = () => {
  return (
    <section className="block-space big-container">
      <h2>Check what our clients are saying‍‍</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Image src={ClientGirl} alt="" />
        </div>
        <div>
          <QuoteIcon />
          <h3>
            My company saved 36% cost using botbee. Really boy law county she
            unable her sister. Feet you off its like like six. Among sex are
            leave law built now.
          </h3>
          <h4>AR Shakir</h4>
          <span>CEO GetNextDesign</span>
          <Image src={SegmentIcon} alt="" />
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
