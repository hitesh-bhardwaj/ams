/* eslint-disable react-hooks/rules-of-hooks */

import Portfolio from "@/components/Endo/Portfolio";
import Product from "@/components/Endo/Product";
import Genesis from "@/components/layoutComponents/Genesis";
import Hero from "@/components/Hero";
import PortfolioSwiper from "@/components/layoutComponents/PortfolioSwiper";
import Layout from "@/components/Layout";
import { fadeup } from "@/components/gsapAnimations";
import Pixifinal from "@/components/Pixifinal";
import { Media } from "@/components/media";


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
      heading: "Cutting-Edge Technology for Superior Outcomes",
      para: "AMS'S ADVASTAP staplers define new standards in surgical safety and efficiency with our advanced technology.",
    },
    {
      src: "/assets/endo/endo-slider-2.png",
      heading: "Elevating Surgical Standards",
      para: "Crafted with cutting-edge technology and engineered by our expert R&D team, enhance patient outcomes through exceptional performance and reliability.",
    },
    {
      src: "/assets/endo/endo-slider-3.png",
      heading: "Why Surgeons Trust AMS",
      para: "Surgeons rely on AMS for our steadfast commitment to quality, innovation, and comprehensive support for optimal results.",
    },
  ];
  fadeup()
  // imageAnim()

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
              <PortfolioSwiper slidesData={slidesData}  textclass={"text-[#FFFFFF]"} width={"35%"}/>
              <Product />
              <Portfolio />
            </main>
          </Layout>
          <Media greaterThan='tablet'>
   <Pixifinal/> 
          </Media>
          
       
    </>
  );
}
