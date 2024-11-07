/* eslint-disable react-hooks/rules-of-hooks */
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Edge from "@/components/Products/Edge";
import Features from "@/components/Products/Features";
import Hero from "@/components/Products/Hero";
import NextGeneration from "@/components/Products/NextGeneration";
import ProductDescription from "@/components/Products/ProductDescription";
import Uncover from "@/components/Products/Uncover";
import Transition from "@/components/Transition";
import React, { useEffect, useState } from "react";
import { fadeUp } from "@/components/gsapAnimations";
import Layout from "@/components/Layout";

const EdgeCard = {
  card1: {
    title: "Swage Point Integrity",
    src: "/assets/advacryl/magnifying-glass.png",
    para: "Advanced Tipping",
  },
  card2: {
    title: "- the confidence to suture with ease",
    src: "/assets/advapd/advapdtray.png",
    para: " patented dispensing system designed to deliver ease of suture dispensing with minimal memory in the suture strand.",
    bgsrc: "/assets/advapd/advapd-rectangle.png",
  },
  card3: {
    title: "Knot Pull Tensile Strength",
    src: "/assets/advapd/advapd-graph.png",
    para: "Advanced Tipping",
  },
};
const FeatureCard = {
  card1: {
    src: "/assets/advapd/features1.png",
    title: " Excellent in-vivo strength retention",
  },
  card2: {
    src: "/assets/advapd/features2.png",
    title: " Minimal memory for handling ease",
  },
  card3: {
    src: "/assets/advacryl/features4.png",
    title: " Excellent knot security",
  },
  card4: {
    src: "/assets/advacryl/features3.png",
    title: "Excellent pliability & handling characteristics",
  },
};

const advapd = () => {
  fadeUp();
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
              <Hero
                heading={"AdvaPd"}
                className="text-[#A49EA3]"
                tagline={" Monofilament Polydioxanone"}
                para1={
                  "  Enduring performance for confidence in extended wound support"
                }
                src={"/assets/advapd/advapd-hero.png"}
                bgimg={"/assets/advapd/advapd-hero-bg.png"}
                para2={"Steady performance for superior confidence"}
              />
              <Edge
                sectionheading={"The ADVAPD Edge"}
                card1={EdgeCard.card1}
                card2={EdgeCard.card2}
                card3={EdgeCard.card3}
              />
              <Features
                card1={FeatureCard.card1}
                card2={FeatureCard.card2}
                card3={FeatureCard.card3}
                card4={FeatureCard.card4}
              />
              <ProductDescription className={"text-[#A49EA3]"} />
              <NextGeneration />
              <Uncover />
            </main>
          </Layout>
        </div>
      </div>
      <Transition />
    </>
  );
};

export default advapd;
