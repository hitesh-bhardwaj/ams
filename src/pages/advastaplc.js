/* eslint-disable react-hooks/rules-of-hooks */
import AdvastapLC2 from "@/components/Advastaplc/AdvastapLC2";
import AdvastapLC3 from "@/components/Advastaplc/AdvastapLC3";
import Closure from "@/components/Advastaplc/Closure";
import Closure2 from "@/components/Advastaplc/Closure2";
import Hero from "@/components/Advastaplc/Hero";
import LC2Carousel from "@/components/Advastaplc/LC2carousel";
import LC3Carousel from "@/components/Advastaplc/LC3carousel";
import Layout from "@/components/Layout";

const advastaplc = () => {
  return (
    <>
      <Layout>
        <main>
          <Hero />
          <AdvastapLC3/>
          <Closure/>
          <LC3Carousel/>
          <AdvastapLC2/>
          <Closure2/>
          <LC2Carousel/>
        </main>
      </Layout>
    </>
  );
};

export default advastaplc;
