/* eslint-disable react-hooks/rules-of-hooks */
import CSection from "@/components/Advakit/CSection";
import CSectionSpecifications from "@/components/Advakit/CSectionSpecifications";
import Hernia from "@/components/Advakit/Hernia";
import HerniaSpecifications from "@/components/Advakit/HerniaSpecifications";
import Ortho from "@/components/Advakit/Ortho";
import OrthoSpecifications from "@/components/Advakit/OrthoSpecifications";
import Layout from "@/components/Layout";

const advakit = () => {
  return (
    <>
      <Layout>
        <main>
            <CSection/>
            <CSectionSpecifications/>
            <Ortho/>
            <OrthoSpecifications/>
            <Hernia/>
            <HerniaSpecifications/>
        </main>
      </Layout>
    </>
  );
};

export default advakit;
