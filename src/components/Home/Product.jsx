import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import LinkButton from "../Button/LinkButton";
import { paraAnim } from "../gsapAnimations";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useRef, useState } from "react";
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Product() {
  paraAnim();
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#product",
        start: "top bottom",
        end: "bottom 20%",
        scrub: true,
      },
    });
    tl.to(".product-bg-img", {
      scale: 1.2,
      delay: -1,
    });
    tl.to(".product-bg-img", {
      yPercent: 30,
      delay: -1,
    });
  });
  const swiperRef = useRef(null); // Create a ref for Swiper

  // State to track which button was clicked
  const [activeButton, setActiveButton] = useState("");

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext(); // Move to the next slide
      setActiveButton("next"); // Set next button as active
      // Reset after 300ms
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev(); // Move to the previous slide
      setActiveButton("prev"); // Set previous button as active
      // Reset after 300ms
    }
  };

  return (
    <>
      <section
        id="product"
        className="py-[5%] relative overflow-hidden mobile:pb-[30vw] mobile:pt-[15vw] mobile:block "
      >
        <div className="h-full">
          <Image
            src={"/assets/home/product-bg.webp"}
            fill
            alt={"product-bg"}
            className="object-cover product-bg-img scale-[1.3] translate-y-[-30%] mobile:hidden"
          />
          <Image
            src={"/assets/home/product-bg-mobile.png"}
            fill
            alt={"product-bg"}
            className="object-cover product-bg-img scale-[1.3] translate-y-[-30%] hidden mobile:block"
          />
        </div>

        <div className="container-lg">
          <div className="product-top text-center flex flex-col items-center">
            <h2 data-para-anim className="title-2 aeonik leading-[1.3]">
              Empowering Healthcare Professionals
            </h2>
            <p
              data-para-anim
              className="content-p my-6 w-[55%] mobile:w-[90%] mobile:my-10 tablet:w-[70%]"
            >
              Advanced MedTech Solutions empowers healthcare practitioners and
              caregivers to manage and treat a wide range of medical conditions,
              from chronic diseases to acute injuries, with the next generation
              of insight-driven medical device technology and innovation.
            </p>
          </div>
          <div className="fadeUp">
            <Swiper
              spaceBetween={50}
              speed={700}
              navigation={false}
              modules={[Navigation]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className="homeCarousel"
            >
              <SwiperSlide>
                <div className="product-card relative h-full">
                  <Image
                    src={"/assets/products/product-frame.png"}
                    fill
                    className="object-fill mobile:hidden"
                    alt="product-frame"
                  />
                  <Image
                    src={"/assets/products/product-frame-mobile.png"}
                    fill
                    className="object-fill hidden mobile:block"
                    alt="product-frame"
                  />
                  <div className="main relative">
                    <div className="absolute right-[4.5%] top-[1%] font-light text-[#2a2a2a] border border-[#2a2a2a] rounded-full h-[1.8vw] w-[1.8vw] flex justify-center items-center mobile:h-[8vw] mobile:w-[8vw] tablet:w-[3vw] tablet:h-[3vw] tablet:right-[2%] ">
                      <span className="text-[0.9vw] pt-1 mobile:text-[4vw] mobile:pt-0 tablet:text-[1.8vw] tablet:pt-0">
                        01
                      </span>
                    </div>
                    <div className="flex justify-between items-center h-full w-full gap-[5vw] mobile:flex-col mobile:justify-center mobile:items-center mobile:gap-[10vw]">
                      <div className="w-2/3 mobile:w-[70%]">
                        <Image
                          className="fadeUp"
                          src="/assets/products/ADVA-Glide.webp"
                          alt="Product Image"
                          width={1000}
                          height={1000}
                        />
                      </div>
                      <div className="flex flex-col w-full pr-[3vw] mobile:justify-center mobile:items-center mobile:pr-[0vw] tablet:pr-0 mobile:w-[95%] mobile:text-center">
                        <h3 className="title-2 aeonik mb-[1vw] mobile:mb-[5vw]">
                          <span>ADVA GLIDE</span>
                        </h3>
                        <h4 className="content-p mb-[0.5vw] mobile:mb-[2.5vw]">
                          PTCA Balloon Catheter
                        </h4>
                        <p className="text-[1.4vw] mb-[1.6vw] text-[#59C4D4] mobile:text-[4.65vw] mobile:mb-[6vw]">
                          Gliding The Science of Flow Restoration
                        </p>
                        <p className="content-p-md mb-[1.5vw] mobile:mb-[6vw]">
                          Revolutionalized for the most challenging environments
                          <br />
                          <br />
                          ADVA GLIDE’s revolutionary technology is specially
                          designed to succeed in the most challenging Coronary
                          Anatomies. With the fastest delation time, superior
                          controlled and enhanced performance properties of
                          trackability, crossability and navigablity in a wide
                          range of complex lesions.
                        </p>
                        <LinkButton btnText={"Know More"} link={"/"} />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="product-card relative">
                  <Image
                    src={"/assets/products/product-frame.png"}
                    fill
                    className="object-fill mobile:hidden"
                    alt="product-frame"
                  />
                  <Image
                    src={"/assets/products/product-frame-mobile.png"}
                    fill
                    className="object-fill hidden mobile:block"
                    alt="product-frame"
                  />
                  <div className="main relative">
                    <div className="absolute right-[4.5%] top-[1%] font-light text-[#2a2a2a] border border-[#2a2a2a] rounded-full h-[1.8vw] w-[1.8vw] flex justify-center items-center mobile:h-[8vw] mobile:w-[8vw]">
                      <span className="text-[0.9vw] pt-1 mobile:text-[4vw] mobile:pt-0">
                        02
                      </span>
                    </div>
                    <div className="flex justify-between items-center h-full w-full gap-[5vw] mobile:flex-col mobile:justify-center mobile:items-center mobile:gap-[10vw]">
                      <div className="w-2/3 mobile:w-[70%]">
                        <Image
                          className="fadeUp"
                          src="/assets/products/ADVAGRIP.webp"
                          alt="Product Image"
                          width={1000}
                          height={1000}
                        />
                      </div>
                      <div className="flex flex-col w-full pr-[3vw] mobile:justify-center mobile:items-center mobile:pr-[0vw] tablet:pr-0 mobile:w-[95%] mobile:text-center">
                        <h3 className="title-2 aeonik mb-[1vw] mobile:mb-[5vw]">
                          <span>ADVAGRIP</span>
                        </h3>
                        <h4 className="content-p mb-[0.5vw] mobile:mb-[2.5vw]">
                          Knotless Tissue Control Device
                        </h4>
                        <p className="text-[1.4vw] mb-[1.6vw] text-[#59C4D4] mobile:text-[4.65vw] mobile:mb-[6vw]">
                          A Grip like No Other
                        </p>
                        <p className="content-p-md mb-[1.5vw] mobile:mb-[6vw]">
                          ADVAGRIP offers swift & secure tissue control without
                          the hassle of tying knots. With AMS&apos; Tri-Cut
                          Technology, ADVAGRIP ensures robust anchoring while
                          maintaining suture strength. Its ultrasonically welded
                          loop and angled tip provide added security and
                          precision. Experience the efficiency and reliability
                          of ADVAGRIP for superior wound closure.
                          <br />
                          
                          Changing the paradigm of Knotless Suture Technology
                          with ADVAGRIP.
                        </p>
                        <LinkButton btnText={"Get a Grip"} link={"/"} />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="product-card relative">
                  <Image
                    src={"/assets/products/product-frame.png"}
                    fill
                    className="object-fill mobile:hidden"
                    alt="product-frame"
                  />
                  <Image
                    src={"/assets/products/product-frame-mobile.png"}
                    fill
                    className="object-fill hidden mobile:block"
                    alt="product-frame"
                  />
                  <div className="main relative">
                    <div className="absolute right-[4.5%] top-[1%] font-light text-[#2a2a2a] border border-[#2a2a2a] rounded-full h-[1.8vw] w-[1.8vw] flex justify-center items-center mobile:h-[8vw] mobile:w-[8vw]">
                      <span className="text-[0.9vw] pt-1 mobile:text-[4vw] mobile:pt-0">
                        03
                      </span>
                    </div>
                    <div className="flex justify-between items-center h-full w-full gap-[5vw] mobile:flex-col mobile:justify-center mobile:items-center mobile:gap-[10vw]">
                      <div className="w-2/3 mobile:w-[70%]">
                        <Image
                          className="fadeUp"
                          src="/assets/products/ADVA-Pro.webp"
                          alt="Product Image"
                          width={1000}
                          height={1000}
                        />
                      </div>
                      <div className="flex flex-col w-full pr-[3vw] mobile:justify-center mobile:items-center mobile:pr-[0vw] tablet:pr-0 mobile:w-[95%] mobile:text-center">
                        <h3 className="title-2 aeonik mb-[1vw] mobile:mb-[5vw]">
                          <span>ADVA PRO</span>
                        </h3>
                        <h4 className="content-p mb-[0.5vw] mobile:mb-[2.5vw]">
                          Sirolimus Eluting Coronary Stent System
                        </h4>
                        <p className="text-[1.4vw] mb-[1.6vw] text-[#59C4D4] mobile:text-[4.65vw] mobile:mb-[6vw]">
                          Precision. Perfection. Pro.
                        </p>
                        <p className="content-p-md mb-[1.5vw] mobile:mb-[6vw]">
                          The Pinnacle of Precision in Complex PCI is not just
                          designed to transform lives; it&apos;s poised to
                          redefine the very future of interventional cardiology
                          for complex anatomies. Prepare to witness a revolution
                          in cardiac care that will set a new standard for
                          excellence.
                        </p>
                        <LinkButton btnText={"Know More"} link={"/"} />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="product-card relative">
                  <Image
                    src={"/assets/products/product-frame.png"}
                    fill
                    className="object-fill mobile:hidden"
                    alt="product-frame"
                  />
                  <Image
                    src={"/assets/products/product-frame-mobile.png"}
                    fill
                    className="object-fill hidden mobile:block"
                    alt="product-frame"
                  />
                  <div className="main relative">
                    <div className="absolute right-[4.5%] top-[1%] font-light text-[#2a2a2a] border border-[#2a2a2a] rounded-full h-[1.8vw] w-[1.8vw] flex justify-center items-center mobile:h-[8vw] mobile:w-[8vw]">
                      <span className="text-[0.9vw] pt-1 mobile:text-[4vw] mobile:pt-0">
                        04
                      </span>
                    </div>
                    <div className="flex justify-between items-center h-full w-full gap-[5vw] mobile:flex-col mobile:justify-center mobile:items-center mobile:gap-[10vw]">
                      <div className="w-2/3 mobile:w-[70%]">
                        <Image
                          className="fadeUp"
                          src="/assets/products/ADVACRYL.webp"
                          alt="Product Image"
                          width={1000}
                          height={1000}
                        />
                      </div>
                      <div className="flex flex-col w-full pr-[3vw] mobile:justify-center mobile:items-center mobile:pr-[0vw] tablet:pr-0 mobile:w-[95%] mobile:text-center">
                        <h3 className="title-2 aeonik mb-[1vw] mobile:mb-[5vw]">
                          <span>ADVACRYL</span>
                        </h3>
                        <h4 className="content-p mb-[0.5vw] mobile:mb-[2.5vw]">
                          Polyglactin 910
                        </h4>
                        <p className="text-[1.4vw] mb-[1.6vw] text-[#59C4D4] mobile:text-[4.65vw] mobile:mb-[6vw]">
                          Seal of Confidence
                        </p>
                        <p className="content-p-md mb-[1.5vw] mobile:mb-[6vw]">
                          ADVACRYL suture is braided synthetic absorbable
                          sterile surgical suture composed of a copolymer made
                          from 90% Glycolide and 10% L-lactide.
                          Braided ADVACRYL suture is coated with a mixture
                          composed of Poly (Glycolide-co-lactide) (Glacomer 37)
                          and calcium stearate. The suture is colored violet to
                          increase visibility and is also available undyed.
                        </p>
                        <LinkButton btnText={"Know More"} link={"/"} />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div
            className={`px-[1.6vw] py-[1.6vw] absolute z-[5] top-[55%] right-0 mobile:bottom-[2%] mobile:top-auto mobile:right-auto mobile:left-[62%] translate-x-[-65%] tablet:top-[70%] tablet:translate-y-[-70%] overflow-hidden mobile:p-[5vw] tablet:p-[2vw] rounded-full next-button cursor-pointer  mobile:block group hover:text-white glassmorphism
                ${
                  activeButton === "next"
                    ? " text-white"
                    : "bg-transparent text-[#111111]"
                } transition-colors duration-300`} // Added background color transition
            onClick={handleNext} // Trigger next slide
          >
            <span
              className={`bg-[#222222] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full group-hover:scale-100 group-hover:opacity-100 ${
                activeButton === "next"
                  ? "scale-100 opacity-100 "
                  : "scale-0 opacity-50"
              } transition-all duration-300`}
            ></span>
            <div className="w-[1.6vw] h-[1.6vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw]">
              <Image
                src="/assets/home/arrow-right.png"
                alt="arrow-right"
                className={`object-cover group-hover:invert transition-all duration-300 ${
                    activeButton === "next"
                      ? "invert"
                      : "invert-0"
                  } `}
                fill
              />
            </div>
          </div>
          <div
            className={`px-[1.6vw] py-[1.6vw] top-[55%] left-[5%] absolute z-[5] mobile:bottom-[2%] mobile:top-auto mobile:left-[37%] translate-x-[-38%]  tablet:top-[70%] tablet:translate-y-[-70%] glassmorphism overflow-hidden  mobile:p-[5vw] tablet:p-[2vw] rounded-full prev-button cursor-pointer  mobile:block group hover:text-white
                ${
                  activeButton === "prev"
                    ? " text-white"
                    : "bg-transparent text-[#111111]"
                } transition-colors duration-300`} // Added background color transition
            onClick={handlePrev} // Trigger previous slide
          >
            <span
              className={`bg-[#222222] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full group-hover:scale-100 group-hover:opacity-100 ${
                activeButton === "prev"
                  ? "scale-100 opacity-100"
                  : "scale-0 opacity-50"
              } transition-all duration-300`}
            ></span>
            <div className="w-[1.6vw] h-[1.6vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw]">
              <Image
                src="/assets/home/arrow-left.png"
                alt="arrow-left"
                className={`object-cover group-hover:invert transition-all duration-300 ${
                    activeButton === "prev"
                      ? "invert"
                      : "invert-0"
                  } `}
                fill
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
