/* eslint-disable react-hooks/rules-of-hooks */
import AdvastapHD3 from "@/components/Advastap/AdvastapHD3";
import AdvastapHD2 from "@/components/Advastap/AdvstapHD2";
import Hd2Carousel from "@/components/Advastap/Hd2Carousel";
import Hd3Carousel from "@/components/Advastap/Hd3Carousel";
import Hero from "@/components/Advastap/Hero";
import Specifications from "@/components/Advastap/Specifications";
import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import gsap from "gsap";

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
      
          <Layout>
            <main>
              <Hero />
              <AdvastapHD2/>
              <Hd2Carousel/>
              <Specifications />
              <AdvastapHD3/>
              <Hd3Carousel/>
              <Specifications />
            </main>
          </Layout>
       
    </>
  );
};

export default advastap;
