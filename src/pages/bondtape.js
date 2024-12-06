/* eslint-disable react-hooks/rules-of-hooks */
import Hero from "@/components/Products/Hero";
import NextGeneration from "@/components/Products/NextGeneration";
import ProductDescription from "@/components/Products/ProductDescription";
import Uncover from "@/components/Products/Uncover";
import { fadeUp } from "@/components/gsapAnimations";
import Layout from "@/components/Layout";
import UmbilicalTape from "@/components/AdvabondTape/UmbilicalTape";

const cardData = [
  {
    title: "Composition",
    description: "Polyester Fibre",
  },
  {
    title: "Colour",
    description: "White",
  },
  {
    title: "Available Sizes",
    description: "Length 30 cm  |  Width 5 mm",
  },
  {
    title: "Sterilization Method",
    description:
      "Gamma irradiation",
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
const bondtape= () => {
  fadeUp();

  return (
    <>
      
          <Layout>
            <main>
              <Hero
              margin={"mobile:mt-[25vw]"}
                heading={"Advabond Tape"}
                className="text-[#F08144]"
                tagline={"Braided Polyester Tape Suture"}
                para1={
                  "Non-absorbable braided polyester tape suture composed of polyethylene terephthalate "
                }
                src={"/assets/advabondtape/advabond-tape-hero.png"}
                bgimg={"/assets/advabondtape/advabond-hero-bg.png"}
                para2={"Sterilised Surgical Needled Suture"}
              />
              <ProductDescription className={"text-[#F08144]"} data={cardData}/>
              <UmbilicalTape/>
              <ProductDescription className={"text-[#79C0E4]"} data={cardData}/>
              <NextGeneration />
              <Uncover />
            </main>
          </Layout>
        
    </>
  );
};

export default bondtape;
