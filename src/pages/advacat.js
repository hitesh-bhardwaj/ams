/* eslint-disable react-hooks/rules-of-hooks */
import Features from "@/components/Products/Features";
import Hero from "@/components/Products/Hero";
import NextGeneration from "@/components/Products/NextGeneration";
import ProductDescription from "@/components/Products/ProductDescription";
import Uncover from "@/components/Products/Uncover";
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
const cardData = [
  {
    title: "Composition",
    description: "90% Glycolide, 10% L-lactide",
  },
  {
    title: "Colour",
    description: "Undyed and Violet",
  },
  {
    title: "Available Sizes",
    description: "U.S.P. 2 to 6-0",
  },
  {
    title: "Coating",
    description:
      "Copolymer of Poly (glycolide-co-lactide) and Calcium Stearate",
  },
  {
    title: "Tensile Strength",
    description: "~75% | 14 Days ~55% | 21 Days",
  },
  {
    title: "Absorption Profile",
    description: "Essentially complete up to 80 days",
  },
];

const advacat = () => {
  fadeUp();

  return (
    <>
      
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
              <ProductDescription className={"text-[#DDCB9F]"} data={cardData}/>
              <NextGeneration />
              <Uncover />
            </main>
          </Layout>
        
    </>
  );
};

export default advacat;
