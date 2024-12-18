import Portfolio from "@/components/Endo/Portfolio";

import Layout from "@/components/Layout";
import Genesis from "@/components/layoutComponents/Genesis";
import { Media } from "@/components/media";
import Pixifinal from "@/components/Pixifinal";
import Hero from "@/components/Woundclosure/Hero";
import SutureCarouselFirst from "@/components/Woundclosure/SutureCarouselFirst";
import SutureCarousel from "@/components/Woundclosure/SutureCarouselFirst";
import SutureCarouselSecond from "@/components/Woundclosure/SutureCarouselSecond";
import React from "react";

const woundClosure = () => {
  const content = {
    heading: "Seal of Confidence",
    smallpara:
      "Every surgery delivers a life changing impact for patients. Towards that purpose, our advanced surgical sutures are designed to offer unmatched precision, unparalleled strength and optimal efficiency. Poised to redefine the way surgery is done, our suture range maintains the integrity of closure with absolute strength retention while minimizing the risk of infection and tissue trauma. Developed at our state of art facility, Advanced MedTech Solutions suture range helps you achieve optimal patient outcomes by delivering consistent product performance pass after pass.",
    bigpara:
      "Our extensive portfolio of sutures includes products for a wide spectrum of general and specialized surgeries.",
    src: "/assets/woundclosure/wound-closure-genesis-bg.png",
  };
  return (
    <>
      <Layout>
        <main>
          <Hero/>
          <Genesis
            content={content}
            sParaWidth={"w-[50%] ml-[5%] mobile:ml-0 tablet:ml-0"}
            bParaWidth={"w-[30%]"}
          />
          <SutureCarouselFirst />
          <SutureCarouselSecond />
          <Portfolio currentlink={"/wound-care"} sectionheading={"Our Advanced Portfolio"}/>
        </main>
        
      </Layout>
      <Media greaterThan='tablet'>
            <Pixifinal/>
          </Media>
    </>
  );
};

export default woundClosure;
