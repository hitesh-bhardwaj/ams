/* eslint-disable react-hooks/rules-of-hooks */
import Genesis from "@/components/layoutComponents/Genesis";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import PortfolioSwiper from "@/components/layoutComponents/PortfolioSwiper";
import IcCards from "@/components/IC/IcCards";
import Portfolio from "@/components/Endo/Portfolio";
import Layout from "@/components/Layout";
import { fadeUp } from "@/components/gsapAnimations";
import { Media } from "@/components/media";
import Hero from "@/components/IC/Hero";
import ICProducts from "@/components/IC/ICProducts";
import BgVideo from "@/components/Layout/BgVideo";

gsap.registerPlugin(ScrollTrigger);

export default function ic() {
  const content = {
    heading: "Transforming Cardiac Surgery",
    smallpara:
      "Our commitment to advancing the science of flow restoration is reflected in our cutting-edge products and technologies. We focus on developing innovative solutions that address the critical needs of cardiovascular health, ensuring that every heartbeat is supported by the best possible care. By combining advanced technology with clinical expertise, AMS is dedicated to improving patient outcomes and enhancing the quality of life for those affected by cardiovascular diseases.",
    bigpara:
      "Our IC portfolio includes state-of-the-art devices designed to restore and maintain optimal blood flow in patients with coronary artery disease.",
    src: "/assets/ic/ic-genesis.webp",
  };
  const slidesData = [
    {
      title: "Discover How We Advance Cardiology",
      src: "/assets/ic/ic-carousel-img-1.png",
      srcsmall:"/assets/ic/small1.png",
      heading: "A New Era In Healthcare",
      para: "AMS has forayed into the Interventional Cardiology space with the arrival of its PTCA Balloon Catheter Rx and forthcoming launch of its Drug Eluting Stent and related accessories. Our advanced technologies, decades rich experiences of our people and partners in healthcare brings synergy to enhance confidence of Interventional Cardiologists globally.",
    },
    {
      src: "/assets/ic/ic-carousel-img-2.png",
      srcsmall:"/assets/ic/small2.png",
      heading: "Elevate Your Cardiac Care",
      para: "At AMS, we are committed to propelling your cardiac care to new heights. As cath lab complexities increase, our focus on innovation and quality provides you with advanced solutions that drive better patient outcomes and optimize procedural efficiency.",
    },
    {
      src: "/assets/ic/ic-carousel-img-3.png",
      srcsmall:"/assets/ic/small3.png",
      heading: "Quality First’ Culture",
      para: "AMS has forayed into the Interventional Cardiology space with the arrival of its PTCA Balloon Catheter Rx and forthcoming launch of its Drug Eluting Stent and related accessories. Our advanced technologies, decades rich experiences of our people and partners in healthcare brings synergy to enhance confidence of Interventional Cardiologists globally.",
    },
  ];
  fadeUp()

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
          <PortfolioSwiper slidesData={slidesData} textclass={"text-[#2A2A2A]"} width={"w-[35%] tablet:w-[50%]"}/>
          <IcCards />
          <Portfolio currentlink={"/interventional-cardiology"} sectionheading={"Our Advanced Therapies"}/>
        </main>
      </Layout>
      <Media greaterThan='tablet'>
        <BgVideo videoSrc={"/assets/bg-videos/interventional-cardiology.mp4"} />
      </Media>
    </>
  );
}
