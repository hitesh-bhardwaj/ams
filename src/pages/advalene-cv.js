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

const EdgeCard = {
  card1: {
    title: "Augment Your Confidence",
    src: "/assets/advacryl/magnifying-glass.png",
    para: "Advanced Tipping",
  },
  card2: {
    title: "- the confidence to suture with ease",
    src: "/assets/advalene/advalene-tray.png",
    para: " patented dispensing system designed to deliver ease of suture dispensing with minimal memory in the suture strand.",
    bgsrc: "/assets/advalene/advalene-rectangle.png",
  },
  card3: {
    title: "Knot Pull Tensile Strength",
    src: "/assets/advalene/advalene-graph.png",
    para: "",
  },
};
const featureData = [
  {
    src: "/assets/advalene/features1.png",
    title: " Inert Monofilament Structure",
  },
  {
    src: "/assets/advalene/features2.png",
    title: "Minimal memory and reduced “pig-tailing”",
  },
  {
    src: "/assets/advalene/features3.png",
    title: "Isotactic polymer maximum strength",
  }
];
const cardData = [
  {
    title: "Composition",
    description: "Polypropylene",
  },
  {
    title: "Colour",
    description: "Blue",
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
    description: "Permanent",
  },
  {
    title: "Absorption Profile",
    description: "Non Absorbable",
  },
];
const advalenecv = () => {
  fadeUp();

  return (
    <>
      
          <Layout>
            <main>
              <Hero
                heading={"Advalene"}
                className="text-[#1680B7]"
                tagline={" Monofilament Polypropylene Blue"}
                para1={
                  "  Reliable performance for confidence in contaminated wound closure"
                }
                src={"/assets/advalene-cv/advalene-cv-hero.png"}
                bgimg={"/assets/advalene/advalene-hero-bg.png"}
                para2={"With exceptional strength comes confidence that lasts"}
              />
              <Edge
                sectionheading={"The ADVALENE Edge"}
                card1={EdgeCard.card1}
                card2={EdgeCard.card2}
                card3={EdgeCard.card3}
              />
              <Features features={featureData}
              />
              <ProductDescription className={"text-[#1480B8]"} data={cardData}/>
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

export default advalenecv;
