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
import { Media } from "@/components/media";
import Information from "@/components/Products/Information";

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
    svg: "/assets/advacryl/composition.svg"
  },
  {
    title: "Colour",
    description: "Undyed and Violet",
    svg: "/assets/advacryl/color.svg"

  },
  {
    title: "Available Sizes",
    description: "U.S.P. 2 to 6-0",
    svg: "/assets/advacryl/sizes.svg"

  },
  {
    title: "Coating",
    description:
      "Copolymer of Poly (glycolide-co-lactide) and Calcium Stearate",
    svg: "/assets/advacryl/coating.svg"

  },
  {
    title: "Tensile Strength",
    description: "~75% | 14 Days  ~55% | 21 Days",
    svg: "/assets/advacryl/tensile.svg"

  },
  {
    title: "Absorption Profile",
    description: "Essentially complete up to 80 days",
    svg: "/assets/advacryl/absorption.svg"

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
              <Information info={"ADVACRYL suture is braided synthetic absorbable sterile surgical suture composed of a copolymer made from 90% Glycolide and 10% L-lactide. Braided ADVACRYL suture is coated with a mixture composed of Poly (Glycolide-co-lactide) (Glacomer 37) and calcium stearate. The suture is colored violet to increase visibility and is also available undyed."}/>
              <Edge
                sectionheading={" The ADVACRYL Edge"}
                card1={EdgeCard.card1}
                card2={EdgeCard.card2}
                card3={EdgeCard.card3}
              />
              <Features features={featureData}
              />
              <ProductDescription  data={cardData}/>
              <NextGeneration />
              <Uncover />
            </main>
          </Layout>
          <Media greaterThan='tablet'>
           <Pixifinal/> 


          </Media>
        
        
    </>
  );
};

export default advacryl;
