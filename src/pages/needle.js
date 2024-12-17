/* eslint-disable react-hooks/rules-of-hooks */
import Genesis from "@/components/layoutComponents/Genesis";
import PortfolioSwiper from "@/components/layoutComponents/PortfolioSwiper";
import Hero from "@/components/Needle/Hero";
import FeatureCards from "@/components/Needle/FeatureCards";
import Advance from "@/components/Needle/Advance";
import Layout from "@/components/Layout";
import { fadeup } from "@/components/gsapAnimations";
import Pixifinal from "@/components/Pixifinal";
import { Media } from "@/components/media";


export default function needle() {
  const content = {
    heading: "Quantum Leap In Needle Tech",
    smallpara:
      "Pioneering needle technology stands as the culmination of innovation, surpassing industry leaders in needle penetration force data and ductility. Our extensive studies demonstrate superior consistency, ensuring no degradation in strength across multiple passes.",
    bigpara:
      "This alloy represents the pinnacle of research and testing, ensuring top performance across numerous medical procedures and diverse needle applications.",
    src: "/assets/needle/needle-genesis-img.webp",
  };
  const slidesData = [
    {
      title: "From Concept to Perfection",
      src: "/assets/needle/needle-carousel-img-2.webp",
      srcsmall:"/assets/needle/small1.png",
      heading: "Exceptional Core ",
      para: "Our needles are crafted from premium-grade stainless steel 302 alloy, known for their outstanding durability, malleability, and corrosion resistance, ensuring the highest performance in the operating zone.",
    },
    {
      src: "/assets/needle/needle-carousel-img-3.webp",
      srcsmall:"/assets/needle/small2.png",
      heading: "Engineering Meets Automation",
      para: "Witness the pinnacle of precision engineering behind the next generation intelligent alloy with immaculate point geometry. Employing state-of-the-art robotics and advanced manufacturing, each needle is honed to perfection, with a needle tip so incredibly sharp it breezes through tissue with remarkable ease.",
    },
    {
      src: "/assets/needle/needle-carousel-img-1.png",
      srcsmall:"/assets/needle/small3.png",
      heading: "Enduring Quality Control",
      para: "Every needle is subjected to stringent testing for sharpness, durability, and swage integrity, guaranteeing flawless performance and reliability in all surgical applications.",
    },
  ];

  fadeup()

  return (
    <>
      
          <Layout>
            <main>
              <Hero />
              <Genesis
                content={content}
                sParaWidth={"w-[40%] ml-[5%] mobile:ml-0 tablet:ml-0"}
                bParaWidth={"w-[70%]"}
              />
              <PortfolioSwiper slidesData={slidesData} textclass={"text-[#FFFFFF]"} width={"35%"}/>
              <FeatureCards />
              <Advance />
            </main>
          </Layout>
          <Media greaterThan='tablet'>
          {/* <Pixifinal/> */}



          </Media>
          
        
    </>
  );
}
