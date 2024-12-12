/* eslint-disable react-hooks/rules-of-hooks */
import Edge from "@/components/Products/Edge";
import Features from "@/components/Products/Features";
import Hero from "@/components/Products/Hero";
import NextGeneration from "@/components/Products/NextGeneration";
import ProductDescription from "@/components/Products/ProductDescription";
import Uncover from "@/components/Products/Uncover";
import { fadeUp } from "@/components/gsapAnimations";
import Layout from "@/components/Layout";
import Pixifinal from "@/components/Pixifinal";

const EdgeCard = {
  card1: {
    title: "Swage Point Integrity",
    src: "/assets/advacryl/magnifying-glass.png",
    para: "Advanced Tipping",
  },
  card2: {
    title: "- the confidence to suture with ease",
    src: "/assets/advacryl-rapid/edge-card2.png",
    para: "  patented dispensing system designed to deliver ease of suture dispensing with minimal memory in the suture strand.",
    bgsrc: "/assets/advacryl-rapid/red-rectangle.png",
  },
  card3: {
    title: "Knot Pull Tensile Strength",
    src: "/assets/advacryl-rapid/edge-card3.png",
    para: "",
  },
};
const featureData = [
   {
    src: "/assets/advacryl-rapid/feature-card1.png",
    title: "Excellent strength over the critical wound healing period",
  },
   {
    src: "/assets/advacryl-rapid/feature-card2.png",
    title: "Tighter braided construction",
  },
   {
    src: "/assets/advacryl-rapid/feature-card3.png",
    title: "Excellent knot security",
  },
   {
    src: "/assets/advacryl-rapid/feature-card4.png",
    title: "Excellent handling",
  },
];
const cardData = [
  {
    title: "Composition",
    description: "90% Glycolide, 10% L-lactide",
  },
  {
    title: "Colour",
    description: "Undyed",
  },
  {
    title: "Available Sizes",
    description: "U.S.P. 1 to 5-0",
  },
  {
    title: "Coating",
    description:
      "Poly (glycolide-co-lactide) (Glacomer 37)",
  },
  {
    title: "Tensile Strength",
    description: "~42%  |  5 Days  ~ 0%   |  10-14 Days",
  },
  {
    title: "Absorption Profile",
    description: "Essentially complete upto 42 days",
  },
];
const advacrylrapid = () => {
  fadeUp();

  return (
    <>
          <Layout>
            <main>
              <Hero 
              
                heading={"ADVAcryl Rapid"}
                className="text-[#E41F30]"
                tagline={" BRAIDED COATED POLYGLACTIN 910 SURGICAL SUTURE"}
                para1={
                  "  Accelerated performance for confidence in delicate tissue approximation"
                }
                src={"/assets/advacryl-rapid/advacryl-rapid-hero.png"}
                bgimg={"/assets/advacryl-rapid/advacryl-rapid-hero-bg.png"}
                para2={
                  "Swift Confidence for Superior Predictability"
                }
              />
              <Edge
                sectionheading={" The ADVACRYL RAPID Edge"}
                card1={EdgeCard.card1}
                card2={EdgeCard.card2}
                card3={EdgeCard.card3}
              />
              <Features features={featureData}
              />
              <ProductDescription className={"text-[#E41F30]"} data={cardData}/>
              <NextGeneration />
              <Uncover />
            </main>
          </Layout>
          {/* <Pixifinal/> */}
        
    </>
  );
};

export default advacrylrapid;
