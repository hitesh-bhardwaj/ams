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
import { Svg } from "@react-three/drei";

const EdgeCard = {
  card1: {
    title: "Needle Penetration Study",
    src: "/assets/advacat/advacat-edge1.png",
    para: "",
  },
  card2: {
    title: "Nucrel pack for superior pliability & knotting characteristics",
    src: "/assets/advacat/advacat-edge2.png",
    list1:"Minimal suture memory & coiling",
    list2:"Excellent handling & flexibility",
    list3:"Excellent knot security"
  },
  card3: {
    title: "Knot Pull Tensile Strength",
    src: "/assets/advacat/advacat-edge3.png",
    para: "",
  },
};
const cardData = [
  {
    title: "Composition",
    description: "Purified Collagen",
    svg :"/assets/advacat/composition.svg"
  },
  {
    title: "Colour",
    description: "Yellow, Beige",
    svg :"/assets/advacat/color.svg"

  },
  {
    title: "Available Sizes",
    description: "U.S.P. 2 to 3-0",
    svg :"/assets/advacat/sizes.svg"

  },
  {
    title: "Coating",
    description:
      "None",
    svg :"/assets/advacat/coating.svg"

  },
  {
    title: "Tensile Strength",
    description: "Chromic Gut: 21-25 days Plain Gut: 10-12 days",
    svg :"/assets/advacat/tensile.svg"

  },
  {
    title: "Absorption Profile",
    description: "90 - 100 days",
    svg :"/assets/advacat/absorption.svg"

  },
];

const advacat = () => {
  fadeUp();

  return (
    <>
      
          <Layout>
            <main>
              <Hero
                heading={"AdvaCat"}
                className="text-[#DDCB9F]"
                tagline={" Purified Collagen (Chromic & Plain)"}
                para1={
                  "  Consistent performance for confidence in episiotomy repair"
                }
                src={"/assets/advacat/advacat-hero.png"}
                bgimg={"/assets/advacat/advacat-hero-bg.png"}
                para2={"Steady performance for superior confidence"}
              />
              <Information info={"ADVACAT suture is absorbable, sterile surgical suture composed of purified connective tissue (mostly collagen) derived from submucosal fibrous layer of sheep intestines. ADVACAT suture is available in plain and chromic. Chromic gut suture is treated with chromic salt solution to provide greater resistance to absorption & change the color to brown for improved visibility."}/>
              <Edge2
                sectionheading={"The ADVACAT Edge"}
                card1={EdgeCard.card1}
                card2={EdgeCard.card2}
                card3={EdgeCard.card3}
              />
             
              <ProductDescription  data={cardData}/>
              <NextGeneration />
              <Uncover />
            </main>
          </Layout>
          <Media greaterThan='tablet'>
         {/* <Pixifinal/>  */} 


          </Media>
          
        
    </>
  );
};

export default advacat;
