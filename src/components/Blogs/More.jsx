import React from "react";
import Image from "next/image";
import LinkButton from "../Button/LinkButton";
import { fadeup } from "../gsapAnimations";

const blogCardData = [
  {
    title: "Diwali Celebration 2024 ",
    para: "The sparkle of Diwali lives on at AMS, inspiring us to keep illuminating new paths in healthcare innovation.",
    date: "November 24, 2024",
    img: "/assets/blogs/blog-1.png",
    large: true,
  },
  {
    title: " ",
    para: "Learn the signs & take steps toward better management.",
    date: "March 17, 2024",
    img: "/assets/blogs/blog-2.png",
  },
  {
    title: " ",
    para: "Knotting Workshop PIMS Hospital, Pondicherry",
    date: "February 5, 2023",
    img: "/assets/blogs/blog-3.png",
  },
  {
    title: "",
    para: "Nurturing Nursing Skill Program, Karnataka",
    date: "November 24, 2024",
    img: "/assets/blogs/blog-4.png",
    large: true,
  },
  {
    title: "",
    para: "Pioneering Progress In Healthcare",
    date: "March 17, 2024",
    img: "/assets/blogs/blog-5.png",
  },
  {
    title: "",
    para: "Nurturing Nursing Skill Program, Karnataka",
    date: "February 5, 2023",
    img: "/assets/blogs/blog-6.png",
  },
];

const BlogCard = ({ title, para, date, img, large }) => (
  <div
    className={`${
      large ? "col-span-9 row-span-2 h-[44vw]" : "col-span-3 h-[18vw]"
    } rounded-[1.5vw] relative mt-[1vw] fadeUp`}
  >
    <div className="w-full h-full relative">
      <Image
        src={img}
        fill
        alt="blog image"
        className="rounded-[2vw] object-cover"
      />
    </div>
    <div className="absolute bottom-[10%] px-[1vw]">
      <p  className={`text-white ${large ? "text-[3.3vw]" : "text-[2.3vw]"} font-light`}>
        {title}
      </p>
      <p 
        className={`text-white ${
          large ? "text-[1.94vw] w-[70%]" : "text-[1.4vw] w-[80%]"
        } font-light aeonik leading-[1.2]`}
      >
        {para}
      </p>
    </div>
    <p 
      className={`${
        large ? "text-[1.94vw]" : "text-[1.8vw]"
      } text-[#111111] font-light ml-[2vw] py-[0.5vw]`}
    >
      {date}
    </p>
  </div>
);

const More = () => {
  fadeup();
  return (
    <section
      id="more"
      className="pb-[5%] relative overflow-hidden w-screen h-full mobile:pb-[30%] mobile:pt-[15vw]"
    >
      <div className="w-full px-[4%]">
        <div className="text-center flex flex-col items-center">
          <h2
            data-para-anim
            className="text-[3.3vw] font-light leading-[1.2] aeonik"
          >
            More from ams
          </h2>
        </div>
        {Array(2)
          .fill()
          .map((_, i) => (
            <div
              key={i}
              className="w-full h-full py-[5vw] grid grid-cols-12 gap-[1vw] space-x-[1.5vw] space-y-[1.5vw]"
            >
              {blogCardData
                .slice(i * 3, i * 3 + 3)
                .map((data, index) => (
                  <BlogCard key={index} {...data} />
                ))}
            </div>
          ))}
        <div className="w-full flex items-center justify-center py-[2vw]">
          <LinkButton link={"#"} btnText={"See More"} />
        </div>
      </div>
    </section>
  );
};

export default More;
