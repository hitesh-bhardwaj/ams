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
      "Our R&D center stands as a testament to our commitment to advancing medical technology. Equipped with the latest in research and engineering tools, this facility is designed to foster collaboration among our top scientists, engineers, and healthcare innovators. Here, we are dedicated to developing solutions that push the boundaries of what’s possible in medical technology.",
    bigpara:
      "At AMS, our R&D efforts are driven by the vision of creating transformative technologies that improve patient outcomes and enhance the quality of life worldwide. ",
    src: "/assets/rnd/rnd-genesis-img.webp",
  };
  const hero = {
    title: "Pioneering MedTech Research and Development",
    src: "/assets/rnd/RND-hero-bg.webp",
    content:
      "At AMS, we're setting new standards in medical research and development. Our advanced R&D facility, located in the heart of a thriving innovation hub, is where science technology and groundbreaking research come together to address the most pressing health challenges of our time.",
  };
  const slidesData = [
    {
      title: "Vision for Enhanced Care",
      src: "/assets/rnd/rnd-carousel-img-1.webp",
      heading: "A Hub of Innovation",
      para: "We innovate in surgical and cardiovascular devices, providing clinicians with trusted, high-performance devices.",
    },
    {
      src: "/assets/rnd/rnd-carousel-img-2.webp",
      heading: "Collaborative Innovation",
      para: "We are committed to fostering flexible and holistic partnerships with R&D innovators globally, focusing on swift development and execution in manufacturing to deliver transformative solutions directly to healthcare practitioners.",
    },
    {
      src: "/assets/rnd/rnd-carousel-img-3.webp",
      heading: "Future of Possibility",
      para: "We are shaping the next generation of therapies that will redefine healthcare and deliver better outcomes for patients across the globe.",
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
                mode={""}
                paraWidth={"max-w-[50vw]"}
              />
              <Genesis content={content} />
              <PortfolioSwiper slidesData={slidesData} textclass={"text-[#FFFFFF]"} width={"35%"}/>
              <Innovation/>
              <Portfolio />
            </main>
          </Layout>
          <Media greaterThan='tablet'>
         <Pixifinal/> 


          </Media>
          
       
    </>
  );
}
