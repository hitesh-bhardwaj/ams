/* eslint-disable react-hooks/rules-of-hooks */
import Genesis from "@/components/layoutComponents/Genesis";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import PortfolioSwiper from "@/components/layoutComponents/PortfolioSwiper";
import IcCards from "@/components/IC/IcCards";
import Portfolio from "@/components/Endo/Portfolio";
import Layout from "@/components/Layout";
import { fadeup } from "@/components/gsapAnimations";
import Pixifinal from "@/components/Pixifinal";
import { Media } from "@/components/media";
import Hero from "@/components/IC/Hero";

gsap.registerPlugin(ScrollTrigger);

export default function ic() {
  const content = {
    heading: "Innovation at the Heart of Healing",
    smallpara:
      "Transforming cardiac health through innovation and expertise, AMS is committed to advancing revascularization. Our comprehensive portfolio of interventional cardiology solutions, including PTCA Balloon Catheters and Drug Eluting Stents, is designed to address coronary artery disease with unwavering excellence and life-saving impact. Focused on minimally invasive solutions, advanced catheterization, and stent technologies, we aim to prevent restenosis and restore optimal blood flow. By combining evidence-based practices, data-driven outcomes, and collaboration in research, we empower cardiologists to tackle even the most complex percutaneous coronary interventions (PCI). ",
    bigpara:
      "With a steadfast dedication to enhancing quality of life and improving patient outcomes, AMS continues to shape the future of cardiology and redefine what’s possible in cardiovascular care.",
    src: "/assets/ic/ic-genesis.webp",
  };
  const hero = {
    title: "Advancing the Science of Flow Restoration",

    src: "/assets/ic/ic-hero-bg.png",
    content:
      "Every heartbeat tells a story of life, and at AMS, we are rewriting those stories with groundbreaking innovations. Our relentless pursuit of excellence is transforming the science of flow restoration, bringing hope and healing to millions affected by cardiovascular diseases.",
  };
  const slidesData = [
    {
      title: "The Next Frontier of PCI",
      src: "/assets/ic/ic-carousel-img-1.png",
      srcsmall:"/assets/ic/small1.png",
      heading: "Simplifying Complex Cardiac Interventions",
      para: "At AMS, we are committed to propelling your cardiac care to new heights. As cath lab complexities increase, our focus on innovation and quality provides you with advanced solutions that drive better patient outcomes and optimize procedural efficiency.",
    },
    {
      src: "/assets/ic/ic-carousel-img-2.png",
      srcsmall:"/assets/ic/small2.png",
      heading: "Confidence in Every Intervention",
      para: "With our PTCA Balloon Catheter Rx and cutting-edge Drug Eluting Stents, AMS is advancing the frontiers of interventional cardiology to enhance angioplasty procedures. Backed by expertise and innovation, our precision-driven solutions aim to restore confidence in treatment outcomes and elevate patient care globally.",
    },
    {
      src: "/assets/ic/ic-carousel-img-3.png",
      srcsmall:"/assets/ic/small3.png",
      heading: "Crafting Tomorrow's Solutions, Today",
      para: "AMS delivers interventional cardiology solutions built on unmatched production excellence, pioneering technology, and relentless innovation, driving pathbreaking advancements in cardiac care.",
    },
  ];
  fadeup()

  return (
    <>

      <Layout>
        <main>
          <Hero/>
          <Genesis
            content={content}
            sParaWidth={"w-[40%] ml-[6%] mobile:ml-0 tablet:ml-0"}
            bParaWidth={"w-[40%]"}
          />
          <PortfolioSwiper slidesData={slidesData} textclass={"text-[#2A2A2A]"} width={"35%"} />
          <IcCards />

          <Portfolio currentlink={"/interventional-cardiology"} />
        </main>
      </Layout>
      <Media greaterThan='tablet'>
        <Pixifinal/>
      </Media>
    </>
  );
}
