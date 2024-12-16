/* eslint-disable react-hooks/rules-of-hooks */
import Hero from "@/components/Products/Hero";
import NextGeneration from "@/components/Products/NextGeneration";
import ProductDescription from "@/components/Products/ProductDescription";
import Uncover from "@/components/Products/Uncover";
import { fadeUp } from "@/components/gsapAnimations";
import Layout from "@/components/Layout";
import UmbilicalTape from "@/components/AdvabondTape/UmbilicalTape";
import Pixifinal from "@/components/Pixifinal";
import { Media } from "@/components/media";

const cardData1 = [
  {
    title: "Composition",
    description: "Polyester Fibre",
    svg:"/assets/advabondtape/composition.svg"
  },
  {
    title: "Colour",
    description: "White",
    svg:"/assets/advabondtape/color.svg"

  },
  {
    title: "Available Sizes",
    description: "Length 30 cm  |  Width 5 mm",
    svg:"/assets/advabondtape/sizes.svg"

  },
  {
    title: "Sterilization Method",
    description:
      "Gamma irradiation",
    svg:"/assets/advabondtape/sterilization.svg"

  },
  {
    title: "Tensile Strength",
    description: "Permanent",
    svg:"/assets/advabondtape/tensile.svg"

  },
  {
    title: "Absorption Profile",
    description: "Non Absorbable",
    svg:"/assets/advabondtape/absorption.svg"

  },
];
const cardData2 = [
  {
    title: "Composition",
    description: "100% Cotton",
    svg:"/assets/advabondtape/composition2.svg"
  },
  {
    title: "Colour",
    description: "White",
    svg:"/assets/advabondtape/color2.svg"
  },
  {
    title: "Available Sizes",
    description: "3 mm x 75 cm",
    svg:"/assets/advabondtape/sizes2.svg"
  },
  {
    title: "Construction",
    description:
      "Flat Braided, Non-Woven",
    svg:"/assets/advabondtape/construction.svg"

  },
  {
    title: "Foils/box",
    description: "12",
    svg:"/assets/advabondtape/box.svg"

  },
  {
    title: "Shelf life",
    description: "5 Years",
    svg:"/assets/advabondtape/shelf.svg"

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
              <ProductDescription className={"text-[#F08144]"} data={cardData1}/>
              <UmbilicalTape/>
              <ProductDescription className={"text-[#79C0E4]"} data={cardData2}/>
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

export default bondtape;
