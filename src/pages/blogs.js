/* eslint-disable react-hooks/rules-of-hooks */
import Hero from "@/components/Blogs/Hero";
import Insights from "@/components/Blogs/Insights";
import More from "@/components/Blogs/More";
import Layout from "@/components/Layout";
import Genesis from "@/components/layoutComponents/Genesis";

const blogs = () => {
    const content = {
        heading: "Transforming Healthcare Globally",
        smallpara:
          "Stay informed with the latest innovations and achievements from AMS. We are continually advancing surgical technologies to enhance patient care and improve outcomes. Explore our latest product launches, industry partnerships, and thought leadership initiatives. AMS is dedicated to providing cutting-edge medical devices and education for healthcare professionals worldwide. Follow our updates as we continue our journey to revolutionize medical technology.",
        bigpara:
          "With a global presence, we are committed to advancing healthcare, collaborating with professionals worldwide to set new benchmarks in medical solutions.",
        src: "/assets/blogs/blogs-genesis-bg.png",
      };
  return (
    <>
      <Layout>
        <main>
        <Hero/>
        <Genesis content={content} sParaWidth={"w-[50%] ml-[5%] mobile:ml-0 tablet:ml-0"}
                bParaWidth={"w-[30%]"} />
                <Insights/>
                <More/>
        </main>
      </Layout>
    </>
  );
};

export default blogs;
