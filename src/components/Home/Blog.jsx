/* eslint-disable react-hooks/rules-of-hooks */
import PrimaryButton from "../Button/PrimaryButton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { imageAnim } from "../gsapAnimations";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* eslint-disable @next/next/no-img-element */
export default function Blog() {
  const blogPosts = [
    {
      img: "/assets/home/blog-1.webp",
      title: "National Interventional Cardiology Congress 2023!",
      content:
        "Shaping the future with ADVAGLIDE: AMS inspires at National Interventional Cardiology Congress.",
      date: "June, 2023",
    },
    {
      img: "/assets/home/blog-2.webp",
      title: "Cardiovascular Care Redefined: IACTSCON 2024!",
      content:
        "Cardiovascular Care Redefined with the pre-launch of ADVALVE: AMS at the Forefront of IACTSCON 2024.",
      date: "January, 2024",
    },
    {
      img: "/assets/home/blog-3.webp",
      title: "Arab Health 2024!",
      content:
        "AMS Takes Center Stage at Arab Health in Dubai: Leading the Charge in Global MedTech with Industry leaders and partners Transforming Healthcare Worldwide",
      date: "March, 2024",
    },
  ];

  const blogLeft = useRef(null);
  const blogContainer = useRef(null);
  if (globalThis.innerWidth < 1024) {
  } else {
    useEffect(() => {
      const ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: blogLeft.current,
          start: "top 10%",
          endTrigger: blogContainer.current,
          end: "bottom 80%",
          invalidateOnRefresh: true,
          pin: blogLeft.current,
          // markers: true,
        });
      });
      return () => ctx.revert();
    });
  }

  const BlogCard = ({ img, title, content, date }) => {
    return (
      <>
        <div className="flex items-start justify-between gap-[4%] mobile:flex-col mobile:items-center mobile:justify-center">
          <div className="blog-img h-[25vw] w-[45%] overflow-hidden rounded-3xl relative mobile:w-[90vw] mobile:h-[120vw] tablet:h-[35vw] fadeUp ">
            <Image
              data-speed="0.7"
              className="h-full w-full object-cover imageanim "
              src={img}
              alt="blog image"
              fill
            />
          </div>
          <div className="w-[60%] mt-[1vw] fadeUp mobile:w-[100%] mobile:text-center mobile:mt-[5vw] mobile:flex-col mobile:items-center mobile:justify-center">
            <span className="text-[0.9vw] font-light mb-[1vw] block mobile:text-[4.2vw] mobile:mb-[5vw] tablet:text-[1.8vw]">
              {date}
            </span>
            <h5
              data-para-anim
              className="text-[2.2vw] font-extralight leading-[1.2] mb-[2vw] mobile:text-[7.6vw] mobile:mb-[10vw] tablet:text-[3.5vw]"
            >
              {title}
            </h5>
            <p
              data-para-anim
              className="text-[0.9vw] font-light mb-[2.5vw] text-anim-2 mobile:text-[4.2vw] mobile:mb-[10vw] tablet:text-[2vw]"
            >
              {content}
            </p>
            <div className="w-full flex mobile:justify-center">
              <PrimaryButton
                link="/"
                btnText="Read More"
                className={"fadeUp"}
              />
            </div>
          </div>
        </div>
        <span className="block h-[1px] w-full my-[4vw] bg-[#d6d6d6] lineDraw tablet:my-[7vw]" />
      </>
    );
  };

  return (
    <>
      <section
        className="p-y-sm mobile:py-[15vw]"
        ref={blogContainer}
        id="blogs"
      >
        <div className="container-sm">
          <div className="flex items-start justify-between w-full mobile:flex-col mobile:w-[100%] mobile:items-center tablet:flex-col">
            <div
              className="blog-left w-[45%] space-y-[2.5vw] mobile:w-[100%] mobile:space-y-[5vw] tablet:w-full"
              ref={blogLeft}
            >
              <h2 data-para-anim className="title-2 aeonik mobile:text-center">
                <span>Latest Blogs</span>
              </h2>
              <p
                data-para-anim
                className="content-p w-[78%] tablet:w-[70%] mobile:w-full mobile:px-[3vw] mobile:pb-[10vw] mobile:text-center"
              >
                Unlocking Tomorrow&apos;s Healthcare: Discover Cutting-Edge
                Insights and Innovations in Medical Equipment Manufacturing.
              </p>
            </div>
            <div className="blog-right w-[55%] mobile:w-[90%] mobile:space-y-[15vw] tablet:w-full tablet:mt-[7vw]">
              <div className="flex items-start justify-between gap-[4%] mobile:flex-col mobile:items-center mobile:justify-center">
                <div className="blog-img h-[25vw] w-[45%] overflow-hidden rounded-3xl relative mobile:w-[90vw] mobile:h-[120vw] tablet:h-[35vw] fadeUp ">
                  <Image
                    data-speed="clamp(0.7)"
                    className="h-full w-full object-cover scale-[1.4]"
                    src="/assets/home/blog-1.webp"
                    alt="blog image"
                    fill
                  />
                </div>
                <div className="w-[60%] mt-[1vw] fadeUp mobile:w-[100%] mobile:text-center mobile:mt-[5vw] mobile:flex-col mobile:items-center mobile:justify-center">
                  <span className="text-[0.9vw] font-light mb-[1vw] block mobile:text-[4.2vw] mobile:mb-[5vw] tablet:text-[1.8vw]">
                  June, 2023
                  </span>
                  <h5
                    data-para-anim
                    className="text-[2.2vw] font-extralight leading-[1.2] mb-[2vw] mobile:text-[7.6vw] mobile:mb-[10vw] tablet:text-[3.5vw]"
                  >
                    National Interventional Cardiology Congress 2023!
                  </h5>
                  <p
                    data-para-anim
                    className="text-[0.9vw] font-light mb-[2.5vw] text-anim-2 mobile:text-[4.2vw] mobile:mb-[10vw] tablet:text-[2vw]"
                  >
                    Shaping the future with ADVAGLIDE: AMS inspires at National Interventional Cardiology Congress.
                  </p>
                  <div className="w-full flex mobile:justify-center">
                    <PrimaryButton
                      link="/"
                      btnText="Read More"
                      className={"fadeUp"}
                    />
                  </div>
                </div>
              </div>
              <span className="block h-[1px] w-full my-[4vw] bg-[#d6d6d6] lineDraw tablet:my-[7vw]" />
              <div className="flex items-start justify-between gap-[4%] mobile:flex-col mobile:items-center mobile:justify-center">
                <div className="blog-img h-[25vw] w-[45%] overflow-hidden rounded-3xl relative mobile:w-[90vw] mobile:h-[120vw] tablet:h-[35vw] fadeUp ">
                  <Image
                    data-speed="clamp(0.7)"
                    className="h-full w-full object-cover scale-[1.4] "
                    src="/assets/home/blog-2.webp"
                    alt="blog image"
                    fill
                  />
                </div>
                <div className="w-[60%] mt-[1vw] fadeUp mobile:w-[100%] mobile:text-center mobile:mt-[5vw] mobile:flex-col mobile:items-center mobile:justify-center">
                  <span className="text-[0.9vw] font-light mb-[1vw] block mobile:text-[4.2vw] mobile:mb-[5vw] tablet:text-[1.8vw]">
                  January, 2024
                  </span>
                  <h5
                    data-para-anim
                    className="text-[2.2vw] font-extralight leading-[1.2] mb-[2vw] mobile:text-[7.6vw] mobile:mb-[10vw] tablet:text-[3.5vw]"
                  >
                    Cardiovascular Care Redefined: IACTSCON 2024!
                  </h5>
                  <p
                    data-para-anim
                    className="text-[0.9vw] font-light mb-[2.5vw] text-anim-2 mobile:text-[4.2vw] mobile:mb-[10vw] tablet:text-[2vw]"
                  >
                    Cardiovascular Care Redefined with the pre-launch of ADVALVE: AMS at the Forefront of IACTSCON 2024.
                  </p>
                  <div className="w-full flex mobile:justify-center">
                    <PrimaryButton
                      link="/"
                      btnText="Read More"
                      className={"fadeUp"}
                    />
                  </div>
                </div>
              </div>
              <span className="block h-[1px] w-full my-[4vw] bg-[#d6d6d6] lineDraw tablet:my-[7vw]" />
              <div className="flex items-start justify-between gap-[4%] mobile:flex-col mobile:items-center mobile:justify-center">
                <div className="blog-img h-[25vw] w-[45%] overflow-hidden rounded-3xl relative mobile:w-[90vw] mobile:h-[120vw] tablet:h-[35vw] fadeUp ">
                  <Image
                    data-speed="clamp(0.7)"
                    className="h-full w-full object-cover scale-[1.4] "
                    src="/assets/home/blog-3.webp"
                    alt="blog image"
                    fill
                  />
                </div>
                <div className="w-[60%] mt-[1vw] fadeUp mobile:w-[100%] mobile:text-center mobile:mt-[5vw] mobile:flex-col mobile:items-center mobile:justify-center">
                  <span className="text-[0.9vw] font-light mb-[1vw] block mobile:text-[4.2vw] mobile:mb-[5vw] tablet:text-[1.8vw]">
                  March, 2024
                  </span>
                  <h5
                    data-para-anim
                    className="text-[2.2vw] font-extralight leading-[1.2] mb-[2vw] mobile:text-[7.6vw] mobile:mb-[10vw] tablet:text-[3.5vw]"
                  >
                    Arab Health 2024!
                  </h5>
                  <p
                    data-para-anim
                    className="text-[0.9vw] font-light mb-[2.5vw] text-anim-2 mobile:text-[4.2vw] mobile:mb-[10vw] tablet:text-[2vw]"
                  >
                    AMS Takes Center Stage at Arab Health in Dubai: Leading the Charge in Global MedTech with Industry leaders and partners Transforming Healthcare Worldwide.
                  </p>
                  <div className="w-full flex mobile:justify-center">
                    <PrimaryButton
                      link="/"
                      btnText="Read More"
                      className={"fadeUp"}
                    />
                  </div>
                </div>
              </div>
              <span className="block h-[1px] w-full my-[4vw] bg-[#d6d6d6] lineDraw tablet:my-[7vw]" />
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
