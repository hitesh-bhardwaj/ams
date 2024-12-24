/* eslint-disable react-hooks/rules-of-hooks */
import Genesis from "@/components/layoutComponents/Genesis";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Layout from "@/components/Layout";
import { fadeUp } from "@/components/gsapAnimations";
import Portfolio from "@/components/Endo/Portfolio";
import ProductCarousel from "@/components/CardioVascular/ProductCarousel";
import Products from "@/components/CardioVascular/Products";
import { Media } from "@/components/media";
import Hero from "@/components/CardioVascular/Hero";
import BgVideo from "@/components/Layout/BgVideo";

gsap.registerPlugin(ScrollTrigger);

export default function cardiovascular() {
  const content = {
    heading: "Transforming Cardiac Health",
    smallpara:
      "We are advancing cardiac surgery through continuous innovation, evidence-based practices, and scientific rigor, equipping surgeons with the latest tools to address complex conditions like coronary artery disease, valvular heart disorders, and congenital heart defects. By integrating cutting-edge advancements in surgical procedures, device technologies, and cardiothoracic innovation, we provide clinicians with the resources to optimize patient outcomes. Through collaboration and rapid adaptation to evolving clinical challenges, we ensure every intervention is guided by precision, scientific evidence, and the highest standards of care. ",
    bigpara:
      "Together, we are shaping the future of cardiac surgery, advancing therapeutic options and improving patient quality of life.",
    src: "/assets/cardioVascular/cardio-vascular-genesis-bg.png",
  };

  fadeUp()

  return (
    <>

      <Layout>
        <main>
         <Hero/>
          <Genesis content={content} sParaWidth={"w-[50%] ml-[5%] mobile:ml-0 tablet:ml-0"}
            bParaWidth={"w-[30%]"} />
          <Media at="desktop">
            <Products />
          </Media>
          <Media at="mobile">
            <ProductCarousel />
          </Media>
          <Media at="tablet">
            <ProductCarousel />
          </Media>
          <Portfolio currentlink={"/cardiovascular-solutions"} sectionheading={"Our Advanced Therapies"}/>
        </main>
      </Layout>
      <Media greaterThan='tablet'>
        <BgVideo videoSrc={"/assets/bg-videos/interventional-cardiology.mp4"} />
      </Media>
    </>
  );
}
