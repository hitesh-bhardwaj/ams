/* eslint-disable react-hooks/rules-of-hooks */
import Features from "@/components/Products/Features";
import Hero from "@/components/Products/Hero";
import NextGeneration from "@/components/Products/NextGeneration";
import ProductDescription from "@/components/Products/ProductDescription";
import { fadeUp } from "@/components/gsapAnimations";
import Edge2 from "@/components/Products/Edge2";
import Layout from "@/components/Layout";
import Pixifinal from "@/components/Pixifinal";
import { Media } from "@/components/media";
import Information from "@/components/Products/Information";
import UncoverCV from "@/components/Products/UncoverCV";

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
    svg:"/assets/advasteel-cv/composition.svg"
  },
  {
    title: "Colour",
    description: "None",
    svg:"/assets/advasteel-cv/color.svg"

  },
  {
    title: "Available Sizes",
    description: "U.S.P. 7 to 1",
    svg:"/assets/advasteel-cv/sizes.svg"

  },
  {
    title: "Coating",
    description:
      "None",
    svg:"/assets/advasteel-cv/coating.svg"

  },

  {
    title: "Tensile Strength",
    description: "Permanent",
    svg:"/assets/advasteel-cv/tensile.svg"

  },
  {
    title: "Absorption Profile",
    description: "Non Absorbable",
    svg:"/assets/advasteel-cv/absorption.svg"

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
              <Information info={"ADVASTEEL monofilament is made from 316L stainless steel, a high-quality material used in surgical implants. It is renowned for its strength and non-absorbable properties, ensuring secure wound closure in various surgical procedures. ADVASTEEL represents a durable and reliable stainless steel suture, engineered for effective tissue approximation and long-lasting wound closure across a wide range of surgical applications."}/>
              <Edge2
                sectionheading={"The ADVASTEEL Edge"}
                card1={EdgeCard.card1}
                card2={EdgeCard.card2}
                card3={EdgeCard.card3}
                className={"hidden"}
              />
             
              <ProductDescription  data={cardData}/>
              <NextGeneration />
             <UncoverCV/>
            </main>
          </Layout>
          <Media greaterThan='tablet'>
          {/* <Pixifinal/> */}


          </Media>
          
        
    </>
  );
};

export default advasteelcv;
