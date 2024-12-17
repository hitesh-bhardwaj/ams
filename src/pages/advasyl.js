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
import { Media } from "@/components/media";
import Information from "@/components/Products/Information";

const EdgeCard = {
  card1: {
    title: "Swage Point Integrity",
    src: "/assets/advacryl/magnifying-glass.png",
    para: "Advanced Tipping",
  },
  card2: {
    title: "Needle pull tensile strength ",
    src: "/assets/advasyl/needle-pull.png",
    para: " patented dispensing system designed to deliver ease of suture dispensing with minimal memory in the suture strand.",
    bgsrc: "/assets/advalene/advalene-rectangle.png",
  },
  card3: {
    title: "Knot Pull Tensile Strength",
    src: "/assets/advasyl/knot-pull.png",
    para: "",
  },
};
const featureData = [
  {
   src: "/assets/advasyl/feature-card1.png",
   title: " Smoother surface for minimal tissue drag & trauma",
 },
 {
   src: "/assets/advasyl/feature-card2.png",
   title: "Minimal memory for handling ease",
 },
 {
   src: "/assets/advasyl/feature-card3.png",
   title: "Excellent and consistent knotting strength",
 },
{
   src: "/assets/advasyl/feature-card4.png",
   title: "Excellent handling characteristics",
 },
];
const cardData = [
  {
    title: "Composition",
    description: "Proteinaceous silk fibres called fibroin",
    svg:"/assets/advasyl/composition.svg"
  },
  {
    title: "Colour",
    description: "Black",
    svg:"/assets/advasyl/color.svg"

  },
  {
    title: "Available Sizes",
    description: "U.S.P. 4 to 6-0 & 8-0",
    svg:"/assets/advasyl/sizes.svg"

  },
  {
    title: "Coating",
    description:
      "Wax",
    svg:"/assets/advasyl/coating.svg"

  },
  {
    title: "Tensile Strength",
    description: "Gradual loss in tensile strength over a period of time",
    svg:"/assets/advasyl/tensile.svg"

  },
  {
    title: "Absorption Profile",
    description: "Non Absorbable",
    svg:"/assets/advasyl/absorption.svg"

  },
];

const advasyl = () => {
  fadeUp();

  return (
    <>
      
          <Layout>
            <main>
              <Hero
                heading={"Advasyl"}
                className="text-[#5EC4DE]"
                tagline={"Braided Silk"}
                para1={
                  "Exceptional control for confidence in gentle tissue approximation"
                }
                src={"/assets/advasyl/advasyl-hero.png"}
                bgimg={"/assets/advasyl/advasyl-hero-bg.png"}
                para2={"Steady performance for superior confidence"}
              />
              <Information info={"ADVASYL suture is non-absorbable, sterile, surgical suture composed of an organic protein called fibroin, derived from the domesticated species Bombyx mori (B. mori). The suture is processed to remove the natural waxes and sericin gum, dyed black and coated with a wax mixture to reduce capillarity and to increase surface lubricity, which enhances handling characteristics, ease of passage through tissue, and knot run-down properties."}/>
              <Edge2
                sectionheading={"The ADVASYL Edge"}
                card1={EdgeCard.card1}
                card2={EdgeCard.card2}
                card3={EdgeCard.card3}
                className={"hidden"}
              />
              <Features features={featureData}
              />
              <ProductDescription data={cardData}/>
              <NextGeneration />
              <Uncover />
            </main>
          </Layout>
          <Media greaterThan='tablet'>
          <Pixifinal />
          </Media>
          
        
    </>
  );
};

export default advasyl;
