/* eslint-disable react-hooks/rules-of-hooks */
import Discover from "@/components/Career/Discover";
import Jobs from "@/components/Career/Jobs";
import Work from "@/components/Career/Work";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Transition from "@/components/Transition";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import Hero from "@/components/Career/Hero";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function career() {
  
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
        <Hero/>
        <Work />
        <Jobs />
        <Discover />
      </main>
      <Footer />
      <Transition />
    </>
  );
}
