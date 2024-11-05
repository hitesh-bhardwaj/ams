/* eslint-disable react-hooks/rules-of-hooks */
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Genesis from "@/components/layoutComponents/Genesis";
import Capabilities from "@/components/Manufacturing/Capabilities";
import Discover from "@/components/Manufacturing/Discover";
import State from "@/components/Manufacturing/State";
import Transition from "@/components/Transition";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import Hero from "@/components/Hero";
import StickyCards from "@/components/Manufacturing/State";
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function manufacturing() {
  const content = {
    heading: "Manufacturing",
    smallpara:
      "AMS operates a facility designed with LEED-certified principles to minimize environmental impact, incorporating green manufacturing practices such as energy-efficient operations, responsible waste management, wastewater recycling, and utilization of solar energy for electricity generation. This comprehensive approach underscores our commitment to sustainable manufacturing practices and environmental stewardship.",
    bigpara:
      "We prioritize rigorous R&D and adhere to global standards, guaranteeing our products meet the highest quality and innovation benchmarks in the industry.",
    src: "/assets/manufacturing/manufacturing.png",
  };
  const hero = {
   title:"Commitment To Global Standards",
    src:"/assets/manufacturing/manufacturing-hero.png",
    content:"The eco-friendly AMS facility is equipped to produce cutting edge medical devices that meet the most stringent global specifications."
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      const fadeUps = document.querySelectorAll(".fadeUp");
      fadeUps.forEach((fadeUp) => {
        gsap.fromTo(
          fadeUp,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.3,
            ease: "Power3.out",
            scrollTrigger: {
              trigger: fadeUp,
              start: "top 85%",
            },
          }
        );
      });
    });
    return () => ctx.revert();
  });

  return (
    <>
      <Header />
      <main>
        <Hero title={hero.title} src={hero.src} content={hero.content} className="hidden"/>
        <Genesis content={content} />
        <Capabilities />
        <State />
        <Discover />
        {/* <StickyCards/> */}
      </main>
      <Footer />
      <Transition />
    </>
  );
}
