/* eslint-disable react-hooks/rules-of-hooks */
import Discover from "@/components/Career/Discover";
import Jobs from "@/components/Career/Jobs";
import Work from "@/components/Career/Work";
import Hero from "@/components/Career/Hero";
import Layout from "@/components/Layout";
import { fadeUp, paraAnim } from "@/components/gsapAnimations";
import { Media } from "@/components/media";
import BgVideo from "@/components/Layout/BgVideo";


export default function career() {
  fadeUp();
  paraAnim();

  return (
    <>
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
