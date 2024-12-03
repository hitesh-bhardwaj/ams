import React from "react";
import Image from "next/image";
import { paraAnim } from "../gsapAnimations";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const Hero = () => {
  paraAnim();
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "hero-container",
        start: "top top",
        end: "bottom top",
        scrub: true,
        // markers:true
      },
    });
    tl.to(".hero-img", {
      yPercent: 60,
    });
    gsap.fromTo(
      ".hero-img",
      {
        scale: 1.2,
        yPercent: -10,
      },
      {
        scale: 1.1,
        yPercent: 0,
        duration: 1,
        delay: 0.1,
        ease: "power3.out",
      }
    );
  });
  return (
    <section className=" hero-container mobile:mb-[15%] dark" id="hero">
      <div className="w-[100vw] h-[100vh] relative overflow-hidden tablet:h-[50vh]">
        <div className="w-screen h-screen absolute tablet:h-[50vh]">
          <Image
            data-speed="0.7"
            className="hero-img absolute object-cover scale-[1.2]"
            src={"/assets/contact/contact-hero-bg.png"}
            alt="Hero Image"
            priority={true}
            fill
          />
        </div>

        <div className="px-[12%] relative mobile:px-[5%]">
          <div className="flex h-dvh w-full flex-col justify-center items-start tablet:h-[50vh]">
            <div className="w-full">
              <h1 className={`title-1 aeonik drop-shadow-lg  leading-[1]`}>
                <span
                  data-para-anim
                  className={`leading-[1.3] overflow-hidden text-[#FFFFFF] w-[80%] mobile:w-full mobile:text-center `}
                >
                  CONTACT US
                </span>
              </h1>
              <Breadcrumb className="ml-[1vw]">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Contact Us</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
