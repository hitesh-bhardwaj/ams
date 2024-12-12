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
import { Media } from "@/components/media";

gsap.registerPlugin(ScrollTrigger);

export default function ama() {
  const content = {
    heading: "Advancing the Way We Learn",
    smallpara:
      "Nestled within the state-of-the-art AMS manufacturing facility in Vadodara, Advanced Medtech Academy (AMA) is a beacon for advancing healthcare education. With a sprawling world-class infrastructure spanning ___ sq. ft., AMA is dedicated to empowering healthcare professionals through advanced simulation and academic training. We believe that skillful hands and confident minds are the foundation for improving patient outcomes and transforming lives.",
    bigpara:
      "To support the professional growth of those who care for others, AMA’s mission is simple yet profound: to inspire and elevate the expertise of healthcare teams—surgeons, physicians, nurses, and paramedical staff. ",
    src: "/assets/ama/ama-genesis-bg.webp",
  };
  const hero = {
    title: "Advanced MedTech Academy (AMA)",
    src: "/assets/ama/ama-hero-bg.webp",
    content:
      "AMA’s globally recognized for its industry experts and initiatives, centered on empowering healthcare professionals to achieve superior patient outcomes worldwide. By offering access to meticulously designed courses and workshops, AMA fosters a culture of learning that combines the science of medicine with the art of compassionate care.",
  };
  const slidesData = [
    {
      title: "Creating a Healthier World Together",
      src: "/assets/ama/ama-carousel-img-1.png",
      heading: "How do we empower those who dedicate their lives to healing others?",
      para: "At AMA, we equip healthcare professionals with the tools, knowledge, and confidence to navigate complex clinical challenges. Together, we are creating safer surgical settings, enhancing patient care, and building a future where excellence in healthcare knows no bounds.",
    },
    {
      src: "/assets/ama/ama-carousel-img-2.png",
      heading: "How do we put patients first in every aspect of care?",
      para: "Our ethos—“What can I do to improve patient care?”—guides every initiative. With a global network of renowned faculty, AMA provides not just learning but lifelong mentorship, supported by expert advice from the industry's most distinguished professionals.",
    },
    {
      src: "/assets/ama/ama-carousel-img-3.png",
      heading: "Personalized and insightful training: ",
      para: "AMA’s structured courses span basic to advanced levels, covering cognitive skill development, advanced minimally invasive surgery, complex interventional cardiology and optimizing revascularization techniques.",
    },
    {
      src: "/assets/ama/ama-carousel-img-3.png",
      heading: "Extensive research and Science library: ",
      para: "With accessible learning anytime, anywhere—via classrooms, auditoriums, or online platforms—participants earn certifications, refine skills, and gain access to unparalleled resources, setting a new standard in medical education.",
    },
    {
      src: "/assets/ama/ama-carousel-img-3.png",
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
                paraWidth={"max-w-[90vw]"}
                mode={"dark"}
              />
              <Genesis content={content} />
              <PortfolioSwiper slidesData={slidesData}  textclass={"text-[#2A2A2A]"}/>
              <CardsCarousel />
              <Discover />
            </main>
          </Layout>
          <Media at="desktop">
 <Pixifinal/>
          </Media>
         
       
    </>
  );
}
