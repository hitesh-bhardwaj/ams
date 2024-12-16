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
    title: "Advanced Solution For Valve Repair & Replacement",
    src: "/assets/advabond-cv/edge-card1.png",
    para: "",
  },
  card2: {
    title: "The Intelligent Dispensing System ",
    src: "/assets/advabond-cv/edge-card2.png",
    list1:"Moisture resistance, inherent strength and stiffness",
    list2:"Moisture resistance, inherent strength and stiffness",
    list3:"Ease of dispensing & arming by needle holder",
  },
  card3: {
    title: "Low porosity PTFE felt pledgets",
    src: "/assets/advabond-cv/edge-card3.png",
    para: "",
  },
};
const featureData = [
  {
    src: "/assets/advabond-cv/feature-card1.png",
    title: "Tighter braided construction",
  },
  {
    src: "/assets/advabond-cv/feature-card2.png",
    title: "Excellent pliability & handling characteristics",
  },
   {
    src: "/assets/advabond-cv/feature-card3.png",
    title: "Excellent and consisten knotting strength",
  }
];
const cardData = [
  {
    title: "Composition",
    description: "Polyethylene Terephthalate",
    svg:"/assets/advabond-cv/composition.svg"
  },
  {
    title: "Colour",
    description: "White (Undyed) & Green",
    svg:"/assets/advabond-cv/color.svg"

  },
  {
    title: "Available Sizes",
    description: "U.S.P. 5 to 6-0",
    svg:"/assets/advabond-cv/sizes.svg"

  },
  {
    title: "Coating",
    description:
      "Silicone",
    svg:"/assets/advabond-cv/coating.svg"

  },
  {
    title: "Tensile Strength",
    description: "Permanent",
    svg:"/assets/advabond-cv/tensile.svg"

  },
  {
    title: "Absorption Profile",
    description: "Non Absorbable",
    svg:"/assets/advabond-cv/absorption.svg"

  },
];

const advabondcv = () => {
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
                src={"/assets/advabond-cv/advabond-cv-hero.png"}
                bgimg={"/assets/advabond/advabond-hero-bg.png"}
                para2={"Enhancing confidence for everlasting support"}
              />
              <Information info={"ADVABOND with Pledget suture is a sterile, coated, braided, synthetic, non-absorbable surgical suture composed of Polyethylene Terephthalate. The suture is coated with Silicone which acts as a lubricant to mechanically improve the ease of passage through tissue and the overall handling qualities of the suture. ADVABOND with Pledget suture elicits a minimal initial inflammatory reaction in tissues, which is followed by a gradual encapsulation of the suture by fibrous connective tissue. ADVABOND is the advanced solution for valve repair and replacement."}/>
              <Edge2
                sectionheading={"The ADVABOND Edge"}
                card1={EdgeCard.card1}
                card2={EdgeCard.card2}
                card3={EdgeCard.card3}
              />
              <Features features={featureData}
              />
              <ProductDescription  data={cardData}/>
              <NextGeneration />
              <UncoverCV/>
            </main>
          </Layout>
          <Media greaterThan='tablet'>
           <Pixifinal/>


          </Media>
         
        
    </>
  );
};

export default advabondcv;
