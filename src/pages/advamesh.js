/* eslint-disable react-hooks/rules-of-hooks */
import Hero from "@/components/Advamesh/Hero";
import Macroporous from "@/components/Advamesh/Macroporous";
import MacroporousSpecifications from "@/components/Advamesh/MacroporousSpecifications";
import MidWeight from "@/components/Advamesh/MidWeight";
import MidWeightSpecifications from "@/components/Advamesh/MidWeightSpecifications";
import Polypropylene from "@/components/Advamesh/Polypropylene";
import PolypropyleneSpecifications from "@/components/Advamesh/PolypropyleneSpecifications";
import Layout from "@/components/Layout";

const advamesh = () => {
  return (
    <>
      <Layout>
        <main>
            <Hero/>
            <Macroporous/>
            <MacroporousSpecifications/>
            <MidWeight/>
            <MidWeightSpecifications/>
            <Polypropylene/>
            <PolypropyleneSpecifications/>
        </main>
      </Layout>
    </>
  );
};

export default advamesh;
