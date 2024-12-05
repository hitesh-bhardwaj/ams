/* eslint-disable react-hooks/rules-of-hooks */

import Portfolio from "@/components/Endo/Portfolio";
import Product from "@/components/Endo/Product";
import Genesis from "@/components/layoutComponents/Genesis";
import Hero from "@/components/Hero";
import PortfolioSwiper from "@/components/layoutComponents/PortfolioSwiper";
import Layout from "@/components/Layout";
import { fadeup } from "@/components/gsapAnimations";


export default function endo() {
  const content = {
    heading: "Redefining Endo Surgery",
    smallpara:
      "At AMS, we are committed to advancing endo surgery with our innovative, dependable, and precision-engineered products. By focusing on advanced technology and stringent quality standards, AMS guarantees that each tool operates with optimal reliability and effectiveness, transforming surgical practices and enhancing patient outcomes. Our continuous efforts in R&D ensure that we stay ahead in providing cutting-edge solutions. We collaborate closely with healthcare professionals to tailor our products to the specific needs of each surgical procedure.",
    bigpara:
      "Our extensive range of surgical staplers empowers healthcare professionals to deliver exceptional care with confidence and efficiency.",
    src: "/assets/endo/endo-redefine.png",
  };
  const hero = {
    title: "Breaking New Ground in Endo Surgery",
    src: "/assets/endo/endo-hero.png",
    content:
      "At AMS, we push the boundaries of endo surgery and set new benchmarks in surgical excellence with our innovative and reliable solutions.",
  };
  const slidesData = [
    {
      title: "Your Partner in Surgical Excellence",
      src: "/assets/endo/endo-slider-1.png",
      heading: "Advancing Patient Recovery",
      para: "Our ADVAMESH products are designed to enhance patient recovery and comfort. By offering exceptional support and promoting natural tissue integration, our meshes minimize bioreactivity and reduce recurrence rates, ensuring a smoother recovery process.",
    },
    {
      src: "/assets/endo/endo-slider-2.png",
      heading: "Commitment to Excellence",
      para: "AMS is dedicated to maintaining the highest standards of quality and innovation. Our rigorous quality assurance protocols guarantee that every ADVAMESH product delivers superior performance and reliability.",
    },
    {
      src: "/assets/endo/endo-slider-3.png",
      heading: "Empowering Surgical Success",
      para: "AMS partners with healthcare professionals to achieve surgical success. Our comprehensive range of ADVAMESH products is supported by extensive training and resources, enabling surgeons to perform hernia repairs with confidence and precision.",
    },
  ];
  fadeup()

  return (
    <>
    
          <Layout>
            <main>
              <Hero
                title={hero.title}
                src={hero.src}
                content={hero.content}
                className="hidden"
                mode={"dark"}
              />
              <Genesis
                content={content}
                sParaWidth={"w-[50%] ml-[5%] mobile:ml-0 tablet:ml-0"}
                bParaWidth={"w-[30%]"}
              />
              <PortfolioSwiper slidesData={slidesData} />
              <Product />
              <Portfolio />
            </main>
          </Layout>
       
    </>
  );
}
