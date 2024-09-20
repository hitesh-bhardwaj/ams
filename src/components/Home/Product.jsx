import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import LinkButton from '../Button/LinkButton';
import { paraAnim } from '../gsapAnimations';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { useRef, useState } from 'react';
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Product() {
    paraAnim()
    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#product",
                start: "top bottom",
                end: "bottom 20%",
                scrub: true
            },

        })
        tl.to(".product-bg-img", {
            scale: 1.2,
            delay: -1

        });
        tl.to(".product-bg-img", {
            yPercent: 30,
            delay: -1

        })

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
            <section id='product' className='py-[5%] relative overflow-hidden mobile:pb-[30vw] mobile:pt-[15vw] mobile:block '>
                <div className='h-full'>

                    <Image src={"/assets/home/product-bg.webp"} fill alt={'product-bg'} className='object-cover product-bg-img scale-[1.3] translate-y-[-30%] mobile:hidden' />
                    <Image src={"/assets/home/product-bg-mobile.png"} fill alt={'product-bg'} className='object-cover product-bg-img scale-[1.3] translate-y-[-30%] hidden mobile:block' />
                </div>

                <div className="container-lg">
                    <div className="product-top text-center flex flex-col items-center">
                        <h2 data-para-anim className="title-2 aeonik leading-[1.3]">

                            Empowering Healthcare Professionals

                        </h2>
                        <p data-para-anim className="content-p my-6 w-[55%] mobile:w-[90%] mobile:my-10">

                            Advanced MedTech Solutions empowers healthcare practitioners and caregivers to manage and treat a wide range of medical conditions, from chronic diseases to acute injuries, with the next generation of insight-driven medical device technology and innovation.

                        </p>
                    </div>
                    <div className='fadeUp'>
                        <Swiper spaceBetween={50} navigation={false} modules={[Navigation]} onSwiper={(swiper) => (swiperRef.current = swiper)} className="homeCarousel">
                            <SwiperSlide>
                                <div className='product-card relative h-full'>
                                    <Image src={"/assets/products/product-frame.png"} fill className='object-fill mobile:hidden' alt="product-frame" />
                                    <Image src={"/assets/products/product-frame-mobile.png"} fill className='object-fill hidden mobile:block' alt="product-frame" />
                                    <div className='main relative'>
                                        <div className='absolute right-[4.5%] top-[1%] font-light text-[#2a2a2a] border border-[#2a2a2a] rounded-full h-[1.8vw] w-[1.8vw] flex justify-center items-center mobile:h-[8vw] mobile:w-[8vw] '>
                                            <span className='text-[0.9vw] pt-1 mobile:text-[4vw] mobile:pt-0'>01</span>
                                        </div>
                                        <div className='flex justify-between items-center h-full w-full gap-[5vw] mobile:flex-col mobile:justify-center mobile:items-center mobile:gap-[10vw]'>
                                            <div className='w-2/3 mobile:w-[70%]'>
                                                <Image
                                                    className='fadeUp'
                                                    src='/assets/products/ADVA-Glide.webp'
                                                    alt='Product Image'
                                                    width={1000}
                                                    height={1000}
                                                />
                                            </div>
                                            <div className='flex flex-col w-full pr-[3vw] mobile:justify-center mobile:items-center mobile:pr-[0vw] mobile:w-[95%] mobile:text-center'>
                                                <h3 className='title-2 aeonik mb-[1vw] mobile:mb-[5vw]'>
                                                    <span>
                                                        ADVA GLIDE
                                                    </span>
                                                </h3>
                                                <h4 className='content-p mb-[0.5vw] mobile:mb-[2.5vw]'>PTCA Balloon Catheter</h4>
                                                <p className='text-[1.4vw] mb-[1.6vw] text-[#59C4D4] mobile:text-[4.65vw] mobile:mb-[6vw]'>Gliding The Science of Flow Restoration</p>
                                                <p className='content-p-md mb-[1.5vw] mobile:mb-[6vw]'>
                                                    Revolutionalized for the most challenging environments
                                                    <br />
                                                    <br />
                                                    ADVA GLIDE’s revolutionary technology is specially designed to succeed in the most challenging Coronary Anatomies. With the fastest delation time, superior controlled and enhanced performance properties of trackability, crossability and navigablity in a wide range of complex lesions.
                                                </p>
                                                <LinkButton btnText={"Know More"} link={"/"} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='product-card relative'>
                                    <Image src={"/assets/products/product-frame.png"} fill className='object-fill mobile:hidden' alt="product-frame" />
                                    <Image src={"/assets/products/product-frame-mobile.png"} fill className='object-fill hidden mobile:block' alt="product-frame" />
                                    <div className='main relative'>
                                        <div className='absolute right-[4.5%] top-[1%] font-light text-[#2a2a2a] border border-[#2a2a2a] rounded-full h-[1.8vw] w-[1.8vw] flex justify-center items-center mobile:h-[8vw] mobile:w-[8vw]'>
                                            <span className='text-[0.9vw] pt-1 mobile:text-[4vw] mobile:pt-0'>02</span>
                                        </div>
                                        <div className='flex justify-between items-center h-full w-full gap-[5vw] mobile:flex-col mobile:justify-center mobile:items-center mobile:gap-[10vw]'>
                                            <div className='w-2/3 mobile:w-[70%]'>
                                                <Image
                                                    className='fadeUp'
                                                    src='/assets/products/ADVAGRIP.webp'
                                                    alt='Product Image'
                                                    width={1000}
                                                    height={1000}
                                                />
                                            </div>
                                            <div className='flex flex-col w-full pr-[3vw] mobile:justify-center mobile:items-center mobile:pr-[0vw] mobile:w-[95%] mobile:text-center'>
                                                <h3 className='title-2 aeonik mb-[1vw] mobile:mb-[5vw]'>
                                                    <span>
                                                        ADVAGRIP
                                                    </span>
                                                </h3>
                                                <h4 className='content-p mb-[0.5vw] mobile:mb-[2.5vw]'>Knotless Tissue Control Device</h4>
                                                <p className='text-[1.4vw] mb-[1.6vw] text-[#59C4D4] mobile:text-[4.65vw] mobile:mb-[6vw]'>A Grip like No Other</p>
                                                <p className='content-p-md mb-[1.5vw] mobile:mb-[6vw]'>
                                                    ADVAGRIP offers swift & secure tissue control without the hassle of tying knots. With AMS&apos; Tri-Cut Technology, ADVAGRIP ensures robust anchoring while maintaining suture strength. Its ultrasonically welded loop and angled tip provide added security and precision. Experience the efficiency and reliability of ADVAGRIP for superior wound closure.
                                                    <br />
                                                    <br />
                                                    Changing the paradigm of Knotless Suture Technology with ADVAGRIP.
                                                </p>
                                                <LinkButton btnText={"Get a Grip"} link={"/"} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='product-card relative'>
                                    <Image src={"/assets/products/product-frame.png"} fill className='object-fill mobile:hidden' alt="product-frame" />
                                    <Image src={"/assets/products/product-frame-mobile.png"} fill className='object-fill hidden mobile:block' alt="product-frame" />
                                    <div className='main relative'>
                                        <div className='absolute right-[4.5%] top-[1%] font-light text-[#2a2a2a] border border-[#2a2a2a] rounded-full h-[1.8vw] w-[1.8vw] flex justify-center items-center mobile:h-[8vw] mobile:w-[8vw]'>
                                            <span className='text-[0.9vw] pt-1 mobile:text-[4vw] mobile:pt-0'>03</span>
                                        </div>
                                        <div className='flex justify-between items-center h-full w-full gap-[5vw] mobile:flex-col mobile:justify-center mobile:items-center mobile:gap-[10vw]'>
                                            <div className='w-2/3 mobile:w-[70%]'>
                                                <Image
                                                    className='fadeUp'
                                                    src='/assets/products/ADVA-Pro.webp'
                                                    alt='Product Image'
                                                    width={1000}
                                                    height={1000}
                                                />
                                            </div>
                                            <div className='flex flex-col w-full pr-[3vw] mobile:justify-center mobile:items-center mobile:pr-[0vw] mobile:w-[95%] mobile:text-center'>
                                                <h3 className='title-2 aeonik mb-[1vw] mobile:mb-[5vw]'>
                                                    <span>
                                                        ADVA PRO
                                                    </span>
                                                </h3>
                                                <h4 className='content-p mb-[0.5vw] mobile:mb-[2.5vw]'>Sirolimus Eluting Coronary Stent System</h4>
                                                <p className='text-[1.4vw] mb-[1.6vw] text-[#59C4D4] mobile:text-[4.65vw] mobile:mb-[6vw]'>Precision. Perfection. Pro.</p>
                                                <p className='content-p-md mb-[1.5vw] mobile:mb-[6vw]'>
                                                    The Pinnacle of Precision in Complex PCI is not just designed to transform lives; it&apos;s poised to redefine the very future of interventional cardiology for complex anatomies. Prepare to witness a revolution in cardiac care that will set a new standard for excellence.
                                                </p>
                                                <LinkButton btnText={"Know More"} link={"/"} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='product-card relative'>
                                    <Image src={"/assets/products/product-frame.png"} fill className='object-fill mobile:hidden' alt="product-frame" />
                                    <Image src={"/assets/products/product-frame-mobile.png"} fill className='object-fill hidden mobile:block' alt="product-frame" />
                                    <div className='main relative'>
                                        <div className='absolute right-[4.5%] top-[1%] font-light text-[#2a2a2a] border border-[#2a2a2a] rounded-full h-[1.8vw] w-[1.8vw] flex justify-center items-center mobile:h-[8vw] mobile:w-[8vw]'>
                                            <span className='text-[0.9vw] pt-1 mobile:text-[4vw] mobile:pt-0'>04</span>
                                        </div>
                                        <div className='flex justify-between items-center h-full w-full gap-[5vw] mobile:flex-col mobile:justify-center mobile:items-center mobile:gap-[10vw]'>
                                            <div className='w-2/3 mobile:w-[70%]'>
                                                <Image
                                                    className='fadeUp'
                                                    src='/assets/products/ADVACRYL.webp'
                                                    alt='Product Image'
                                                    width={1000}
                                                    height={1000}
                                                />
                                            </div>
                                            <div className='flex flex-col w-full pr-[3vw] mobile:justify-center mobile:items-center mobile:pr-[0vw] mobile:w-[95%] mobile:text-center'>
                                                <h3 className='title-2 aeonik mb-[1vw] mobile:mb-[5vw]'>
                                                    <span>
                                                        ADVACRYL
                                                    </span>
                                                </h3>
                                                <h4 className='content-p mb-[0.5vw] mobile:mb-[2.5vw]'>Polyglactin 910</h4>
                                                <p className='text-[1.4vw] mb-[1.6vw] text-[#59C4D4] mobile:text-[4.65vw] mobile:mb-[6vw]'>Seal of Confidence</p>
                                                <p className='content-p-md mb-[1.5vw] mobile:mb-[6vw]'>
                                                    ADVACRYL suture is braided synthetic absorbable sterile surgical suture composed of a copolymer made from 90% Glycolide and 10% L-lactide. Braided ADVACRYL suture is coated with a mixture composed of Poly (Glycolide-co-lactide) (Glacomer 37) and calcium stearate. The suture is colored violet to increase visibility and is also available undyed.
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
                className={`px-[2vw] py-[2vw] absolute z-[5] top-[55%] right-[-1%] mobile:bottom-[2%] mobile:top-auto mobile:right-auto mobile:left-[65%] translate-x-[-65%] border overflow-hidden border-black mobile:p-[5vw] rounded-full next-button cursor-pointer  mobile:block group hover:text-white
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

                <div className="w-fit h-fit relative z-[1]">
                  <svg
                    fill="currentColor"
                    height="30px"
                    width="30px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 330 330"
                  >
                    <path
                      id="XMLID_27_"
                      d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
	s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
	c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={`px-[2vw] py-[2vw] top-[55%] left-[5%] absolute z-[5] mobile:bottom-[2%] mobile:top-auto mobile:left-[35%] translate-x-[-38%] border border-black overflow-hidden  mobile:py-[5vw] mobile:px-[5vw] rounded-full prev-button cursor-pointer  mobile:block group hover:text-white
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
                <div className="w-fit h-fit relative z-[2] ">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 800 800"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_381_369)">
                      <path
                        d="M763.636 436.364H124.153L243.896 556.107C258.097 570.305 258.097 593.331 243.896 607.532C236.795 614.63 227.488 618.182 218.182 618.182C208.875 618.182 199.568 614.63 192.47 607.53L10.6521 425.711C-3.54908 411.513 -3.54908 388.487 10.6521 374.286L192.47 192.468C206.669 178.269 229.695 178.269 243.896 192.468C258.097 206.667 258.097 229.692 243.896 243.893L124.153 363.636H763.636C783.719 363.636 800 379.918 800 400C800 420.082 783.719 436.364 763.636 436.364Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_381_369">
                        <rect
                          width="800"
                          height="800"
                          fill="white"
                          transform="matrix(-1 0 0 1 800 0)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
                </div>
            </section>
        </>
    )
}