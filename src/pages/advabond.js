/* eslint-disable react-hooks/rules-of-hooks */
import Features from "@/components/Products/Features";
import Hero from "@/components/Products/Hero";
import NextGeneration from "@/components/Products/NextGeneration";
import ProductDescription from "@/components/Products/ProductDescription";
import Uncover from "@/components/Products/Uncover";
import { fadeUp } from "@/components/gsapAnimations";
import Edge2 from "@/components/Products/Edge2";
import Layout from "@/components/Layout";
import { Media } from "@/components/media";
import Information from "@/components/Products/Information";
import BgVideo from "@/components/Layout/BgVideo";

const EdgeCard = {
  card1: {
    title: "Swage Point Integrity",
    src: "/assets/advabond/lens.png",
    para: "Advanced Tipping",
  },
  card2: {
    title: "The Intelligent Dispensing System ",
    src: "/assets/advabond/advabond-edge2.png",
    para: " patented dispensing system designed to deliver ease of suture dispensing with minimal memory in the suture strand.",
  },
  card3: {
    title: "Knot Pull Tensile Strength",
    src: "/assets/advabond/advabond-graph.png",
    para: "",
  },
};
const featureData = [
  {
    src: "/assets/advabond/features1.png",
    title: "Smoother surface for minimal tissue drag & trauma",
  },
  {
    src: "/assets/advabond/features2.png",
    title: "Minimal memory for handling ease",
  },
  {
    src: "/assets/advabond/features3.png",
    title: "Excellent and consistent knotting strength",
  },
  {
    src: "/assets/advabond/features4.png",
    title: "Excellent pliability & handling characteristics",
  },
];
const cardData = [
  {
    title: "Composition",
    description: "Polyethylene Terephthalate",
    svg: "/assets/advabond/composition.svg"
  },
  {
    title: "Colour",
    description: "White & Green",
    svg: "/assets/advabond/color.svg"

  },
  {
    title: "Available Sizes",
    description: "U.S.P. 5 to 6-0",
    svg: "/assets/advabond/sizes.svg"

  },
  {
    title: "Coating",
    description:
      "Silicone",
    svg: "/assets/advabond/coating.svg"

  },
  {
    title: "Tensile Strength",
    description: "Permanent",
    svg: "/assets/advabond/tensile.svg"

  },
  {
    title: "Absorption Profile",
    description: "Non Absorbable",
    svg: "/assets/advabond/absorption.svg"

  },
];

const advabond = () => {
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
            src={"/assets/advabond/advabond-hero.png"}
            bgimg={"/assets/advabond/advabond-hero-bg.png"}
            para2={"Enhancing confidence for everlasting support"}
            overlay={"hidden"}

          />
          <Information info={"ADVABOND suture is a sterile, coated, braided, synthetic, non-absorbable surgical suture composed of Polyethylene Terephthalate. The suture is coated with Silicone which acts as a lubricant to mechanically improve the ease of passage through tissue and the overall handling qualities of the suture. No significant change in the retention of tensile strength of the suture occurs during the lifetime of the implantation."} />
          <Edge2
            sectionheading={"The ADVABOND Edge"}
            card1={EdgeCard.card1}
            card2={EdgeCard.card2}
            card3={EdgeCard.card3}
            className={"hidden"}
          />
          <Features features={featureData}
          />
          <ProductDescription data={cardData} />
          <NextGeneration />
          <Uncover />
        </main>
      </Layout>
      <Media greaterThan='tablet'>
        <BgVideo videoSrc={"/assets/bg-videos/advabond.mp4"} />
      </Media>
    </>
  );
};

export default advabond;
