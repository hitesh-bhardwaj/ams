import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Blog from "@/components/Home/Blog";
import Career from "@/components/Home/Career";
import Facility from "@/components/Home/Facility";
import Hero from "@/components/Home/Hero";
import HeroCarousel from "@/components/Home/HeroCarousel";
import Impact from "@/components/Home/Impact";
import ManufacturingCarousel from "@/components/Home/ManufactingCarousel";
import Manufacturing from "@/components/Home/Manufacturing";
import Manufacturingmobile from "@/components/Home/Manufacturingmobile";
import Product from "@/components/Home/Product";
import Transition from "@/components/Transition";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check window size and set the state accordingly
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 541); // Example breakpoint for mobile
    };

    // Run on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      <Header />
      <main>
        <Hero />
        {isMobile ? <Manufacturingmobile /> : <Manufacturing />}
        {/* <HeroCarousel/> */}
        {/* <ManufacturingCarousel /> */}
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
