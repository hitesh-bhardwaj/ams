/* eslint-disable react-hooks/rules-of-hooks */
import Genesis from "@/components/layoutComponents/Genesis";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Hero from "@/components/Hero";
import PortfolioSwiper from "@/components/layoutComponents/PortfolioSwiper";
import Discover from "@/components/Ama/Discover";
import CardsCarousel from "@/components/Ama/CardsCarousel";
import Layout from "@/components/Layout";
import { fadeup } from "@/components/gsapAnimations";
import Pixifinal from "@/components/Pixifinal";
import { Media } from "@/components/media";
import CardiacCare from "@/components/Ama/CardiacCare";

gsap.registerPlugin(ScrollTrigger);

export default function ama() {
  const content = {
    heading: "Advancing the Way We Learn",
    smallpara:
      "Nestled within the state-of-the-art AMS manufacturing facility in Vadodara, Advanced Medtech Academy (AMA) is a beacon for advancing healthcare education. With a sprawling world-class infrastructure spanning ___ sq. ft., AMA is dedicated to empowering healthcare professionals through advanced simulation and academic training. We believe that skillful hands and confident minds are the foundation for improving patient outcomes and transforming lives.",
    bigpara:
      "We prioritize rigorous R&D and adhere to global standards, guaranteeing our products meet the highest quality and innovation benchmarks in the industry. ",
    src: "/assets/ama/ama-genesis-bg.png",
  };
  const hero = {
    title: "Advanced MedTech Academy (AMA)",
    src: "/assets/ama/ama-bg-hero.png",
    content:
      "AMA’s globally recognized for its industry experts and initiatives, centered on empowering healthcare professionals to achieve superior patient outcomes worldwide. Through meticulously curated programs that impart advanced knowledge and skills, foster expertise, and nurture a culture of continuous learning.",
  };
  const slidesData = [
    {
      title: "Advancing the way we learn",
      src: "/assets/ama/ama-carousel-1.png",
      heading: "Personalized and insightful training:",
      para: "AMA’s structured courses span basic to advanced levels, covering cognitive skill development, advanced minimally invasive surgery, complex interventional cardiology and optimizing revascularization techniques.",
    },
    {
      src: "/assets/ama/ama-carousel-2.png",
      heading: "State of the art hands on training center:",
      para: "Our world-class facilities offer hands-on training with life-like models and ex-vivo and in-vivo tissue, bridging theory and real-world application. Insight-driven modules, enriched with live procedure observations and collaborative discussions, deliver an unmatched immersive experience.",
    },
    {
      src: "/assets/ama/ama-carousel-3.png",
      heading: "Personalized and insightful training: ",
      para: "AMA’s structured courses span basic to advanced levels, covering cognitive skill development, advanced minimally invasive surgery, complex interventional cardiology and optimizing revascularization techniques.",
    },
    {
      src: "/assets/ama/ama-carousel-3.png",
      heading: "Extensive research and Science library: ",
      para: "With accessible learning anytime, anywhere—via classrooms, auditoriums, or online platforms—participants earn certifications, refine skills, and gain access to unparalleled resources, setting a new standard in medical education.",
    },
    {
      src: "/assets/ama/ama-carousel-3.png",
      heading: "State of the art hands on training center:",
      para: "Our world-class facilities offer hands-on training with life-like models and ex-vivo and in-vivo tissue, bridging theory and real-world application. Insight-driven modules, enriched with live procedure observations and collaborative discussions, deliver an unmatched immersive experience.",
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
                paraWidth={"max-w-[38vw]"}
                mode={"dark"}
              />
              <Genesis content={content} />
              <CardiacCare/>
              <PortfolioSwiper slidesData={slidesData}  textclass={"text-[#2A2A2A]"} width={"60%"}/>
              <CardsCarousel />
              <Discover />
            </main>
          </Layout>
          <Media greaterThan="tablet">
    <Pixifinal/> 
          </Media>
         
       
    </>
  );
}
