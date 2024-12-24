/* eslint-disable react-hooks/rules-of-hooks */
import Discover from "@/components/Career/Discover";
import Jobs from "@/components/Career/Jobs";
import Work from "@/components/Career/Work";
import Hero from "@/components/Career/Hero";
import Layout from "@/components/Layout";
import { fadeUp, paraAnim } from "@/components/gsapAnimations";
import { Media } from "@/components/media";
import BgVideo from "@/components/Layout/BgVideo";
import { NextSeo } from "next-seo";


export default function career() {
  fadeUp();
  paraAnim();

  return (
    <>
     <NextSeo
            title="Careers – Join Advanced MedTech Solutions"
            description="Grow with us! Explore exciting career opportunities at Advanced
MedTech Solutions and make an impact in healthcare."
            openGraph={{
              title: "Careers – Join Advanced MedTech Solutions",
              description:
                "Grow with us! Explore exciting career opportunities at Advanced MedTech Solutions and make an impact in healthcare.",
              images: [
                {
                  url: "https://amsdev01.vercel.app/assets/seo/career.png",
                  width: 1915,
                  height: 948,
                  alt: "Careers – Join Advanced MedTech Solutions",
                },
              ],
            }}
          />
      <Layout>
        <main>
          <Hero />
          <Work />
          <Jobs />
          <Discover />
        </main>
      </Layout>
      <Media greaterThan='tablet'>
        <BgVideo videoSrc={"/assets/bg-videos/original-bg.mp4"} />
      </Media>
    </>
  );
}
