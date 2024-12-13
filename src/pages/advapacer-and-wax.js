/* eslint-disable react-hooks/rules-of-hooks */
import Features from "@/components/Products/Features";
import Hero from "@/components/Products/Hero";
import NextGeneration from "@/components/Products/NextGeneration";
import ProductDescription from "@/components/Products/ProductDescription";
import Uncover from "@/components/Products/Uncover";
import { fadeUp } from "@/components/gsapAnimations";
import Layout from "@/components/Layout";
import Advawax from "@/components/Advawax/Advawax";
import Pixifinal from "@/components/Pixifinal";
import { Media } from "@/components/media";


const cardData1 = [
  {
    title: "Composition",
    description: "Stainless Steel",
  },
  {
    title: "Colour",
    description: "Blue",
  },
  {
    title: "Available Sizes",
    description: "U.S.P. 2-0",
  },
  {
    title: "Coating",
    description:
      "LDPE",
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
const cardData2 = [
    {
      title: "Composition",
      description: "Bees Wax and Isopropyl Myristate.",
    },
    {
      title: "Colour",
      description: "White",
    },
    {
      title: "Available Sizes",
      description: "ADVAW810",
    },
    {
      title: "Coating",
      description:
        "62 GSM - Siliconized",
    },
    {
      title: "Tensile Strength",
      description: "Permanent",
    },
    {
      title: "Weight (g)",
      description: "Minimum 2.5",
    },
  ];

const advapacer = () => {
  fadeUp();

  return (
    <>
      
          <Layout>
            <main>
              <Hero
                heading={"ADVAPACER"}
                className="text-[#CBA82A]"
                tagline={" Multifilament 316L Stainless Steel"}
                para1={
                  "  Supreme performance for ultimate confidence in sternum closure"
                }
                src={"/assets/advapacer/advapacer-hero.png"}
                bgimg={"/assets/advapacer/advapacer-bg.png"}
                para2={"Monofilament Non-Absorbable Surgical Suture"}
              />
              <ProductDescription className={"text-[#CBA82A]"} data={cardData1}/>
              <Advawax/>
              <ProductDescription className={"text-[#CBA82A]"} data={cardData2}/>
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

export default advapacer;
