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
import React from "react";
import { fadeUp } from "@/components/gsapAnimations";

const EdgeCard = {
  card1: {
    title: "Needle Penetration Study",
    src: "/assets/advacat/advacat-edge1.png",
    para: "",
  },
  card2: {
    title: "- the confidence to suture with ease",
    src: "/assets/advalene/advalene-tray.png",
    para: " patented dispensing system designed to deliver ease of suture dispensing with minimal memory in the suture strand.",
       bgsrc:"/assets/advalene/advalene-rectangle.png"
  },
  card3: {
    title: "Knot Pull Tensile Strength",
    src: "/assets/advalene/advalene-graph.png",
    para: "",
  },
};
const FeatureCard = {
  card1: {
    src: "/assets/advalene/features1.png",
    title: " Uniform diameter",
  },
  card2: {
    src: "/assets/advalene/features2.png",
    title: " Minimal memory and reduced “pig-tailing”",
  },
  card3: {
    src: "/assets/advalene/features3.png",
    title: " Isotactic polymer maximum strength",
  },
  card4: {
    src: "/assets/advalene/features4.png",
    title: "Seamless knot, without fraying",
  },
};

const advalene = () => {
  fadeUp()
  return (
    <>
      <Header />
      <main>
        <Hero
          heading={"Advalene"}
           className="text-[#1680B7]"
          tagline={" Monofilament Polypropylene Blue"}
          para1={
            "  Reliable performance for confidence in contaminated wound closure"
          }
          src={"/assets/advalene/advalene-hero.png"}
          bgimg={'/assets/advalene/advalene-hero-bg.png'}
          para2={"Steady performance for superior confidence"}
        />
        <Edge
        sectionheading={"The ADVALENE Edge"}
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
        <ProductDescription className={'text-[#1480B8]'}  />
        <NextGeneration />
        <Uncover />
      </main>
      <Footer />
      <Transition />
    </>
  );
};

export default advalene;
