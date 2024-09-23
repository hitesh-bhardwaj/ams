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
import Hero from "@/components/Hero";
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function career() {
  const hero = {
    line1: "Join Our Mission to Create a ",
    line2: "Healthier World",
    mobileTitle:"Join Our Mission to Create a Healthier World",
    src: "/assets/career/career-bg.png",
    content:
      "Be a part of a team making a meaningful difference in healthcare.",
  };

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
        <Hero
          line1={hero.line1}
          line2={hero.line2}
          src={hero.src}
          mobileTitle={hero.mobileTitle}
          content={hero.content}
          className="block"
          titleColor = "text-black"
        />
        <Work />
        <Jobs />
        <Discover />
      </main>
      <Footer />
      <Transition />
    </>
  );
}
