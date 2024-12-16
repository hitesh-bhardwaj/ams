/* eslint-disable react-hooks/rules-of-hooks */
import Portfolio from "@/components/Endo/Portfolio";
import Product from "@/components/Hernia/Product";

import Genesis from "@/components/layoutComponents/Genesis";
import PortfolioSwiper from "@/components/layoutComponents/PortfolioSwiper";
import React from "react";
import Layout from "@/components/Layout";
import { fadeup } from "@/components/gsapAnimations";
import Pixifinal from "@/components/Pixifinal";
import { Media } from "@/components/media";
import Hero from "@/components/Hernia/Hero";

export default function hernia() {
  const content = {
    heading: "Redefining Hernia Surgery",
    smallpara:
      "Each polypropylene mesh is meticulously crafted to deliver exceptional strength, resilience, and biocompatibility, with a strong focus on infection resistance. Our advanced solutions support seamless tissue integration, reducing recurrence rates and elevating surgical outcomes. From open to minimally invasive surgeries, including robotic-assisted techniques, we provide versatile solutions tailored to a wide range of hernia repair needs, from inguinal to ventral procedures.",
    bigpara:
      "By leveraging inhouse technologies, AMS enhances the effectiveness of every repair while prioritizing patient comfort and swift recovery. We remain committed to adapting and designing products that meet evolving surgical demands, ensuring the best possible results for both surgeons and patients.",
    src: "/assets/hernia/hernia-redefine.png",
  };
  const hero = {
    title: "Advanced Hernia Repair Solutions for Superior Outcomes",
    src: "/assets/hernia/hernia-hero.webp",
    content:
      "At AMS, we are setting new standards in hernia repair with our cutting-edge hernia solutions.",
  };
  const slidesData = [
    {
      title: "A Partner in Your Success",
      src: "/assets/hernia/portfolio-1.png",
      heading: "Advancing Patient Recovery",
      para: "Our ADVAMESH products are designed to enhance patient recovery and comfort. By offering exceptional support and promoting natural tissue integration, our meshes minimize bioreactivity and reduce recurrence rates, ensuring a smoother recovery process.",
    },
    {
      src: "/assets/hernia/portfolio-2.png",
      heading: "Commitment to Excellence",
      para: "AMS is dedicated to maintaining the highest standards of quality and innovation. Our rigorous quality assurance protocols guarantee that every ADVAMESH product delivers superior performance and reliability. We continuously strive to meet the evolving needs of hernia repair through ongoing research and collaboration with leading surgeons.",
    },
    {
      src: "/assets/hernia/portfolio-3.png",
      heading: "Empowering Surgical Success",
      para: "AMS partners with healthcare professionals to achieve surgical success. Our comprehensive range of ADVAMESH products is supported by extensive training and resources, enabling surgeons to perform hernia repairs with confidence and precision. We provide the necessary tools and support to enhance surgical practice and improve patient care.",
    },
  ];
 fadeup()

  return (
    <>
      
          <Layout>
            <main>
             <Hero/>
              <Genesis
                content={content}
                sParaWidth={"w-[30%] ml-[5%] mobile:ml-0 tablet:ml-0"}
                bParaWidth={"w-[60%]"}
              />
              <PortfolioSwiper slidesData={slidesData}  textclass={"text-[#FFFFFF]"} width={"35%"}/>
              <Product />

              <Portfolio currentlink={"/hernia"} />
            </main>
          </Layout>
          <Media greaterThan='tablet'>
            <Pixifinal/>


          </Media>
        
        
    </>
  );
}
