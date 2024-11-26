/* eslint-disable react-hooks/rules-of-hooks */
import Hero from "@/components/Products/Hero";
import NextGeneration from "@/components/Products/NextGeneration";
import ProductDescription from "@/components/Products/ProductDescription";
import Uncover from "@/components/Products/Uncover";
import { fadeUp } from "@/components/gsapAnimations";
import Layout from "@/components/Layout";
import UmbilicalTape from "@/components/AdvabondTape/UmbilicalTape";

const bondtape= () => {
  fadeUp();

  return (
    <>
      
          <Layout>
            <main>
              <Hero
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
              <ProductDescription className={"text-[#F08144]"} />
              <UmbilicalTape/>
              <ProductDescription className={"text-[#79C0E4]"}/>
              <NextGeneration />
              <Uncover />
            </main>
          </Layout>
        
    </>
  );
};

export default bondtape;
