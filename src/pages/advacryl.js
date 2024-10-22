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

const EdgeCard = {
  card1: {
    title: "Swage Point Integrity",
    src: "/assets/advacryl/magnifying-glass.png",
    para: "Advanced Tipping",
  },
  card2: {
    title: "- the confidence to suture with ease",
    src: "/assets/advacryl/advacryl-tray.png",
    para: "  patented dispensing system designed to deliver ease of suture dispensing with minimal memory in the suture strand.",
    bgsrc:"/assets/advacryl/purple-rectangle.png"
  },
  card3: {
    title: "Knot Pull Tensile Strength",
    src: "/assets/advacryl/advacryl-graph.png",
    para: "Advanced Tipping",
  },
};
const FeatureCard = {
  card1: {
    src: "/assets/advacryl/features1.png",
    title: " Excellent handling",
  },
  card2: {
    src: "/assets/advacryl/features2.png",
    title: " Excellent handling",
  },
  card3: {
    src: "/assets/advacryl/features3.png",
    title: " Excellent handling",
  },
  card4: {
    src: "/assets/advacryl/features4.png",
    title: " Excellent handling",
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

const advacryl = () => {
  return (
    <>
      <Header />
      <main>
        <Hero
          heading={"Advacryl"}
          className="text-[#855EA6]"
          tagline={" BRAIDED COATED POLYGLACTIN 910 SURGICAL SUTURE"}
          para1={"  Consistent performance for confidence in a variety of soft tissue approximation"}
          src={"/assets/advacryl/advacryl-hero.png"}
          bgimg={'/assets/advacryl/advacryl-hero-bg.png'}
          para2={"With great versatility comes the confidence to meet specific needs"}
        />
        <Edge
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
        <ProductDescription
          card1={ProductCard.card1}
          card2={ProductCard.card2}
          card3={ProductCard.card3}
          card4={ProductCard.card4}
          card5={ProductCard.card5}
          card6={ProductCard.card6}
        />
        <NextGeneration />
        <Uncover />
      </main>
      <Footer />
      <Transition />
    </>
  );
};

export default advacryl;
