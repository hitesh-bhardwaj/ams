/* eslint-disable react-hooks/rules-of-hooks */
import Features from "@/components/Products/Features";
import Hero from "@/components/Products/Hero";
import NextGeneration from "@/components/Products/NextGeneration";
import ProductDescription from "@/components/Products/ProductDescription";
import Uncover from "@/components/Products/Uncover";
import { fadeUp } from "@/components/gsapAnimations";
import Edge2 from "@/components/Products/Edge2";
import Layout from "@/components/Layout";
import Pixifinal from "@/components/Pixifinal";

const EdgeCard = {
  card1: {
    title: "Needle Pull Tensile Strength",
    src: "/assets/advasteel-cv/edge-card1.png",
    para: "",
  },
  card2: {
    title: "Ultimate Confidence in Sternum Closure.",
    src: "/assets/advasteel-cv/edge-card2.png",
  },
  card3: {
    title: "Knot Pull Tensile Strength",
    src: "/assets/advasteel-cv/edge-card3.png",
    para: "",
  },
};
const cardData = [
  {
    title: "Composition",
    description: "Stainless 316LVM Steel",
  },
  {
    title: "Colour",
    description: "None",
  },
  {
    title: "Available Sizes",
    description: "U.S.P. 7 to 1",
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

const advasteelcv = () => {
  fadeUp();

  return (
    <>
      
          <Layout>
            <main>
              <Hero
                heading={"AdvaSteel"}
                className="text-[#E08B19]"
                tagline={" Sternotomy Suture"}
                para1={
                  "  Supreme performance for ultimate confidence in sternum closure"
                }
                src={"/assets/advasteel-cv/advasteel-cv-hero.png"}
                bgimg={"/assets/advasteel-cv/advasteel-cv-hero-bg.png"}
                para2={"Monofilament Non-Absorbable Surgical Suture"}
              />
              <Edge2
                sectionheading={"The ADVASTEEL Edge"}
                card1={EdgeCard.card1}
                card2={EdgeCard.card2}
                card3={EdgeCard.card3}
                className={"hidden"}
              />
             
              <ProductDescription className={"text-[#E08B19]"} data={cardData}/>
              <NextGeneration />
              <Uncover />
            </main>
          </Layout>
          <Pixifinal/>
        
    </>
  );
};

export default advasteelcv;
