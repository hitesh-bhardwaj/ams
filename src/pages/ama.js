/* eslint-disable react-hooks/rules-of-hooks */
import Genesis from "@/components/layoutComponents/Genesis";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import Hero from "@/components/Hero";
import PortfolioSwiper from "@/components/layoutComponents/PortfolioSwiper";
import Discover from "@/components/Ama/Discover";
import CardsCarousel from "@/components/Ama/CardsCarousel";
import Layout from "@/components/Layout";
import { fadeup } from "@/components/gsapAnimations";
import Pixifinal from "@/components/Pixifinal";

gsap.registerPlugin(ScrollTrigger);

export default function ama() {
  const content = {
    heading: "Empowering Healthcare",
    smallpara:
      "Our R&D center stands as a testament to our commitment to advancing medical technology. Equipped with the latest in research and engineering tools, this facility is designed to foster collaboration among our top scientists, engineers, and healthcare innovators. Here, we are dedicated to developing solutions that push the boundaries of what’s possible in medical technology. By integrating diverse expertise and cutting-edge advancements.",
    bigpara:
      "At AMS, our R&D efforts are driven by the vision of creating transformative technologies that improve patient outcomes and enhance the quality of life worldwide.",
    src: "/assets/ama/ama-genesis-bg.webp",
  };
  const hero = {
    title: "Advanced MedTech Academy (AMA)",
    src: "/assets/ama/ama-hero-bg.webp",
    content:
      "At Advanced MedTech Academy, our commitment is to foster continuous learning and development for healthcare professionals who are at the forefront of patient care. Leveraging the broad expertise, resources, and dedication of the AMS family, we strive to enhance the skills and knowledge of those devoted to improving lives.",
  };
  const slidesData = [
    {
      title: "Advancing the way we learn",
      src: "/assets/ama/ama-carousel-img-1.png",
      heading: "Personalized & Insightful Training",
      para: "We provide tailored learning experiences that cater to the specific needs of healthcare practitioners. Our AMA programs deliver practical insights and advanced knowledge to keep you ahead in the ever-evolving medical field.",
    },
    {
      src: "/assets/ama/ama-carousel-img-2.png",
      heading: "Commitment to Excellence",
      para: "AMS is dedicated to maintaining the highest standards of quality and innovation. Our rigorous quality assurance protocols guarantee that every ADVAMESH product delivers superior performance and reliability.",
    },
    {
      src: "/assets/ama/ama-carousel-img-3.png",
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
                paraWidth={"max-w-[90vw]"}
                mode={"dark"}
              />
              <Genesis content={content} />
              <PortfolioSwiper slidesData={slidesData}  textclass={"text-[#2A2A2A]"}/>
              <CardsCarousel />
              <Discover />
            </main>
          </Layout>
          {/* <Pixifinal/> */}
       
    </>
  );
}
