import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Career from "@/components/Home/Career";
import Facility from "@/components/Home/Facility";
import Hero from "@/components/Home/Hero";
import Impact from "@/components/Home/Impact";
import Transition from "@/components/Transition";
// import { useGSAP } from "@gsap/react";
// import { imageAnim } from "@/components/gsapAnimations";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import dynamic from 'next/dynamic'; // Import next/dynamic
import Bg from "@/components/Bg";
// import { imageAnim } from "@/components/gsapAnimations";

// Dynamically load the components
const ManufacturingCarousel = dynamic(() => import("@/components/Home/ManufactingCarousel"), {
  loading: () => <p>Loading carousel...</p>, // Optional loading component
});

const Product = dynamic(() => import("@/components/Home/Product"), {
  loading: () => <p>Loading products...</p>, // Optional loading component
});

const Blog = dynamic(() => import("@/components/Home/Blog"), {
  loading: () => <p>Loading blog...</p>, // Optional loading component
});

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lineDraws = document.querySelectorAll(".lineDraw");
      lineDraws.forEach((lineDraw) => {
        gsap.fromTo(
          lineDraw,
          {
            scaleX: 0,
            transformOrigin: "left",
          },
          {
            scaleX: 1,
            duration: 2,
            ease: "expo.out",
            scrollTrigger: {
              trigger: lineDraw,
              start: "top 90%",
            },
          }
        );
      });
    });
    return () => ctx.revert();
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const fadeUps = document.querySelectorAll(".fadeUp");
      fadeUps.forEach((fadeUp) => {
        gsap.fromTo(
          fadeUp,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "Power3.out",
            scrollTrigger: {
              trigger: fadeUp,
              start: "top 85%",
            },
          }
        );
      });
    });
    return () => ctx.revert();
  });

  return (
    <>
    <Bg/>
      <Header />
      <main>
        <Hero />
        
        {/* Dynamically loaded components */}
        <ManufacturingCarousel />
        <Product />
        <Impact />
        <Career />
        <Blog />
        <Facility />
      </main>
      <Footer />
      <Transition />
    </>
  );
}
