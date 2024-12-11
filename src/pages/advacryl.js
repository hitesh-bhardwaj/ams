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
    src: "/assets/advacryl/advacryl-tray.png",
    para: "  patented dispensing system designed to deliver ease of suture dispensing with minimal memory in the suture strand.",
    bgsrc: "/assets/advacryl/purple-rectangle.png",
  },
  card3: {
    title: "Knot Pull Tensile Strength",
    src: "/assets/advacryl/advacryl-graph.png",
    para: "",
  },
};

const featureData = [
   {
    src: "/assets/advacryl/features1.png",
    title: " Excellent strength over the critical wound healing period",
  },
  {
    src: "/assets/advacryl/features2.png",
    title: " Tighter braided construction",
  },
  {
    src: "/assets/advacryl/features3.png",
    title: " Excellent handling",
  },
 {
    src: "/assets/advacryl/features4.png",
    title: "Excellent knot security",
  },
];
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
    description: "~75% | 14 Days  ~55% | 21 Days",
  },
  {
    title: "Absorption Profile",
    description: "Essentially complete up to 80 days",
  },
];
const advacryl = () => {
  fadeUp();

  return (
    <>
    
          <Layout>
            <main>
              <Hero 
                heading={"Advacryl"}
                className="text-[#855EA6]"
                tagline={" BRAIDED COATED POLYGLACTIN 910 SURGICAL SUTURE"}
                para1={
                  "  Consistent performance for confidence in a variety of soft tissue approximation"
                }
                src={"/assets/advacryl/advacryl-hero.png"}
                bgimg={"/assets/advacryl/advacryl-hero-bg.png"}
                para2={
                  "With great versatility comes the confidence to meet specific needs"
                }
              />
              <Edge
                sectionheading={" The ADVACRYL Edge"}
                card1={EdgeCard.card1}
                card2={EdgeCard.card2}
                card3={EdgeCard.card3}
              />
              <Features features={featureData}
              />
              <ProductDescription className={"text-[#855EA6]"} data={cardData}/>
              <NextGeneration />
              <Uncover />
            </main>
          </Layout>
          <Pixifinal/>
        
    </>
  );
};

export default advacryl;
