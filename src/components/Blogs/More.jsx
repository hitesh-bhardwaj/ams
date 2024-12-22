import React from "react";
import Image from "next/image";
import LinkButton from "../Button/LinkButton";
import Link from "next/link";

const blogCardData = [
  {
    para: "AMS serves as a healthcare ecosystem focused on the MedTech fields of Advanced Surgery & Advanced Cardiovascular.",
    link: "Shaping the Future of Healthcare ",
    img: "/assets/blogs/blog-1.png",
    large: true,
  },
  {
    para: "Learn the signs & take steps toward better management.",
    link: "Nurturing Nursing Skills Programs ",
    img: "/assets/blogs/blog-2.png",
  },
  {
    para: "Knotting Workshop PIMS Hospital, Pondicherry",
    link: "A successful MEDICA 2024",
    img: "/assets/blogs/blog-3.png",
  },
];

const BlogCard = ({ para, link, img }) => (
    <Link href="#" className="group overflow-hidden  h-full w-full fadeUp">
        <div className="w-full h-full overflow-hidden relative py-[1vw] rounded-[2.5vw]">
          <Image
            src={img}
            fill
            alt="blog image"
            className="object-cover scale-[1.1] group-hover:scale-[1.1] transition-transform duration-500 ease-in-out group-hover:blur-sm"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center z-[10] opacity-0 px-[5%] group-hover:opacity-100 transition-opacity duration-500 ease bg-black/40">
            <p className="text-white tracking-widest text-[1.25vw] w-[80%] font-light aeonik leading-[1.2]">
              {para}
            </p>
          </div>
        </div>
        <div className="w-full mt-[1vw] px-[3%] z-[50]">
          <p className="leading-[1.2] text-[1.25vw] text-[#111111] font-light aeonik">
            {link}
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
        <div  className="w-full h-[50vw] py-[3vw] grid grid-cols-12 row-span-2 space-x-[2vw] gap-y-[5vw]">
          <div className="col-span-9 col-start-1 row-span-2 row-start-1">
            <BlogCard {...blogCardData[0]}/>
          </div>
          <div className="col-span-3 col-start-10 row-start-1 row-span-1">
            <BlogCard {...blogCardData[1]}/>
          </div>
          <div className="col-span-3 col-start-10 row-start-2 row-span-1">
            <BlogCard {...blogCardData[2]}/>
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
