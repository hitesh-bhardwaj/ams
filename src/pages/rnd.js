/* eslint-disable react-hooks/rules-of-hooks */
import Genesis from "@/components/layoutComponents/Genesis";
import Hero from "@/components/Hero";
import PortfolioSwiper from "@/components/layoutComponents/PortfolioSwiper";
import Portfolio from "@/components/Endo/Portfolio";
import Layout from "@/components/Layout";
import { fadeup } from "@/components/gsapAnimations";
import Innovation from "@/components/Rnd/Innovation";


export default function rnd() {
  const content = {
    heading: "Innovating for Tomorrow",
    smallpara:
      "Our R&D center stands as a testament to our commitment to advancing medical technology. Equipped with the latest in research and engineering tools, this facility is designed to foster collaboration among our top scientists, engineers, and healthcare innovators. Here, we are dedicated to developing solutions that push the boundaries of what’s possible in medical technology. By integrating diverse expertise and cutting-edge advancements.",
    bigpara:
      "At AMS, our R&D efforts are driven by the vision of creating transformative technologies that improve patient outcomes and enhance the quality of life worldwide.",
    src: "/assets/rnd/rnd-genesis-img.webp",
  };
  const hero = {
    title: "Pioneering Innovation in Medical Research & Development",
    src: "/assets/rnd/RND-hero-bg.webp",
    content:
      "At AMS, we’re setting new standards in medical research and development. Our advanced R&D facility, located in the heart of a thriving innovation hub, is where cutting-edge technology and groundbreaking research come together to address the most pressing health challenges of our time.",
  };
  const slidesData = [
    {
      title: "Vision for Enhanced Care",
      src: "/assets/rnd/rnd-carousel-img-1.webp",
      heading: "A Hub of Innovation",
      para: "We advance surgical devices in wound care, cardiovascular, interventional cardiology, hernia solutions, and endo surgery to transform patient care and support surgeons with reliable solutions.",
    },
    {
      src: "/assets/rnd/rnd-carousel-img-2.webp",
      heading: "Commitment to Excellence",
      para: "AMS is dedicated to maintaining the highest standards of quality and innovation. Our rigorous quality assurance protocols guarantee that every ADVAMESH product delivers superior performance and reliability.",
    },
    {
      src: "/assets/rnd/rnd-carousel-img-3.webp",
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
                paraWidth={"max-w-[50vw]"}
              />
              <Genesis content={content} />
              <PortfolioSwiper slidesData={slidesData} />
              <Innovation/>
              <Portfolio />
            </main>
          </Layout>
       
    </>
  );
}
