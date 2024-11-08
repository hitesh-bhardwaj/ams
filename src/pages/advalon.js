/* eslint-disable react-hooks/rules-of-hooks */
import Features from "@/components/Products/Features";
import Hero from "@/components/Products/Hero";
import NextGeneration from "@/components/Products/NextGeneration";
import ProductDescription from "@/components/Products/ProductDescription";
import Uncover from "@/components/Products/Uncover";
import { fadeUp } from "@/components/gsapAnimations";
import Edge2 from "@/components/Products/Edge2";
import Layout from "@/components/Layout";

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
const FeatureCard = {
  card1: {
    src: "/assets/advalon/features1.png",
    title: "Uniform diameter",
  },
  card2: {
    src: "/assets/advalon/features2.png",
    title: "Elasticity to ensure compact and safe knotting",
  },
  card3: {
    src: "/assets/advabond/features3.png",
    title: "Inertness for minimal risk of infection",
  },
  card4: {
    src: "/assets/advalon/features4.png",
    title: "Excellent and consistent knotting strength",
  },
};

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
                para2={"Enhancing confidence for everlasting support"}
              />
              <Edge2
                sectionheading={"The ADVALON Edge"}
                card1={EdgeCard.card1}
                card2={EdgeCard.card2}
                card3={EdgeCard.card3}
                className={"hidden"}
              />
              <Features
                card1={FeatureCard.card1}
                card2={FeatureCard.card2}
                card3={FeatureCard.card3}
                card4={FeatureCard.card4}
              />
              <ProductDescription className={"text-[#7FC18E]"} />
              <NextGeneration />
              <Uncover />
            </main>
          </Layout>
        
    </>
  );
};

export default advalon;
