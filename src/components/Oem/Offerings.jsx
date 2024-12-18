import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import gsap from 'gsap';
import Modal from './Modal';
import { useLenis } from "lenis/react";

export default function Offerings() {
    const [isOpen, setIsOpen] = useState(false);
    // const [card, setCard] = useState();
      const lenis = useLenis();
    
    const handleOpenModal = (id) => {
        setIsOpen(true);
        // setCard(id);
        lenis && lenis.stop();
        document.body.style.overflow = "hidden";
      };
      const handleCloseModal = () => {
        setIsOpen(false);
        lenis && lenis.start();
        document.body.style.overflow = "";
      };
    useEffect(() => {
    if(globalThis.innerWidth > 1024) { 
        const navbarLinks = document.querySelectorAll(".oemcard-button");
        const cardContainer = document.querySelector(".card-container");
        const focSections = document.querySelectorAll(".card-item");

        navbarLinks.forEach((link) => {
            link.addEventListener("click", (e) => {
                e.preventDefault();

                navbarLinks.forEach((lnk) => lnk.classList.remove('active'));

                link.classList.add('active');

                const targetHref = link.getAttribute("href");
                const targetElem = document.querySelector(targetHref);

                if (!targetElem) return;

                const cardIndex = Array.from(focSections).indexOf(targetElem);

                const xPercent = -(cardIndex * 20);

                gsap.to(cardContainer, {
                    xPercent: xPercent,
                    duration: 1,
                    ease: "power2.out"
                });
            });
        });

        return () => {
            navbarLinks.forEach((link) => {
                link.removeEventListener("click", () => { });
            });
        };
    }
}, []);


    return (
        <>
            <section id='offerings'>
                <div className='container-lg offerings-container pt-[12%]'>
                    <h2 className='title-2 font-light text-center aeonik mb-[6vw] fadeUp'>OEM Offerings</h2>
                    <Swiper
                        style={swiperStyle}
                        freeMode={true}
                        scrollbar={true}
                        slidesPerView={4}
                        navigation={false}
                        spaceBetween={40}
                        modules={[FreeMode, Scrollbar]}
                    >
                        {smallContent.map((item, index) => (
                            <SwiperSlide key={index} className='h-full fadeUp'>
                                <a href={`#card-item-${index + 1}`} className='links oemcard-button block h-full w-full'>
                                    <div className='rounded-[3vw] p-[1vw] h-full w-full bg-white duration-300'>
                                        <h3 className='aeonik text-center font-light my-[1vw] text-[1.2vw]'>{item.title}</h3>
                                        <div className='rounded-[2vw] overflow-hidden h-[19vw]'>
                                            <Image src={item.image} alt={item.title} className='object-cover h-full w-full' width={400} height={400} />
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className='w-screen h-full mt-[5%] overflow-hidden'>

                    <div className='w-[500%] flex whitespace-nowrap items-center card-container'>
                        <div className='w-screen card-item shadow-sm' id='card-item-1'>
                            <div className='w-[90%] mx-auto h-full'>
                                <div className='font-light aeonik pl-4 mb-5'>
                                    <h4 className='text-[2.5vw]'>Needle Technology</h4>
                                    <p className='text-[1.75vw]'>Surgical Suture Needle</p>
                                </div>
                                <div className='rounded-[2.5vw] bg-white/50 relative h-[36vw] overflow-hidden'>
                                    <Image
                                        className='absolute right-0 top-0 w-[52%]'
                                        src="/assets/oem/needle-tech-big.png"
                                        alt='product image'
                                        width={900}
                                        height={700}
                                        priority={false}
                                        quality={100}
                                    />
                                    <div className='w-1/2 relative h-full flex items-center justify-end'>
                                        <div className='font-light text-[1.25vw] space-y-[10%] text-right pb-[3vw] relative z-10'>
                                            <p className='flex items-center gap-[5vw] mr-[0.8vw] justify-end'>
                                                <span className='hover:scale-105 duration-500'>Advanced US & German Technology</span>
                                                <span className='bg-white h-5 w-5 p-[4px] shadow-[0px_0px_8px_4px_#4d7ec8] rounded-full'>
                                                    <span className='bg-[#5885EE] block h-full w-full rounded-full blur-[3px]' />
                                                </span>
                                            </p>
                                            <p className='flex items-center gap-[5vw] mr-[-0.5vw] justify-end'>
                                                <span className='hover:scale-105 duration-500'>Cutting-Edge Robotics and Automation</span>
                                                <span className='bg-white h-5 w-5 p-[4px] shadow-[0px_0px_8px_4px_#4d7ec8] rounded-full'>
                                                    <span className='bg-[#5885EE] block h-full w-full rounded-full blur-[3px]' />
                                                </span>
                                            </p>
                                            <p className='flex items-center gap-[5vw] mr-[-0.5vw] justify-end'>
                                                <span className='hover:scale-105 duration-500'>Robust Capacity</span>
                                                <span className='bg-white h-5 w-5 p-[4px] shadow-[0px_0px_8px_4px_#4d7ec8] rounded-full'>
                                                    <span className='bg-[#5885EE] block h-full w-full rounded-full blur-[3px]' />
                                                </span>
                                            </p>
                                            <p className='flex items-center gap-[5vw] mr-[0.8vw] justify-end'>
                                                <span className='hover:scale-105 duration-500'>Precision Engineering & Quality Assurance</span>
                                                <span className='bg-white h-5 w-5 p-[4px] shadow-[0px_0px_8px_4px_#4d7ec8] rounded-full'>
                                                    <span className='bg-[#5885EE] block h-full w-full rounded-full blur-[3px]' />
                                                </span>
                                            </p>
                                        </div>
                                        <div className='absolute'>
                                            <div className='pb-[3vw]'>
                                                <Image src="/assets/oem/half-circle.png" className='h-[100%]' alt='half-circle image' height={700} width={1000} priority={false} quality={100} />
                                            </div>
                                        </div>
                                        <div className='absolute bottom-[10%] left-[20%]'>
                                            <button className='flex items-center gap-2 text-[#4D7EC8] text-[1.25vw] font-normal' >
                                                <span className='text'>
                                                    Technical Specification{" "}
                                                </span>
                                                <svg className='w-3' width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.01701 48.0165L48.0168 3.01677L3.01701 48.0165ZM48.0168 3.01677L48.0795 46.9876L48.0168 3.01677ZM48.0168 3.01677L4.04596 2.95404L48.0168 3.01677Z" fill="currentColor" />
                                                    <path d="M3.01701 48.0165L48.0168 3.01677M48.0168 3.01677L48.0795 46.9876M48.0168 3.01677L4.04596 2.95404" stroke="currentColor" strokeWidth="5" strokeLinecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='card-item w-screen shadow-sm' id='card-item-2'>
                            <div className='w-[90%] mx-auto h-full'>
                                <div className='font-light aeonik pl-4 mb-5'>
                                    <h4 className='text-[2.5vw]'>Sternotomy Suture</h4>
                                    <p className='text-[1.75vw]'>316 LVM Stainless Steel</p>
                                </div>
                                <div className='rounded-[2.5vw] bg-white/50 relative h-[36vw] overflow-hidden'>
                                    <Image
                                        className='absolute right-0 top-0 w-[52%]'
                                        src="/assets/oem/sternotomy-suture-big.png"
                                        alt='product image'
                                        width={900}
                                        height={700}
                                        priority={false}
                                        quality={100}
                                    />
                                    <div className='w-1/2 relative h-full flex items-center justify-end'>
                                        <div className='font-light text-[1.25vw] space-y-[13%] text-right pb-[3vw] relative z-10'>
                                            <p className='flex items-center gap-[5vw] mr-[0.8vw] justify-end'>
                                                <span className='hover:scale-105 duration-500'>Excellent Tissue Compatibility</span>
                                                <span className='bg-white h-5 w-5 p-[4px] shadow-[0px_0px_8px_4px_#4d7ec8] rounded-full'>
                                                    <span className='bg-[#5885EE] block h-full w-full rounded-full blur-[3px]' />
                                                </span>
                                            </p>
                                            <p className='flex items-center gap-[5vw] mr-[-0.5vw] justify-end'>
                                                <span className='hover:scale-105 duration-500'>Superior Pliability</span>
                                                <span className='bg-white h-5 w-5 p-[4px] shadow-[0px_0px_8px_4px_#4d7ec8] rounded-full'>
                                                    <span className='bg-[#5885EE] block h-full w-full rounded-full blur-[3px]' />
                                                </span>
                                            </p>
                                            <p className='flex items-center gap-[5vw] mr-[-0.5vw] justify-end'>
                                                <span className='hover:scale-105 duration-500'>High Resistance to Breakage</span>
                                                <span className='bg-white h-5 w-5 p-[4px] shadow-[0px_0px_8px_4px_#4d7ec8] rounded-full'>
                                                    <span className='bg-[#5885EE] block h-full w-full rounded-full blur-[3px]' />
                                                </span>
                                            </p>
                                            <p className='flex items-center gap-[5vw] mr-[0.8vw] justify-end'>
                                                <span className='hover:scale-105 duration-500'>Excellent Knot Security</span>
                                                <span className='bg-white h-5 w-5 p-[4px] shadow-[0px_0px_8px_4px_#4d7ec8] rounded-full'>
                                                    <span className='bg-[#5885EE] block h-full w-full rounded-full blur-[3px]' />
                                                </span>
                                            </p>
                                        </div>
                                        <div className='absolute'>
                                            <div className='pb-[3vw]'>
                                                <Image src="/assets/oem/half-circle.png" className='h-[100%]' alt='half-circle image' height={700} width={1000} priority={false} quality={100} />
                                            </div>
                                        </div>
                                        <div className='absolute bottom-[10%] left-[20%]'>
                                            <button className='flex items-center gap-2 text-[#4D7EC8] text-[1.25vw] font-normal'>
                                                <span className='text'>
                                                    Technical Specification{" "}
                                                </span>
                                                <svg className='w-3' width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.01701 48.0165L48.0168 3.01677L3.01701 48.0165ZM48.0168 3.01677L48.0795 46.9876L48.0168 3.01677ZM48.0168 3.01677L4.04596 2.95404L48.0168 3.01677Z" fill="currentColor" />
                                                    <path d="M3.01701 48.0165L48.0168 3.01677M48.0168 3.01677L48.0795 46.9876M48.0168 3.01677L4.04596 2.95404" stroke="currentColor" strokeWidth="5" strokeLinecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </button>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='card-item w-screen shadow-sm' id='card-item-3'>
                            <div className='w-[90%] mx-auto h-full'>
                                <div className='font-light aeonik pl-4 mb-5'>
                                    <h4 className='text-[2.5vw]'>Hernia Solutions</h4>
                                    <p className='text-[1.75vw]'>Monofilament Polypropylene Mesh</p>
                                </div>
                                <div className='rounded-[2.5vw] bg-white/50 relative h-[36vw] overflow-hidden'>
                                    <Image
                                        className='absolute right-0 top-0 w-[52%]'
                                        src="/assets/oem/hernia-solutions-big.png"
                                        alt='product image'
                                        width={900}
                                        height={700}
                                        priority={false}
                                        quality={100}
                                    />
                                    <div className='w-[55%] relative h-full flex items-center justify-end'>
                                        <div className='font-light text-[1.25vw] space-y-[10%] text-right pb-[3vw] relative z-10'>
                                            <p className='flex items-center gap-[3vw] mr-[0.2vw] justify-end'>
                                                <span className='hover:scale-105 duration-500'>European Knitting Technology</span>
                                                <span className='bg-white h-5 w-5 p-[4px] shadow-[0px_0px_8px_4px_#4d7ec8] rounded-full'>
                                                    <span className='bg-[#5885EE] block h-full w-full rounded-full blur-[3px]' />
                                                </span>
                                            </p>
                                            <p className='flex items-center gap-[3vw] mr-[-0.5vw] justify-end'>
                                                <span className='hover:scale-105 duration-500'>Ability to Customize Knitting Pattern, Pore Size, Weight, and Size</span>
                                                <span className='bg-white h-5 w-5 p-[4px] shadow-[0px_0px_8px_4px_#4d7ec8] rounded-full'>
                                                    <span className='bg-[#5885EE] block h-full w-full rounded-full blur-[3px]' />
                                                </span>
                                            </p>
                                            <p className='flex items-center gap-[3vw] mr-[-0.2vw] justify-end'>
                                                <span className='hover:scale-105 duration-500'>Integrated Process with Minimal Human Intervention</span>
                                                <span className='bg-white h-5 w-5 p-[4px] shadow-[0px_0px_8px_4px_#4d7ec8] rounded-full'>
                                                    <span className='bg-[#5885EE] block h-full w-full rounded-full blur-[3px]' />
                                                </span>
                                            </p>
                                        </div>
                                        <div className='absolute'>
                                            <div className='pb-[3vw]'>
                                                <Image src="/assets/oem/half-circle.png" className='h-[100%]' alt='half-circle image' height={700} width={1000} priority={false} quality={100} />
                                            </div>
                                        </div>
                                        <div className='absolute bottom-[10%] left-[20%]'>
                                            <button className='flex items-center gap-2 text-[#4D7EC8] text-[1.25vw] font-normal'>
                                                <span className='text'>
                                                    Technical Specification{" "}
                                                </span>
                                                <svg className='w-3' width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.01701 48.0165L48.0168 3.01677L3.01701 48.0165ZM48.0168 3.01677L48.0795 46.9876L48.0168 3.01677ZM48.0168 3.01677L4.04596 2.95404L48.0168 3.01677Z" fill="currentColor" />
                                                    <path d="M3.01701 48.0165L48.0168 3.01677M48.0168 3.01677L48.0795 46.9876M48.0168 3.01677L4.04596 2.95404" stroke="currentColor" strokeWidth="5" strokeLinecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='card-item w-screen shadow-sm' id='card-item-4'>
                            <div className='w-[90%] mx-auto h-full'>
                                <div className='font-light aeonik pl-4 mb-5'>
                                    <h4 className='text-[2.5vw]'>Stent Delivery Systems</h4>
                                    <p className='text-[1.75vw]'>Rapid Exchange Catheter</p>
                                </div>
                                <div className='rounded-[2.5vw] bg-white/50 relative h-[36vw] overflow-hidden'>
                                    <Image
                                        className='absolute right-0 top-0 w-[52%]'
                                        src="/assets/oem/stent-delivery-big.png"
                                        alt='product image'
                                        width={900}
                                        height={700}
                                        priority={false}
                                        quality={100}
                                    />
                                    <div className='w-[45%] relative h-full flex items-center justify-end'>
                                        <div className='font-light text-[1.25vw] space-y-[10%] text-right pb-[3vw] relative z-10'>
                                            <p className='flex items-center gap-[5vw] mr-[2vw] justify-end'>
                                                <span className='hover:scale-105 duration-500'>Proprietary Shaft Design</span>
                                                <span className='bg-white h-5 w-5 p-[4px] shadow-[0px_0px_8px_4px_#4d7ec8] rounded-full'>
                                                    <span className='bg-[#5885EE] block h-full w-full rounded-full blur-[3px]' />
                                                </span>
                                            </p>
                                            <p className='flex items-center gap-[5vw] mr-[0.5vw] justify-end'>
                                                <span className='hover:scale-105 duration-500'>Engineered for Trackability</span>
                                                <span className='bg-white h-5 w-5 p-[4px] shadow-[0px_0px_8px_4px_#4d7ec8] rounded-full'>
                                                    <span className='bg-[#5885EE] block h-full w-full rounded-full blur-[3px]' />
                                                </span>
                                            </p>
                                            <p className='flex items-center gap-[5vw] mr-[-0.5vw] justify-end'>
                                                <span className='hover:scale-105 duration-500'>Enhanced Deliverability</span>
                                                <span className='bg-white h-5 w-5 p-[4px] shadow-[0px_0px_8px_4px_#4d7ec8] rounded-full'>
                                                    <span className='bg-[#5885EE] block h-full w-full rounded-full blur-[3px]' />
                                                </span>
                                            </p>
                                            <p className='flex items-center gap-[5vw] mr-[-0.5vw] justify-end'>
                                                <span className='hover:scale-105 duration-500'>Precise Balloon Positioning</span>
                                                <span className='bg-white h-5 w-5 p-[4px] shadow-[0px_0px_8px_4px_#4d7ec8] rounded-full'>
                                                    <span className='bg-[#5885EE] block h-full w-full rounded-full blur-[3px]' />
                                                </span>
                                            </p>
                                            <p className='flex items-center gap-[5vw] mr-[0.5vw] justify-end'>
                                                <span className='hover:scale-105 duration-500'>Deep Shoulder Balloon</span>
                                                <span className='bg-white h-5 w-5 p-[4px] shadow-[0px_0px_8px_4px_#4d7ec8] rounded-full'>
                                                    <span className='bg-[#5885EE] block h-full w-full rounded-full blur-[3px]' />
                                                </span>
                                            </p>
                                            <p className='flex items-center gap-[5vw] mr-[2vw] justify-end'>
                                                <span className='hover:scale-105 duration-500'>Minimized Vessel Trauma</span>
                                                <span className='bg-white h-5 w-5 p-[4px] shadow-[0px_0px_8px_4px_#4d7ec8] rounded-full'>
                                                    <span className='bg-[#5885EE] block h-full w-full rounded-full blur-[3px]' />
                                                </span>
                                            </p>
                                        </div>
                                        <div className='absolute'>
                                            <div className='pb-[3vw]'>
                                                <Image src="/assets/oem/half-circle.png" className='h-[100%]' alt='half-circle image' height={700} width={1000} priority={false} quality={100} />
                                            </div>
                                        </div>
                                        <div className='absolute bottom-[10%] left-[20%]'>
                                            <button className='flex items-center gap-2 text-[#4D7EC8] text-[1.25vw] font-normal'>
                                                <span className='text'>
                                                    Technical Specification{" "}
                                                </span>
                                                <svg className='w-3' width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.01701 48.0165L48.0168 3.01677L3.01701 48.0165ZM48.0168 3.01677L48.0795 46.9876L48.0168 3.01677ZM48.0168 3.01677L4.04596 2.95404L48.0168 3.01677Z" fill="currentColor" />
                                                    <path d="M3.01701 48.0165L48.0168 3.01677M48.0168 3.01677L48.0795 46.9876M48.0168 3.01677L4.04596 2.95404" stroke="currentColor" strokeWidth="5" strokeLinecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='card-item w-screen shadow-sm' id='card-item-5'>
                            <div className='w-[90%] mx-auto h-full'>
                                <div className='font-light aeonik pl-4 mb-5'>
                                    <h4 className='text-[2.5vw]'>Knotless Tissue Control Device</h4>
                                    <p className='text-[1.75vw]'>Polydioxanone | Poliglecaprone 25 | Polypropylene</p>
                                </div>
                                <div className='rounded-[2.5vw] bg-white/50 relative h-[36vw] overflow-hidden'>
                                    <Image
                                        className='absolute right-0 top-0 w-[52%]'
                                        src="/assets/oem/knotless-tissue-big.png"
                                        alt='product image'
                                        width={900}
                                        height={700}
                                        priority={false}
                                        quality={100}
                                    />
                                    <div className='w-[45%] relative h-full flex items-center justify-end'>
                                        <div className='font-light text-[1.25vw] space-y-[10%] text-right pb-[3vw] relative z-10'>
                                            <p className='flex items-center gap-[5vw] mr-[0.8vw] justify-end'>
                                                <span className='hover:scale-105 duration-500'>Closer Barb Spacing</span>
                                                <span className='bg-white h-5 w-5 p-[4px] shadow-[0px_0px_8px_4px_#4d7ec8] rounded-full'>
                                                    <span className='bg-[#5885EE] block h-full w-full rounded-full blur-[3px]' />
                                                </span>
                                            </p>
                                            <p className='flex items-center gap-[5vw] mr-[-0.5vw] justify-end'>
                                                <span className='hover:scale-105 duration-500'>Superior Holding Strength</span>
                                                <span className='bg-white h-5 w-5 p-[4px] shadow-[0px_0px_8px_4px_#4d7ec8] rounded-full'>
                                                    <span className='bg-[#5885EE] block h-full w-full rounded-full blur-[3px]' />
                                                </span>
                                            </p>
                                            <p className='flex items-center gap-[5vw] mr-[-0.5vw] justify-end'>
                                                <span className='hover:scale-105 duration-500'>Unidirectional and Circumferential Barbs</span>
                                                <span className='bg-white h-5 w-5 p-[4px] shadow-[0px_0px_8px_4px_#4d7ec8] rounded-full'>
                                                    <span className='bg-[#5885EE] block h-full w-full rounded-full blur-[3px]' />
                                                </span>
                                            </p>
                                            <p className='flex items-center gap-[5vw] mr-[0.8vw] justify-end'>
                                                <span className='hover:scale-105 duration-500'>Ultrasonic Welded Loop</span>
                                                <span className='bg-white h-5 w-5 p-[4px] shadow-[0px_0px_8px_4px_#4d7ec8] rounded-full'>
                                                    <span className='bg-[#5885EE] block h-full w-full rounded-full blur-[3px]' />
                                                </span>
                                            </p>
                                        </div>
                                        <div className='absolute'>
                                            <div className='pb-[3vw]'>
                                                <Image src="/assets/oem/half-circle.png" className='h-[100%]' alt='half-circle image' height={700} width={1000} priority={false} quality={100} />
                                            </div>
                                        </div>
                                        <div className='absolute bottom-[10%] left-[20%]'>
                                            <button   onClick={handleOpenModal}  className='flex items-center gap-2 text-[#4D7EC8] text-[1.25vw] font-normal'>
                                                <span className='text'>
                                                    Technical Specification{" "}
                                                </span>
                                                <svg className='w-3' width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.01701 48.0165L48.0168 3.01677L3.01701 48.0165ZM48.0168 3.01677L48.0795 46.9876L48.0168 3.01677ZM48.0168 3.01677L4.04596 2.95404L48.0168 3.01677Z" fill="currentColor" />
                                                    <path d="M3.01701 48.0165L48.0168 3.01677M48.0168 3.01677L48.0795 46.9876M48.0168 3.01677L4.04596 2.95404" stroke="currentColor" strokeWidth="5" strokeLinecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal isOpen={isOpen} onClose={handleCloseModal} cardId={1}/>
                </div>
            </section>
        </>
    )
}

const smallContent = [
    {
        title: 'Surgical Suture Needles',
        image: '/assets/oem/surgical-needle.png',
    },
    {
        title: 'Sternotomy Suture',
        image: '/assets/oem/sternotomy-suture.png',
    },
    {
        title: 'Hernia Solutions',
        image: '/assets/oem/hernia-solutions.png',
    },
    {
        title: 'Stent Delivery Systems',
        image: '/assets/oem/stent-delivery.png',
    },
    {
        title: 'Knotless Tissue Control Device',
        image: '/assets/oem/knotless-tissue.png',
    }
]

const swiperStyle = {
    paddingBottom: "5vw"
}

  
  