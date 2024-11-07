/* eslint-disable react-hooks/rules-of-hooks */
import Discover from "@/components/Career/Discover";
import Jobs from "@/components/Career/Jobs";
import Work from "@/components/Career/Work";
import Header from "@/components/Header";
import Transition from "@/components/Transition";
import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import Hero from "@/components/Career/Hero";
import Layout from "@/components/Layout";

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
  const [smoother, setSmoother] = useState(null);
  useEffect(() => {
    const initializeScrollSmoother = async () => {
      if (window.innerWidth >= 1024) {
        const { default: ScrollSmoother } = await import(
          "@/components/ScrollSmoother.min.js"
        );
        gsap.registerPlugin(ScrollSmoother);

        const smootherInstance = ScrollSmoother.create({
          smooth: 1,
          effects: true,
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
        });
        setSmoother(smootherInstance);
      }
    };
    initializeScrollSmoother();

    return () => {
      smoother && smoother.kill();
    };
  }, [smoother]);
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Layout>
            <main>
              <Hero />
              <Work />
              <Jobs />
              <Discover />
            </main>
          </Layout>
        </div>
      </div>
      <Transition />
    </>
  );
}
