import Image from "next/image";
import React from "react";
import BotbeeWhiteLogo from "@/public/BotbeeWhiteLogo.png";
import Link from "next/link";
import NewsletterFooterForm from "./forms/NewsletterFooterForm";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="block-space bg-mainDark text-white">
      <div className="container">
        <div>
          <div>
            <Image src={BotbeeWhiteLogo} width={100} height={100} alt="" />
            <span className="text-customMuted">
              Sava up to 50% Cost with our Multilingual Customer Support Avatar
            </span>
          </div>
          <div>
            <h4>Company</h4>
            <Link href={"/"}>About Us</Link>
            <Link href={"/"}>Product</Link>
            <Link href={"/"}>Pricing</Link>
          </div>
          <div>
            <h4>Legal</h4>
            <Link href={"/"}>Privacy Policy</Link>
            <Link href={"/"}>Terms of Use</Link>
            <Link href={"/"}>Terms of Service</Link>
          </div>
          <div>
            <h4>Join Our Newsletter</h4>
            <NewsletterFooterForm />
          </div>
        </div>
        <Separator />
        <span>Copyright @ Botbee 2024. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
