/* eslint-disable react-hooks/rules-of-hooks */
import Insights from "@/components/Blogs/Insights";
import More from "@/components/Blogs/More";
import Layout from "@/components/Layout";
import BgVideo from "@/components/Layout/BgVideo";
import Genesis from "@/components/layoutComponents/Genesis";
import { Media } from "@/components/media";
import { fadeUp, paraAnim } from "@/components/gsapAnimations";
import Hero from "@/components/Blogs/Hero";
import { NextSeo } from "next-seo";

const blogs = () => {
  fadeUp();
  paraAnim();
  const content = {
    heading: "Stories of Change",
    smallpara:
      "Stay connected with the latest updates, breakthrough innovations, and exciting events that drive our progress. From industry-leading advancements and strategic partnerships to impactful conferences and community initiatives, this page is your gateway to everything happening in our world. Join us as we share the stories that shape the future and inspire change.",
    bigpara:
      "Explore how we’re driving meaningful change, guided by innovation, compassion, and a relentless dedication to improving lives. Whether it’s through revolutionary medical devices, empowering partnerships, or initiatives that bring care closer to communities, we are committed to creating a healthier tomorrow.  ",
    src: "/assets/blogs/blogs-genesis-bg.png",
  };
  return (
    <>
      <NextSeo
        title="Blogs – Insights from Advanced MedTech"
        description="Explore healthcare trends, innovations, and expert opinions
through our insightful blog posts."
        openGraph={{
          title: "Blogs – Insights from Advanced MedTech",
          description:
            "Explore healthcare trends, innovations, and expert opinions through our insightful blog posts.",
          images: [
            {
              url: "https://amsdev01.vercel.app/assets/seo/blogs.png",
              width: 1915,
              height: 948,
              alt: "Blogs – Insights from Advanced MedTech",
            },
          ],
        }}
      />
      <Layout>
        <main>
          <Hero />
          <Genesis
            content={content}
            sParaWidth={"w-[30%] ml-[5%] mobile:ml-0 tablet:ml-0"}
            bParaWidth={"w-[60%]"}
          />
          <Insights />
          <More />
        </main>
      </Layout>
      <Media greaterThan="tablet">
        <BgVideo videoSrc={"/assets/bg-videos/original-bg.mp4"} />
      </Media>
    </>
  );
};

export default blogs;
