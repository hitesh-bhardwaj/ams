/* eslint-disable react-hooks/rules-of-hooks */
import Edge from "@/components/Products/Edge";
import Features from "@/components/Products/Features";
import Hero from "@/components/Products/Hero";
import NextGeneration from "@/components/Products/NextGeneration";
import ProductDescription from "@/components/Products/ProductDescription";
import Uncover from "@/components/Products/Uncover";
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
    src: "/assets/advamryl/advamryl-tray.png",
    para: " patented dispensing system designed to deliver ease of suture dispensing with minimal memory in the suture strand.",
    bgsrc: "/assets/advamryl/orange-rectangle.png",
  },
  card3: {
    title: "Knot Pull Tensile Strength",
    src: "/assets/advamryl/advamryl-graph.png",
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

const advamryl = () => {
  fadeUp();

  return (
    <>
      
          <Layout>
            <main>
              <Hero
                heading={"Advamryl"}
                className="text-[#E58D72]"
                tagline={" AMonofilament Poliglecaprone 25"}
                para1={
                  "  Supreme handling performance for confidence in subcuticular skin closure"
                }
                src={"/assets/advamryl/advamryl-hero.png"}
                bgimg={"/assets/advamryl/advamryl-hero-bg.png"}
                para2={"Steady performance for superior confidence"}
              />
              <Edge
                sectionheading={"ADVAMRYL Edge"}
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
              <ProductDescription className={"text-[#E58D72]"} data={cardData}/>
              <NextGeneration />
              <Uncover />
            </main>
          </Layout>
        
    </>
  );
};

export default advamryl;
