import PrimaryButton from "../Button/PrimaryButton"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { paraAnim,imageAnim } from "../gsapAnimations";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* eslint-disable @next/next/no-img-element */
export default function Blog() {
    paraAnim()
    imageAnim()
    const blogLeft = useRef(null);
    const blogContainer = useRef(null);

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

    const BlogCard = ({img, title, content, date}) => {
        return (
            <>
                <div className="flex items-start justify-between gap-[4%]">
                    <div className="blog-img h-[25vw] w-[45%] overflow-hidden rounded-3xl relative ">
                        <Image
                            className="h-full w-full object-cover imageanim"
                            src={img}
                            alt="blog image"
                            fill
                        />
                    </div>
                    <div className="w-[60%] mt-[1vw] fadeUp">
                        <span className="text-[0.9vw] font-light mb-[1vw] block">
                            {date}
                        </span>
                        <h5 data-para-anim className="text-[2.2vw] font-extralight leading-[1.2] mb-[2vw]">
                            {title}
                        </h5>
                        <p data-para-anim className="text-[0.9vw] font-light mb-[2.5vw] text-anim-2">
                            {content}
                        </p>
                        <PrimaryButton link="/" btnText="Read More"/>
                    </div>
                </div>
                <span className="block h-[1px] w-full my-[4vw] bg-[#d6d6d6] lineDraw"/>
            </>
        )
    }

    return (
        <>
            <section className="p-y-sm" ref={blogContainer} id="blogs">
                <div className="container-sm">
                    <div className="flex items-start justify-between w-full">
                        <div className="blog-left w-[45%] space-y-[2.5vw]" ref={blogLeft}>
                            <h2 data-para-anim className="title-2 aeonik ">
                                <span>
                                    Latest Blogs
                                </span>
                            </h2>
                            <p data-para-anim className="content-p w-[78%]">
                                Unlocking Tomorrow&apos;s Healthcare: Discover Cutting-Edge Insights and Innovations in Medical Equipment Manufacturing.
                            </p>
                        </div>
                        <div className="blog-right w-[55%]">
                            <BlogCard 
                                img={"/assets/home/blog-1.webp"}
                                title={"National Interventional Cardiology Congress 2023!"}
                                content={"Shaping the future with ADVAGLIDE: AMS inspires at National Interventional Cardiology Congress."}
                                date={"June, 2023"}
                            />
                            <BlogCard 
                                img={"/assets/home/blog-2.webp"}
                                title={"Cardiovascular Care Redefined: IACTSCON 2024!"}
                                content={"Cardiovascular Care Redefined with the pre-launch of ADVALVE: AMS at the Forefront of IACTSCON 2024."}
                                date={"January, 2024"}
                            />
                            <BlogCard 
                                img={"/assets/home/blog-3.webp"}
                                title={"Arab Health 2024!"}
                                content={"AMS Takes Center Stage at Arab Health in Dubai: Leading the Charge in Global MedTech with Industry leaders and partners Transforming Healthcare Worldwide"}
                                date={"March, 2024"}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}