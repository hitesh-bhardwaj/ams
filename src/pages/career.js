/* eslint-disable react-hooks/rules-of-hooks */
import Discover from "@/components/Career/Discover";
import Jobs from "@/components/Career/Jobs";
import Work from "@/components/Career/Work";
import Hero from "@/components/Career/Hero";
import Layout from "@/components/Layout";
import { fadeup } from "@/components/gsapAnimations";


export default function career() {
  fadeup()

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
        
    </>
  );
}
