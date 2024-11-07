import About from "@/components/Advastap/About";
import HD2 from "@/components/Advastap/HD2";
import Hero from "@/components/Advastap/Hero";
import Specifications from "@/components/Advastap/Specifications";
import SpecificationsCarousel from "@/components/Advastap/SpecificationsCarousel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";

const advastap = () => {
  const [smoother, setSmoother] = useState(null);
  useEffect(() => {
    const initializeScrollSmoother = async () => {
      if (window.innerWidth >= 1024) {
        const { default: ScrollSmoother } = await import(
          "@/components/ScrollSmoother.min.js"
        );
        gsap.registerPlugin(ScrollSmoother);

        const smootherInstance = ScrollSmoother.create({
          smooth: 1,
          effects: true,
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
        });
        setSmoother(smootherInstance);
      }
    };
    initializeScrollSmoother();

    return () => {
      smoother && smoother.kill();
    };
  }, [smoother]);
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Layout>
            <main>
              <Hero />
              <About />
              <SpecificationsCarousel />
              <Specifications />
              <HD2 />
              <SpecificationsCarousel />
              <Specifications />
            </main>
          </Layout>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default advastap;
