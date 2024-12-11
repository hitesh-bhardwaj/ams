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
    src: "/assets/advamryl/advamryl-tray.png",
    para: " patented dispensing system designed to deliver ease of suture dispensing with minimal memory in the suture strand.",
    bgsrc: "/assets/advamryl/orange-rectangle.png",
  },
  card3: {
    title: "Knot Pull Tensile Strength",
    src: "/assets/advamryl/advamryl-graph.png",
    para: " ",
  },
};
const featureData = [
  {
   src: "/assets/advamryl/feature-card1.png",
   title: " Smoother surface for minimal tissue drag & trauma",
 },
 {
   src: "/assets/advamryl/feature-card2.png",
   title: "Minimal memory for handling ease",
 },
 {
   src: "/assets/advamryl/feature-card3.png",
   title: "Excellent knot security",
 },
{
   src: "/assets/advamryl/feature-card4.png",
   title: "Excellent pliability & handling characteristics",
 },
];
const cardData = [
  {
    title: "Composition",
    description: "Glycolide and    -Caprolactone",
  },
  {
    title: "Colour",
    description: "Undyed and Violet",
  },
  {
    title: "Available Sizes",
    description: "U.S.P. 1 to 5-0",
  },
  {
    title: "Coating",
    description:
      "None",
  },
  {
    title: "Tensile Strength",
    description: "~75% | 14 Days ~55% | 21 Days",
  },
  {
    title: "Absorption Profile",
    description: "Essentially complete up to 90 days",
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
                tagline={" Monofilament Poliglecaprone 25"}
                para1={
                  "  Supreme handling performance for confidence in subcuticular skin closure"
                }
                src={"/assets/advamryl/advamryl-hero.png"}
                bgimg={"/assets/advamryl/advamryl-hero-bg.png"}
                para2={"Steady performance for superior confidence"}
              />
              <Edge
                sectionheading={" The ADVAMRYL Edge"}
                card1={EdgeCard.card1}
                card2={EdgeCard.card2}
                card3={EdgeCard.card3}
              />
              <Features features={featureData}
              />
              <ProductDescription className={"text-[#E58D72]"} data={cardData}/>
              <NextGeneration />
              <Uncover />
            </main>
          </Layout>
          <Pixifinal/>
        
    </>
  );
};

export default advamryl;
