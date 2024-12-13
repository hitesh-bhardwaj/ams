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

const EdgeCard = {
  card1: {
    title: "Swage Point Integrity",
    src: "/assets/advacryl/magnifying-glass.png",
    para: "Advanced Tipping",
  },
  card2: {
    title: "Inert Polymer ",
    src: "/assets/advalon/advalon-edge2.png",
    para: " patented dispensing system designed to deliver ease of suture dispensing with minimal memory in the suture strand.",
    bgsrc: "/assets/advalene/advalene-rectangle.png",
  },
  card3: {
    title: "Knot Pull Tensile Strength",
    src: "/assets/advalon/advalon-graph.png",
    para: "",
  },
};
const featureData = [
   {
    src: "/assets/advalon/features1.png",
    title: "Uniform diameter",
  },
   {
    src: "/assets/advalon/features2.png",
    title: "Elasticity to ensure compact and safe knotting",
  },
   {
    src: "/assets/advabond/features3.png",
    title: "Inertness for minimal risk of infection",
  },
   {
    src: "/assets/advalon/features4.png",
    title: "Excellent and consistent knotting strength",
  },
];
const cardData = [
  {
    title: "Composition",
    description: "Polyamide",
  },
  {
    title: "Colour",
    description: "Black",
  },
  {
    title: "Available Sizes",
    description: "U.S.P. 1 to 10-0",
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

const advalon = () => {
  fadeUp();

  return (
    <>
      
          <Layout>
            <main>
              <Hero
                heading={"Advalon"}
                className="text-[#7FC18E]"
                tagline={"Monofilament Polyamide Black"}
                para1={
                  "Appropriate choice for dermal closure and retention suturing"
                }
                src={"/assets/advalon/advalon-hero.png"}
                bgimg={"/assets/advalon/advalon-hero-bg.png"}
                para2={"Ideal selection for confidence in skin closure"}
              />
              <Edge2
                sectionheading={"The ADVALON Edge"}
                card1={EdgeCard.card1}
                card2={EdgeCard.card2}
                card3={EdgeCard.card3}
                className={"hidden"}
              />
              <Features features={featureData}
              />
              <ProductDescription className={"text-[#7FC18E]"} data={cardData}/>
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

export default advalon;
