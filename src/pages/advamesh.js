/* eslint-disable react-hooks/rules-of-hooks */
import Hero from "@/components/Advamesh/Hero";
import Macroporous from "@/components/Advamesh/Macroporous";
import MidWeight from "@/components/Advamesh/MidWeight";
import Polypropylene from "@/components/Advamesh/Polypropylene";
import Layout from "@/components/Layout";

const advamesh = () => {
  return (
    <>
      <Layout>
        <main>
            <Hero/>
            <Macroporous/>
            <MidWeight/>
            <Polypropylene/>
        </main>
      </Layout>
    </>
  );
};

export default advamesh;
