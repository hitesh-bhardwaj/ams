import Career from "@/components/Home/Career";
import Facility from "@/components/Home/Facility";
import Hero from "@/components/Home/Hero";
import Impact from "@/components/Home/Impact";
import dynamic from "next/dynamic";
import Layout from "@/components/Layout";
// import HomePageReel from "@/components/Home/HomePageReel";
import { Media } from "@/components/media";
import BgVideo from "@/components/Layout/BgVideo";
import { fadeUp, paraAnim } from "@/components/gsapAnimations";
import { NextSeo } from "next-seo";

const Product = dynamic(() => import("@/components/Home/Product"), {
  loading: () => <p>Loading products...</p>
});

const Blog = dynamic(() => import("@/components/Home/Blog"), {
  loading: () => <p>Loading blog...</p>
});

export default function Home() {

  fadeUp();
  paraAnim();

  return (
    <>
    <NextSeo
          title="Home – Advanced MedTech Solutions"
          description="Transforming global healthcare with advanced, affordable
medical solutions. Explore our innovative product range."
          openGraph={{
            title: "Home – Advanced MedTech Solutions",
            description: "Transforming global healthcare with advanced, affordable medical solutions. Explore our innovative product range.",
            images: [
              {
                url: "https://amsdev01.vercel.app/assets/seo/homepage.png",
                width: 1915,
                height: 948,
                alt: "Home – Advanced MedTech Solutions",
              },
            ],
          }}/>
      <Layout>
        <main>
          <Hero />
          {/* <HomePageReel /> */}
          <Product />
          <Impact />
          <Career />
          <Blog />
          <Facility />
        </main>
      </Layout>
      <Media greaterThan='tablet'>
        <BgVideo videoSrc={"/assets/bg-videos/original-bg.mp4"} />
      </Media>
    </>
  );
}
