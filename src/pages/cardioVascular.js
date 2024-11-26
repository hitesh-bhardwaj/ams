/* eslint-disable react-hooks/rules-of-hooks */
import Genesis from "@/components/layoutComponents/Genesis";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import { fadeup } from "@/components/gsapAnimations";
import Portfolio from "@/components/Endo/Portfolio";

gsap.registerPlugin(ScrollTrigger);

export default function cardioVascular() {
  const content = {
    heading: "Transforming Cardiac Health",
    smallpara:
      "Every surgery delivers a life changing impact for patients. Towards that purpose, Advanced Medtech Solutions Cardiovascular Sutures are designed to offer unmatched precision, unparalleled strength and optimal efficiency. Poised to redefine the way surgery is done, AMS’ CV suture range maintains the integrity of closure with absolute strength retention while minimizing tissue trauma. Our Advanced Cardiovascular Solutions helps you achieved optimal patient outcomes by delivering consistent product preformance pass after pass. ",
    bigpara:
      "Our CV portfolio includes state-of-the-art devices designed to restore and maintain optimal blood flow in patients with coronary artery disease.",
    src: "/assets/cardioVascular/cardio-vascular-genesis-bg.png",
  };
  const hero = {
    title: "Advanced Cardiovascular Solutions",
    src: "/assets/cardioVascular/cardio-vascular-hero-bg.png",
    content:
      "Steady Performance for Superior confidence",
  };

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
              />
              <Genesis content={content} sParaWidth={"w-[50%] ml-[5%] mobile:ml-0 tablet:ml-0"}
                bParaWidth={"w-[30%]"} />
              <Portfolio/>
            </main>
          </Layout>
       
    </>
  );
}
