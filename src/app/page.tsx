import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NBS - Nebras Business Solutions",
  description: "Ultimate software development solutions",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <AboutSectionOne />
      <Brands />
      <AboutSectionTwo />
      <Contact />
    </>
  );
}
