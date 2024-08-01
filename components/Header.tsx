import React from "react";
import BotbeeWhiteLogo from "@/public/BotbeeWhiteLogo.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export const navLinks = [
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "Benefits",
    href: "/benefits",
  },
  {
    label: "Testimonials",
    href: "/testimonials",
  },
  {
    label: "How to Use",
    href: "/how-to-use",
  },
  {
    label: "Demo",
    href: "/demo",
  },
];

const Header = () => {
  return (
    <header>
      <Image src={BotbeeWhiteLogo} width={100} height={100} alt="" />
      <nav>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <Button>Sign In</Button>
    </header>
  );
};

export default Header;
