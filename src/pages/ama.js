/* eslint-disable react-hooks/rules-of-hooks */
import Genesis from "@/components/layoutComponents/Genesis";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Hero from "@/components/Hero";
import PortfolioSwiper from "@/components/layoutComponents/PortfolioSwiper";
import Discover from "@/components/Ama/Discover";
import CardsCarousel from "@/components/Ama/CardsCarousel";
import Layout from "@/components/Layout";
import { fadeUp, paraAnim } from "@/components/gsapAnimations";
import { Media } from "@/components/media";
import CardiacCare from "@/components/Ama/CardiacCare";
import BgVideo from "@/components/Layout/BgVideo";

gsap.registerPlugin(ScrollTrigger);

export default function ama() {
  const content = {
    heading: "Advancing the Way We Learn",
    smallpara: "Nestled within the state-of-the-art AMS manufacturing facility in Vadodara, Advanced Medtech Academy (AMA) is a beacon for advancing healthcare education. With a sprawling world-class infrastructure spanning ___ sq. ft., AMA is dedicated to empowering healthcare professionals through advanced simulation and academic training. We believe that skillful hands and confident minds are the foundation for improving patient outcomes and transforming lives.",
    bigpara: "To support the professional growth of those who care for others, AMA's mission is simple yet profound: to inspire and elevate the expertise of healthcare teams—surgeons, physicians, nurses, and paramedical staff.",
    src: "/assets/ama/ama-genesis-bg.png",
  };

  const hero = {
    title: "Advanced MedTech Academy (AMA)",
    src: "/assets/ama/ama-bg-hero.png",
    content: "AMA's globally recognized for its industry experts and initiatives, centered on empowering healthcare professionals to achieve superior patient outcomes worldwide. By offering access to meticulously designed courses and workshops, AMA fosters a culture of learning that combines the science of medicine with the art of compassionate care.",
  };
  const slidesData = [
    {
      title: "Creating a Healthier World Together",
      src: "/assets/ama/ama-carousel-1.png",
      srcsmall: "/assets/ama/small1.png",
      heading: "Personalized and Insightful Training:",
      para: "AMA's structured courses span basic to advanced levels, covering cognitive skill development, advanced minimally invasive surgery, complex interventional cardiology and optimizing revascularization techniques.",
    },
    {
      src: "/assets/ama/ama-carousel-3.png",
      srcsmall: "/assets/ama/small2.png",
      heading: "Extensive Research and Science Library:",
      para: "With accessible learning anytime, anywhere—via classrooms, auditoriums, or online platforms—participants earn certifications, refine skills, and gain access to unparalleled resources, setting a new standard in medical education.",
    },
    {
      src: "/assets/ama/ama-carousel-2.png",
      srcsmall: "/assets/ama/small3.png",
      heading: "State of the art Hands on Training Center:",
      para: "Our world-class facilities offer hands-on training with life-like models and ex-vivo and in-vivo tissue, bridging theory and real-world application. Insight-driven modules, enriched with live procedure observations and collaborative discussions, deliver an unmatched immersive experience.",
    },
  ];

  fadeUp();
  paraAnim();

  return (
    <>

      <Layout>
        <main>
          <Hero
            title={hero.title}
            src={hero.src}
            content={hero.content}
            className="hidden"
            titleWidth={"!w-[100%]"}
            paraWidth={"max-w-[38vw]"}
            mode={"dark"}
          />
          <Genesis content={content} />
          <CardiacCare />
          <PortfolioSwiper slidesData={slidesData} textclass={"text-[#2A2A2A]"} width={"w-[35%] tablet:w-[50%]"} />
          <CardsCarousel />
          <Discover />
        </main>
      </Layout>
      <Media greaterThan='tablet'>
        <BgVideo videoSrc={"/assets/bg-videos/endo.mp4"} />
      </Media>
    </>
  );
}
