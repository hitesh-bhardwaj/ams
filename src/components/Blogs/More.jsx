import React from "react";
import Image from "next/image";
import LinkButton from "../Button/LinkButton";
import Link from "next/link";

const blogCardData = [
  {
    para: "AMS serves as a healthcare ecosystem focused on the MedTech fields of Advanced Surgery & Advanced Cardiovascular.",
    title: "Advanced Surgery & Advanced Cardiovascular ",
    img: "/assets/blogs/blog-1.png",
    link:"/news/shaping-the-future-of-healthcare",
    innertitle:"Shaping the Future of Healthcare"
  },
  {
    para: "The Nurturing Nursing Skills Program is designed to upskill emerging nurses by enhancing their leadership, soft skills, and technical expertise. Experienced professionals share insights to empower nurses, fostering growth, excellence, and improved patient care.",
    title: "Under the initiative of Advanced MedTech Academy ",
    img: "/assets/blogs/blog-2.png",
    link:"/news/nurturing-nursing-skills",
    innertitle:"Nurturing Nursing Skills Programs "
  },
  {
    para: "Thank you to all our visitors, partners, and organizers for an amazing event. Together, we’re innovating for a healthier future.  See you at MEDICA 2025! ",
    title: "A successful MEDICA 2024",
    img: "/assets/blogs/blog-3.png",
    link:"/news/medica-2024",
    innertitle:"It's a Wrap "
  },
  
];

const BlogCard = ({ para, title, img, link, innertitle, large }) => (
  <Link href={link} className="group overflow-hidden h-full w-full fadeUp">
      <div className="w-full h-full overflow-hidden relative py-[1vw] rounded-[2.5vw]">
          <Image
              src={img}
              fill
              alt="blog image"
              className="object-cover scale-[1.1] group-hover:scale-[1.1] transition-transform duration-500 ease-in-out group-hover:blur-sm"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center z-[10] opacity-0 px-[5%] group-hover:opacity-100 transition-opacity duration-500 ease bg-black/40">
              <p
                  data-para-anim
                  className={`py-[0.5vw] text-white font-light ${
                      large ? "text-[2.5vw]" : "text-[1.25vw]"
                  }`}
              >
                  {innertitle}
              </p>
              <p
                  className={`text-white tracking-wider  font-light leading-[1.2] ${
                      large ? "text-[1.65vw] w-[80%]" : "text-[1.15vw] w-[100%]"
                  }`}
              >
                  {para}
              </p>
          </div>
      </div>
      <div className="w-full mt-[1vw] px-[3%] z-[50]">
          <p className="leading-[1.2] text-[1.25vw] text-[#111111] font-light aeonik">
              {title}
              <span className="inline-block ml-[0.5vw]">
                  <Image
                      src="/assets/icons/arrow-up-right.svg"
                      alt="arrow"
                      height={10}
                      width={10}
                  />
              </span>
          </p>
      </div>
  </Link>
);

const More = () => {
 

  return (
      <section
          id="more"
          className="pb-[5%] relative overflow-hidden w-screen h-full mobile:pb-[30%] mobile:pt-[15vw]"
      >
          <div className="w-full px-[4%]">
              <div className="text-center flex flex-col items-center">
                  <h2
                      data-para-anim
                      className="text-[2.7vw] font-light leading-[1.2] aeonik capitalize"
                  >
                      More from ams
                  </h2>
              </div>
              <div className="w-full h-[50vw] py-[3vw] grid grid-cols-12 row-span-2 space-x-[2vw] gap-y-[5vw]">
                  <div className="col-span-9 col-start-1 row-span-2 row-start-1">
                      <BlogCard {...blogCardData[0]} large={true} />
                  </div>
                  <div className="col-span-3 col-start-10 row-start-1 row-span-1">
                      <BlogCard {...blogCardData[1]} large={false} />
                  </div>
                  <div className="col-span-3 col-start-10 row-start-2 row-span-1">
                      <BlogCard {...blogCardData[2]} large={false} />
                  </div>
              </div>
              <div className="w-full flex items-center justify-center py-[2vw]">
                  <LinkButton link={"#"} btnText={"See More"} />
              </div>
          </div>
      </section>
  );
};

export default More;
