import Image from "next/image";
import React from "react";
import BotbeeWhiteLogo from "@/public/BotbeeWhiteLogo.png";
import Link from "next/link";
import NewsletterFooterForm from "./forms/NewsletterFooterForm";
import { Separator } from "./ui/separator";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="block-space bg-mainDark text-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div>
            <Image src={BotbeeWhiteLogo} width={200} height={200} alt="" />
            <span className="text-customMuted">
              Sava up to 50% Cost with our Multilingual Customer Support Avatar
            </span>
            <FaXTwitter className="text-customMuted text-xl mt-2" />
          </div>
          <div className="space-y-2">
            <h4>Company</h4>
            <Link href={"/"} className="block">
              About Us
            </Link>
            <Link href={"/"} className="block">
              Product
            </Link>
            <Link href={"/"} className="block">
              Pricing
            </Link>
          </div>
          <div className="space-y-2">
            <h4>Legal</h4>
            <Link href={"/"} className="block">
              Privacy Policy
            </Link>
            <Link href={"/"} className="block">
              Terms of Use
            </Link>
            <Link href={"/"} className="block">
              Terms of Service
            </Link>
          </div>
          <div>
            <h4 className="mb-4 md:mb-6 lg:mb-8">Join Our Newsletter</h4>
            <NewsletterFooterForm />
          </div>
        </div>
        <Separator className="my-4" />
        <span className="text-sm text-center block">
          Copyright @ Botbee 2024. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
