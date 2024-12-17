import Career from "@/components/Home/Career";
import Facility from "@/components/Home/Facility";
import Hero from "@/components/Home/Hero";
import Impact from "@/components/Home/Impact";
import dynamic from "next/dynamic";
import Layout from "@/components/Layout";
import { fadeup } from "@/components/gsapAnimations";
import Pixifinal from "@/components/Pixifinal";
import HomePageReel from "@/components/Home/HomePageReel";
import { Media } from "@/components/media";

const Product = dynamic(() => import("@/components/Home/Product"), {
  loading: () => <p>Loading products...</p>
});

const Blog = dynamic(() => import("@/components/Home/Blog"), {
  loading: () => <p>Loading blog...</p>
});

export default function Home() {

  fadeup()

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
        <Pixifinal />
      </Media>
    </>
  );
}
