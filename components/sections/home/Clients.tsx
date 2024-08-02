import React from "react";
import ClientGirl from "@/public/ClientGirl.png";
import Image from "next/image";
import Quote, { QuoteIcon } from "lucide-react";
import SegmentIcon from "@/public/SegmentLogo.png";
import { FaQuoteLeft, FaStar } from "react-icons/fa6";

const ClientsSection = () => {
  return (
    <section className="block-space big-container">
      <h2 className="text-center mb-4 md:mb-6 lg:mb-8">
        Check what our <span className="text-blue">clients</span> are saying‍‍
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Image src={ClientGirl} alt="" />
        </div>
        <div className="content-center space-y-4">
          <div className="text-4xl text-[#5D5FEF]">
            <FaQuoteLeft />
          </div>
          <div className="flex gap-2 items-center text-yellow-400 text-2xl">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <h3 className="leading-relaxed">
            My company saved 36% cost using botbee. Really boy law county she
            unable her sister. Feet you off its like like six. Among sex are
            leave law built now.
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h4 className="text-blue">AR Shakir</h4>
              <span>CEO GetNextDesign</span>
            </div>
            <Image src={SegmentIcon} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
