import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import LinkButton from "../Button/LinkButton";
// import { paraAnim } from "../gsapAnimations";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Media } from "../media";
gsap.registerPlugin(ScrollTrigger);

export default function Product() {
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
        className="py-[5%] relative overflow-hidden mobile:pb-[30%] mobile:pt-[15vw] "
      >
        <div className="h-full">
          <Media greaterThanOrEqual="tablet">
            <Image
              src={"/assets/home/product-bg.webp"}
              width={1960}
              height={1180}
              alt={"product-bg"}
              className="object-cover w-full h-full product-bg-img absolute scale-[1.3] "
            />
          </Media>
          <Media lessThan="tablet">
            <Image
              src={"/assets/home/product-bg-mobile.png"}
              fill
              alt={"product-bg"}
              className="object-cover product-bg-img scale-[1.3] "
            />
          </Media>
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
             Advanced MedTech Solutions paves the way for new therapies and enhanced treatment outcomes through insight-driven medical device technology and innovation.
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
                <CardContainer className="product-card relative h-full">
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
                  <CardBody className="main relative">
                    <CardItem className="absolute right-[4.5%] top-[1%] font-light text-[#2a2a2a] border border-[#2a2a2a] rounded-full h-[1.8vw] w-[1.8vw] flex justify-center items-center mobile:h-[8vw] mobile:w-[8vw] mobile:right-[10%] mobile:top-[2%] tablet:w-[3vw] tablet:h-[3vw] tablet:right-[2%] ">
                      <span className="text-[0.9vw] pt-1 mobile:text-[4vw] mobile:pt-0 tablet:text-[1.8vw] tablet:pt-0">
                        01
                      </span>
                    </CardItem>
                    <div className="flex justify-between items-center h-full w-full gap-[5vw] mobile:flex-col mobile:justify-center mobile:items-center mobile:gap-[10vw]">
                      <div className="w-[90%] mobile:w-[70%]">
                        <Image
                          className="fadeUp w-full h-full object-contain"
                          src="/assets/products/ADVA-Glide.webp"
                          alt="Product Image"
                          width={467}
                          height={270}
                        />
                      </div>
                      <div className="flex flex-col w-full pr-[3vw] mobile:justify-center mobile:items-center mobile:pr-[0vw] tablet:pr-0 mobile:w-[95%] mobile:text-center">
                        <h3 className="title-2 aeonik mb-[0.5vw] mobile:mb-[2vw] !text-blue-400">
                          <span>ADVA GLIDE</span>
                        </h3>
                        <h4 className="content-p mb-[2.5vw] mobile:mb-[2.5vw] mobile:text-[5.2vw]">
                          Gliding to Perfection.
                        </h4>

                        <p className="content-p mb-[5vw] mobile:mb-[6vw] flex flex-col gap-[0.8vw] mobile:text-[4vw] tablet:text-[1.5vw]">
                          {/* <br /> */}
                          <span>
                          ADVA GLIDE&apos;s balloon catheter technologies are engineered to excel in the most demanding coronary anatomies, offering superior trackability, crossability, and navigability across complex lesions.
                          </span>
                        </p>
                        <LinkButton
                          btnText={"Learn More"}
                          link={"/advaglide"}
                          className={"tablet:text-[2vw] tablet:mt-[-0.8vw]"}
                        />
                      </div>
                    </div>
                  </CardBody>
                </CardContainer>
              </SwiperSlide>
              <SwiperSlide>
                <CardContainer className="product-card relative">
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
                    <div className="absolute right-[4.5%] top-[1%] font-light text-[#2a2a2a] border border-[#2a2a2a] rounded-full h-[1.8vw] w-[1.8vw] flex justify-center items-center mobile:h-[8vw] mobile:w-[8vw] mobile:right-[10%] mobile:top-[2%] tablet:w-[3vw] tablet:h-[3vw] tablet:right-[2%]">
                      <span className="text-[0.9vw] pt-1 mobile:text-[4vw] mobile:pt-0 tablet:text-[1.8vw] tablet:pt-0">
                        02
                      </span>
                    </div>
                    <div className="flex justify-between items-center h-full w-full gap-[5vw] mobile:flex-col mobile:justify-center mobile:items-center mobile:gap-[10vw]">
                      <div className="w-[100%] h-[60vw] mobile:w-[70%] relative">
                        <Image
                          className="fadeUp object-contain"
                          src="/assets/home/product-advagrip.png"
                          alt="Product Image"
                          fill
                        />
                      </div>
                      <div className="flex flex-col w-full pr-[3vw] mobile:justify-center mobile:items-center mobile:pr-[0vw] tablet:pr-0 mobile:w-[95%] mobile:text-center">
                        <h3 className="title-2 aeonik mb-[0.5vw] mobile:mb-[2vw] !text-purple-500">
                          <span>ADVA PRO</span>
                        </h3>
                        <h4 className="content-p mb-[2vw] mobile:mb-[2.5vw] mobile:text-[5.2vw]">
                        Precision. Perfection. Pro.
                        </h4>

                        <p className="content-p mb-[5vw] mobile:mb-[6vw] mobile:text-[4vw] tablet:text-[1.5vw]">
                        Designed for complex PCI, ADVA PRO provides optimized safety and efficacy, ensuring consistent and trusted patient outcomes.
                        </p>
                        <LinkButton
                          btnText={"Learn More"}
                          link={"/advapro"}
                          className={"tablet:text-[2vw] tablet:mt-[-0.8vw]"}
                        />
                      </div>
                    </div>
                  </div>
                </CardContainer>
              </SwiperSlide>
              <SwiperSlide>
                <CardContainer className="product-card relative">
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
                    <div className="absolute right-[4.5%] top-[1%] font-light text-[#2a2a2a] border border-[#2a2a2a] rounded-full h-[1.8vw] w-[1.8vw] flex justify-center items-center mobile:h-[8vw] mobile:w-[8vw] mobile:right-[10%] mobile:top-[2%] tablet:w-[3vw] tablet:h-[3vw] tablet:right-[2%]">
                      <span className="text-[0.9vw] pt-1 mobile:text-[4vw] mobile:pt-0 tablet:text-[1.8vw] tablet:pt-0">
                        03
                      </span>
                    </div>
                    <div className="flex justify-between items-center h-full w-full gap-[5vw] mobile:flex-col mobile:justify-center mobile:items-center mobile:gap-[10vw]">
                      <div className="w-[85%] h-[30vw] relative mobile:w-[70%] scale-[1.4]">
                        <Image
                          className="fadeUp object-contain "
                          src="/assets/home/advapro-product.png"
                          alt="Product Image"
                          fill
                        />
                      </div>
                      <div className="flex flex-col w-full pr-[3vw] mobile:justify-center mobile:items-center mobile:pr-[0vw] tablet:pr-0 mobile:w-[95%] mobile:text-center">
                        <h3 className="title-2 aeonik mb-[0.5vw] mobile:mb-[2vw] !text-blue-400">
                          <span>ADVAGRIP </span>
                        </h3>
                        <h4 className="content-p mb-[2.5vw] mobile:mb-[2.5vw] mobile:text-[5.2vw]">
                        A GRIP like No Other.
                        </h4>

                        <p className="content-p mb-[5vw] mobile:mb-[6vw] mobile:text-[4vw] tablet:text-[1.5vw]">
                        ADVAGRIP sets a new benchmark in Knotless Tissue Control Device, employing Tri-Cut Technology to produce barbs that delivers a robust anchoring force whilst maintaining the integrity of the suture strength.
                        </p>
                        <LinkButton
                          btnText={"Learn More"}
                          link={"/advapro"}
                          className={"tablet:text-[2vw] tablet:mt-[-0.8vw]"}
                        />
                      </div>
                    </div>
                  </div>
                </CardContainer>
              </SwiperSlide>
              <SwiperSlide>
                <CardContainer className="product-card relative">
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
                      <span className="text-[0.9vw] pt-1 mobile:text-[4vw] mobile:pt-0 tablet:text-[1.8vw] tablet:pt-0">
                        04
                      </span>
                    </div>
                    <div className="flex justify-between items-center h-full w-full gap-[5vw] mobile:flex-col mobile:justify-center mobile:items-center mobile:gap-[10vw]">
                      <div className="w-[75%] mobile:w-[70%]">
                        <div className="w-[30vw] h-[24vw] relative">
                        <Image
                          className="fadeUp object-contain"
                          src="/assets/home/advacryl-product.png"
                          alt="Product Image"
                         fill
                        />

                        </div>
                        <div className="w-[30vw] h-[17vw] relative mt-[-5vw]">
                          
                        <Image
                          className="fadeUp object-contain"
                          src="/assets/home/advacryl-foil.png"
                          alt="Product Image"
                         fill
                        />
                        </div>
                      </div>
                      <div className="flex flex-col w-full pr-[3vw] mobile:justify-center mobile:items-center mobile:pr-[0vw] tablet:pr-0 mobile:w-[95%] mobile:text-center">
                        <h3 className="title-2 aeonik mb-[0.5vw] mobile:mb-[2vw] !text-purple-400">
                          <span>ADVACRYL</span>
                        </h3>
                        <h4 className="content-p mb-[2vw] mobile:mb-[2.5vw] mobile:text-[5.2vw]">
                          Braided Coated Polyglactin 910
                        </h4>

                        <p className="content-p mb-[5vw] mobile:mb-[6vw] mobile:text-[4vw] tablet:text-[1.5vw]">
                          Consistent performance for confidence in a variety of
                          soft tissue approximation. The trusted choice of
                          Polyglactin 910 for surgeon&apos;s worldwide.
                        </p>
                        <LinkButton
                          btnText={"Learn More"}
                          link={"/advacryl"}
                          className={"tablet:text-[2vw] tablet:mt-[-0.8vw]"}
                        />
                      </div>
                    </div>
                  </div>
                </CardContainer>
              </SwiperSlide>
              <SwiperSlide>
                <CardContainer className="product-card relative">
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
                      <span className="text-[0.9vw] pt-1 mobile:text-[4vw] mobile:pt-0 tablet:text-[1.8vw] tablet:pt-0">
                        05
                      </span>
                    </div>
                    <div className="flex justify-between items-center h-full w-full gap-[5vw] mobile:flex-col mobile:justify-center mobile:items-center mobile:gap-[10vw]">
                      <div className="w-[75%] mobile:w-[70%]">
                        <div className="w-[30vw] h-[24vw] relative scale-[1.4]">
                        <Image
                          className="fadeUp object-contain"
                          src="/assets/home/poweredlc-product.png"
                          alt="Product Image"
                         fill
                        />

                        </div>
                        
                      </div>
                      <div className="flex flex-col w-full pr-[3vw] mobile:justify-center mobile:items-center mobile:pr-[0vw] tablet:pr-0 mobile:w-[95%] mobile:text-center">
                        <h3 className="title-2 aeonik mb-[0.5vw] mobile:mb-[2vw] !text-purple-500">
                          <span>ADVASTAP
                          POWERED LC</span>
                        </h3>
                        <h4 className="content-p mb-[2vw] mobile:mb-[2.5vw] mobile:text-[5.2vw]">
                        Precision is the ultimate sophistication
                        </h4>

                        <p className="content-p mb-[5vw] mobile:mb-[6vw] mobile:text-[4vw] tablet:text-[1.5vw]">
                        The Powered Endoscopic Linear Cutter delivers uniform compression and consistent staple formation, achieving stable and controlled tissue transection.
                        </p>
                        <LinkButton
                          btnText={"Learn More"}
                          link={"/poweredlc"}
                          className={"tablet:text-[2vw] tablet:mt-[-0.8vw]"}
                        />
                      </div>
                    </div>
                  </div>
                </CardContainer>
              </SwiperSlide>
            </Swiper>
          </div>
          <div
            className={`px-[1.6vw] py-[1.6vw] absolute z-[5] top-[55%] right-0 mobile:bottom-[3%] mobile:top-auto mobile:right-auto mobile:left-[62%] translate-x-[-65%] tablet:top-[70%] tablet:translate-y-[-70%] overflow-hidden mobile:p-[5vw] tablet:p-[2vw] rounded-full next-button cursor-pointer  mobile:block
                `} // Added background color transition
            onClick={handleNext} // Trigger next slide
          >
            <div className="w-[2.6vw] h-[2.6vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw]">
              <Image
                src="/assets/icons/product-carousel-arrow.svg"
                alt="arrow-right"
                className={`object-contain`}
                fill
              />
            </div>
          </div>
          <div
            className={`px-[1.6vw] py-[1.6vw] top-[55%] left-[5%] absolute z-[5] mobile:bottom-[3%] mobile:top-auto mobile:left-[37%] translate-x-[-38%]  tablet:top-[70%] tablet:translate-y-[-70%] overflow-hidden  mobile:p-[5vw] tablet:p-[2vw] rounded-full prev-button cursor-pointer  mobile:block
                `} // Added background color transition
            onClick={handlePrev} // Trigger previous slide
          >
            <div className="w-[2.6vw] h-[2.6vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw] rotate-180">
              <Image
                src="/assets/icons/product-carousel-arrow.svg"
                alt="arrow-left"
                className={`object-contain `}
                fill
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
