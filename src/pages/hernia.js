/* eslint-disable react-hooks/rules-of-hooks */
import Portfolio from "@/components/Endo/Portfolio";
import Product from "@/components/Hernia/Product";
import Hero from "@/components/Hero";
import Genesis from "@/components/layoutComponents/Genesis";
import PortfolioSwiper from "@/components/layoutComponents/PortfolioSwiper";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Layout from "@/components/Layout";
gsap.registerPlugin(ScrollTrigger);

export default function hernia() {
  const content = {
    heading: "Redefining Hernia  Surgery",
    smallpara:
      "Each product is meticulously crafted to ensure exceptional strength and resilience, with a focus on biocompatibility and infection resistance. Our advanced designs support seamless tissue integration and contribute to reduced recurrence rates. By leveraging innovative technology, we enhance the effectiveness of each repair and prioritize patient comfort and recovery. Our dedication to quality and performance ensures that our solutions meet the highest standards, empowering surgeons and improving surgical outcomes.",
    bigpara:
      "Trust AMS to provide reliable and effective solutions for superior hernia repair. With our ongoing commitment to research and development.",
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
      para: "AMS is dedicated to maintaining the highest standards of quality and innovation. Our rigorous quality assurance protocols guarantee that every ADVAMESH product delivers superior performance and reliability.",
    },
    {
      src: "/assets/hernia/portfolio-3.png",
      heading: "Empowering Surgical Success",
      para: "AMS partners with healthcare professionals to achieve surgical success. Our comprehensive range of ADVAMESH products is supported by extensive training and resources, enabling surgeons to perform hernia repairs with confidence and precision.",
    },
  ];
  useEffect(() => {
    const ctx = gsap.context(() => {
      const fadeUps = document.querySelectorAll(".fadeUp");
      fadeUps.forEach((fadeUp) => {
        gsap.fromTo(
          fadeUp,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.3,
            ease: "Power3.out",
            scrollTrigger: {
              trigger: fadeUp,
              start: "top 85%",
            },
          }
        );
      });
    });
    return () => ctx.revert();
  });

  return (
    <>
      
          <Layout>
            <main>
              <Hero
                title={hero.title}
                src={hero.src}
                content={hero.content}
                className="hidden"
              />
              <Genesis
                content={content}
                sParaWidth={"w-[60%] ml-[5%] mobile:ml-0 tablet:ml-0"}
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
