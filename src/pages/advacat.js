/* eslint-disable react-hooks/rules-of-hooks */
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Features from "@/components/Products/Features";
import Hero from "@/components/Products/Hero";
import NextGeneration from "@/components/Products/NextGeneration";
import ProductDescription from "@/components/Products/ProductDescription";
import Uncover from "@/components/Products/Uncover";
import Transition from "@/components/Transition";
import React, { useEffect, useState } from "react";
import { fadeUp } from "@/components/gsapAnimations";
import Edge2 from "@/components/Products/Edge2";
import Layout from "@/components/Layout";

const EdgeCard = {
  card1: {
    title: "Needle Penetration Study",
    src: "/assets/advacat/advacat-edge1.png",
    para: "",
  },
  card2: {
    title: "- the confidence to suture with ease",
    src: "/assets/advacat/advacat-edge2.png",
    para: " patented dispensing system designed to deliver ease of suture dispensing with minimal memory in the suture strand.",
    bgsrc: "/assets/advapd/advapd-rectangle.png",
  },
  card3: {
    title: "Knot Pull Tensile Strength",
    src: "/assets/advacat/advacat-edge3.png",
    para: "",
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
const ProductCard = {
  card1: {
    img: "/assets/advacryl/composition.png",
    title: "Composition",
    para: "90% Glycolide, 10% L-lactide",
  },
  card2: {
    img: "/assets/advacryl/color.png",
    title: "Color",
    para: "Undyed and Violet",
  },
  card3: {
    img: "/assets/advacryl/sizes.png",
    title: "Available Sizes",
    para: "U.S.P. 2 to 6-0",
  },
  card4: {
    img: "/assets/advacryl/coating.png",
    title: "Coating",
    para: "Copolymer of Poly (glycolide-co-lactide) and Calcium Stearate",
  },
  card5: {
    img: "/assets/advacryl/tensile.png",
    title: "Tensile Strength",
    para: "~75%  |  14 Days~55%  |  21 Days",
  },
  card6: {
    img: "/assets/advacryl/absorption.png",
    title: "Absorption",
    para: "Essentially complete upto 80 days",
  },
};

const advacat = () => {
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
                heading={"AdvaCat"}
                className="text-[#DDCB9F]"
                tagline={" Purified Collagen (Chromic & Plain)"}
                para1={
                  "  Consistent performance for confidence in episiotomy repair"
                }
                src={"/assets/advacat/advacat-hero.png"}
                bgimg={"/assets/advacat/advacat-hero-bg.png"}
                para2={"Steady performance for superior confidence"}
              />
              <Edge2
                sectionheading={"The ADVACAT Edge"}
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
              <ProductDescription className={"text-[#DDCB9F]"} />
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

export default advacat;
