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
    title: "Swage Point Integrity",
    src: "/assets/advacryl/magnifying-glass.png",
    para: "Advanced Tipping",
  },
  card2: {
    title: "The Intelligent Dispensing System ",
    src: "/assets/advabond/advabond-edge2.png",
    para: " patented dispensing system designed to deliver ease of suture dispensing with minimal memory in the suture strand.",
    bgsrc: "/assets/advalene/advalene-rectangle.png",
  },
  card3: {
    title: "Knot Pull Tensile Strength",
    src: "/assets/advabond/advabond-graph.png",
    para: "",
  },
};
const FeatureCard = {
  card1: {
    src: "/assets/advabond/features1.png",
    title: "Smoother surface for minimal tissue drag & trauma",
  },
  card2: {
    src: "/assets/advabond/features2.png",
    title: "Minimal memory for handling ease",
  },
  card3: {
    src: "/assets/advabond/features3.png",
    title: "Excellent and consistent knotting strength",
  },
  card4: {
    src: "/assets/advabond/features4.png",
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

const advabond = () => {
  fadeUp();

  return (
    <>
     
          <Layout>
            <main>
              <Hero
                heading={"Advabond"}
                className="text-[#F08144]"
                tagline={"Braided Coated Polyester"}
                para1={
                  "Ultimate security for confidence in approximation of tissues under stress"
                }
                src={"/assets/advabond/advabond-hero.png"}
                bgimg={"/assets/advabond/advabond-hero-bg.png"}
                para2={"Enhancing confidence for everlasting support"}
              />
              <Edge2
                sectionheading={"The ADVABOND Edge"}
                card1={EdgeCard.card1}
                card2={EdgeCard.card2}
                card3={EdgeCard.card3}
                className={"hidden"}
              />
              <Features
                card1={FeatureCard.card1}
                card2={FeatureCard.card2}
                card3={FeatureCard.card3}
                card4={FeatureCard.card4}
              />
              <ProductDescription className={"text-[#F08144]"} data={cardData}/>
              <NextGeneration />
              <Uncover />
            </main>
          </Layout>
        
    </>
  );
};

export default advabond;
