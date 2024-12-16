import Career from "@/components/Home/Career";
import Facility from "@/components/Home/Facility";
import Hero from "@/components/Home/Hero";
import Impact from "@/components/Home/Impact";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import dynamic from "next/dynamic"; // Import next/dynamic
import Layout from "@/components/Layout";
import { fadeup, imageAnim } from "@/components/gsapAnimations";
import Pixifinal from "@/components/Pixifinal";
import HomePageReel from "@/components/Home/HomePageReel";
import { Media } from "@/components/media";


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

  fadeup()
  // imageAnim()

  return (
    <>
      <Layout>
        <main>
          <Hero />
          <HomePageReel/>   
          <Product />
          <Impact />
          <Career />
          <Blog />
          <Facility />
        </main>
      </Layout>
      <Media greaterThan='tablet'>
             <Pixifinal/>


      </Media>
      
    </>
  );
}
