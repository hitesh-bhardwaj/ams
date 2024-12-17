/* eslint-disable react-hooks/rules-of-hooks */
import Genesis from "@/components/layoutComponents/Genesis";
import Hero from "@/components/Hero";
import PortfolioSwiper from "@/components/layoutComponents/PortfolioSwiper";
import Portfolio from "@/components/Endo/Portfolio";
import Layout from "@/components/Layout";
import { fadeup } from "@/components/gsapAnimations";
import Innovation from "@/components/Rnd/Innovation";
import Pixifinal from "@/components/Pixifinal";
import { Media } from "@/components/media";


export default function rnd() {
  const content = {
    heading: "Innovating for Tomorrow",
    smallpara:
      "Our R&D center stands as a testament to our commitment to advancing medical technology. Equipped with the latest in research and engineering tools, this facility is designed to foster collaboration among our top scientists, engineers, and healthcare innovators. Here, we are dedicated to developing solutions that push the boundaries of what’s possible in medical technology. By integrating diverse expertise and cutting-edge advancements.",
    bigpara:
      "At AMS, our R&D efforts are driven by the vision of creating transformative technologies that improve patient outcomes and enhance the quality of life worldwide. ",
    src: "/assets/rnd/rnd-genesis-img.webp",
  };
  const hero = {
    title: "Pioneering Innovation in Medical Research & Development",
    
    src: "/assets/rnd/RND-hero-bg.png",
    content:
      "At AMS, we’re setting new standards in medical research and development. Our advanced R&D facility, located in the heart of a thriving innovation hub, is where cutting-edge technology and groundbreaking research come together to address the most pressing health challenges of our time.",
  };
  const slidesData = [
    {
      title: "Vision for Enhanced Care",
      src: "/assets/rnd/rnd-carousel-img-1.png",
      srcsmall:"/assets/rnd/small1.png",
      heading: "A Hub of Innovation",
      para: "We advance surgical devices in wound care, cardiovascular, interventional cardiology, hernia solutions, and endo surgery to transform patient care and support surgeons with reliable solutions.",
    },
    {
      src: "/assets/rnd/rnd-carousel-img-2.png",
      srcsmall:"/assets/rnd/small2.png",
      heading: "Collaborative Excellence",
      para: "Our tech-driven R&D hub collaborates with leaders, startups, and academics to accelerate the development of next-gen medical solutions.",
    },
    {
      src: "/assets/rnd/rnd-carousel-img-3.png",
      srcsmall:"/assets/rnd/small3.png",
      heading: "A Future of Possibilities",
      para: "We are committed to evolving our R&D capabilities to tackle global health challenges and drive impactful medical innovations.",
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
                titleColor={true}
                mode={"dark"}
                titleWidth={"w-[110%]"}
                paraWidth={"max-w-[50vw]"}
              />
              <Genesis content={content} />
              <PortfolioSwiper slidesData={slidesData} textclass={"text-[#FFFFFF]"} width={"35%"}/>
              <Innovation/>
              <Portfolio />
            </main>
          </Layout>
          <Media greaterThan='tablet'>
          <Pixifinal />
          </Media>
          
       
    </>
  );
}
