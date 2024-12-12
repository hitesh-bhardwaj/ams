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
  },
  {
    title: "Colour",
    description: "Yellow, Beige",
  },
  {
    title: "Available Sizes",
    description: "U.S.P. 2 to 3-0",
  },
  {
    title: "Coating",
    description:
      "None",
  },
  {
    title: "Tensile Strength",
    description: "Chromic Gut: 21-25 days Plain Gut: 10-12 days",
  },
  {
    title: "Absorption Profile",
    description: "90 - 100 days",
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
              <Edge2
                sectionheading={"The ADVACAT Edge"}
                card1={EdgeCard.card1}
                card2={EdgeCard.card2}
                card3={EdgeCard.card3}
              />
             
              <ProductDescription className={"text-[#DDCB9F]"} data={cardData}/>
              <NextGeneration />
              <Uncover />
            </main>
          </Layout>
          {/* <Pixifinal/> */}
        
    </>
  );
};

export default advacat;
