import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import gsap from 'gsap';
import Modal from './Modal';
import styles from './styles.module.css';
import { useLenis } from "lenis/react";

export default function Offerings() {
    const lenis = useLenis();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCardId, setSelectedCardId] = useState(null);

    const openModal = (id) => {
        setSelectedCardId(id);
        setIsModalOpen(true);
        lenis.stop();
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCardId(null);
        lenis.start();
    };

    useEffect(() => {
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
    }, []);

    return (
        <>
            <section id='offerings'>
                <div className='offerings-container pt-[12%] tablet:pt-[15%] mobile:pt-[25%]'>
                    <h2 className='title-2 font-light text-center aeonik mb-[6vw] mobile:mb-10 fadeUp'>OEM Offerings</h2>
                    <Swiper
                        freeMode={true}
                        scrollbar={true}
                        slidesPerView={1.2}
                        spaceBetween={20}
                        breakpoints={{
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            640: {
                                slidesPerView: 2.5,
                                spaceBetween: 30,
                            },
                        }}
                        navigation={false}
                        modules={[FreeMode, Scrollbar]}
                        className={`${styles.offeringSwiper}`}
                    >
                        {smallContent.map((item, index) => (
                            <SwiperSlide key={index} className='h-full fadeUp'>
                                <a href={`#card-item-${index + 1}`} className='links oemcard-button block h-full w-full'>
                                    <div className='rounded-[3vw] p-[1vw] h-full w-full bg-white duration-300 tablet:p-[2vw] mobile:p-[3.5vw] mobile:rounded-3xl'>
                                        <h3 className='aeonik text-center font-light my-[1vw] text-[1.2vw] tablet:text-[2.6vw] tablet:mb-4 mobile:text-[4.5vw] mobile:mb-4'>{item.title}</h3>
                                        <div className='rounded-[2vw] overflow-hidden h-[19vw] tablet:h-[30vw] mobile:h-[70vw] mobile:rounded-2xl'>
                                            <Image src={item.image} alt={item.title} className='object-cover h-full w-full' width={400} height={400} />
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className='w-screen h-full mt-[5%] overflow-hidden mobile:mt-10'>

                    <div className='w-[500%] flex whitespace-nowrap items-center card-container'>

                        <div className={`w-screen card-item shadow-sm`} id='card-item-1'>
                            <div className='w-[90%] mx-auto h-full'>
                                <div className={`${styles.cardHead}`}>
                                    <h4>Needle Technology</h4>
                                    <p>Surgical Suture Needle</p>
                                </div>
                                <div className={styles.cardMain}>
                                    <Image
                                        className={styles.bigImage}
                                        src="/assets/oem/needle-tech-big.png"
                                        alt='product image'
                                        width={900}
                                        height={700}
                                        priority={false}
                                        quality={100}
                                    />
                                    <div className={`${styles.cardTextContainer}`}>
                                        <div className={styles.cardText}>
                                            <p className='mr-[0.8vw]'>
                                                <span>Advanced US & German Technology</span>
                                                <span className={styles.bulletPoint}>
                                                    <span />
                                                </span>
                                            </p>
                                            <p className='mr-[-0.5vw]'>
                                                <span>Cutting-Edge Robotics and Automation</span>
                                                <span className={styles.bulletPoint}>
                                                    <span />
                                                </span>
                                            </p>
                                            <p className='mr-[-0.5vw]'>
                                                <span>Robust Capacity</span>
                                                <span className={styles.bulletPoint}>
                                                    <span />
                                                </span>
                                            </p>
                                            <p className='mr-[0.8vw]'>
                                                <span>Precision Engineering & Quality Assurance</span>
                                                <span className={styles.bulletPoint}>
                                                    <span />
                                                </span>
                                            </p>
                                        </div>
                                        <div className='absolute mobile:hidden'>
                                            <div className='pb-[3vw]'>
                                                <Image src="/assets/oem/half-circle.png" className='h-[100%]' alt='half-circle image' height={700} width={1000} priority={false} quality={100} />
                                            </div>
                                        </div>
                                        <div className='absolute bottom-[10%] left-[20%] tablet:bottom-6 mobile:bottom-4 mobile:left-5'>
                                            <button onClick={() => openModal(1)} aria-label='open specification modal' className='flex items-center gap-2 text-[#4D7EC8] text-[1.25vw] font-normal tablet:text-[2.5vw] mobile:text-xl'>
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
                                <div className={`${styles.cardHead}`}>
                                    <h4 className=''>Sternotomy Suture</h4>
                                    <p className=''>316 LVM Stainless Steel</p>
                                </div>
                                <div className={styles.cardMain}>
                                    <Image
                                        className={styles.bigImage}
                                        src="/assets/oem/sternotomy-suture-big.png"
                                        alt='product image'
                                        width={900}
                                        height={700}
                                        priority={false}
                                        quality={100}
                                    />
                                    <div className={`${styles.cardTextContainer}`}>
                                        <div className={styles.cardText}>
                                            <p className='mr-[0.8vw]'>
                                                <span>Excellent Tissue Compatibility</span>
                                                <span className={styles.bulletPoint}>
                                                    <span />
                                                </span>
                                            </p>
                                            <p className='mr-[-0.5vw]'>
                                                <span>Superior Pliability</span>
                                                <span className={styles.bulletPoint}>
                                                    <span />
                                                </span>
                                            </p>
                                            <p className='mr-[-0.5vw]'>
                                                <span>High Resistance to Breakage</span>
                                                <span className={styles.bulletPoint}>
                                                    <span />
                                                </span>
                                            </p>
                                            <p className='mr-[0.8vw]'>
                                                <span>Excellent Knot Security</span>
                                                <span className={styles.bulletPoint}>
                                                    <span />
                                                </span>
                                            </p>
                                        </div>
                                        <div className='absolute mobile:hidden'>
                                            <div className='pb-[3vw]'>
                                                <Image src="/assets/oem/half-circle.png" className='h-[100%]' alt='half-circle image' height={700} width={1000} priority={false} quality={100} />
                                            </div>
                                        </div>
                                        <div className='absolute bottom-[10%] left-[20%] tablet:bottom-6 mobile:bottom-4 mobile:left-5'>
                                            <button onClick={() => openModal(2)} aria-label='open specification modal' className='flex items-center gap-2 text-[#4D7EC8] text-[1.25vw] font-normal tablet:text-[2.5vw] mobile:text-xl'>
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
                                <div className={`${styles.cardHead}`}>
                                    <h4 className=''>Hernia Solutions</h4>
                                    <p className=''>Monofilament Polypropylene Mesh</p>
                                </div>
                                <div className={styles.cardMain}>
                                    <Image
                                        className={styles.bigImage}
                                        src="/assets/oem/hernia-solutions-big.png"
                                        alt='product image'
                                        width={900}
                                        height={700}
                                        priority={false}
                                        quality={100}
                                    />
                                    <div className={`${styles.cardTextContainer}`}>
                                        <div className={styles.cardText}>
                                            <p className='mr-[0.2vw]'>
                                                <span>European Knitting Technology</span>
                                                <span className={styles.bulletPoint}>
                                                    <span />
                                                </span>
                                            </p>
                                            <p className='mr-[-0.5vw]'>
                                                <span>Ability to Customize Knitting Pattern, Pore Size, Weight, and Size</span>
                                                <span className={styles.bulletPoint}>
                                                    <span />
                                                </span>
                                            </p>
                                            <p className='mr-[-0.2vw]'>
                                                <span>Integrated Process with Minimal Human Intervention</span>
                                                <span className={styles.bulletPoint}>
                                                    <span />
                                                </span>
                                            </p>
                                        </div>
                                        <div className='absolute mobile:hidden'>
                                            <div className='pb-[3vw]'>
                                                <Image src="/assets/oem/half-circle.png" className='h-[100%]' alt='half-circle image' height={700} width={1000} priority={false} quality={100} />
                                            </div>
                                        </div>
                                        <div className='absolute bottom-[10%] left-[20%] tablet:bottom-6 mobile:bottom-4 mobile:left-5'>
                                            <button onClick={() => openModal(3)} aria-label='open specification modal' className='flex items-center gap-2 text-[#4D7EC8] text-[1.25vw] font-normal tablet:text-[2.5vw] mobile:text-xl'>
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
                                <div className={`${styles.cardHead}`}>
                                    <h4 className=''>Stent Delivery Systems</h4>
                                    <p className=''>Rapid Exchange Catheter</p>
                                </div>
                                <div className={styles.cardMain}>
                                    <Image
                                        className={styles.bigImage}
                                        src="/assets/oem/stent-delivery-big.png"
                                        alt='product image'
                                        width={900}
                                        height={700}
                                        priority={false}
                                        quality={100}
                                    />
                                    <div className={`${styles.cardTextContainer}`}>
                                        <div className={styles.cardText}>
                                            <p className='mr-[2vw]'>
                                                <span>Proprietary Shaft Design</span>
                                                <span className={styles.bulletPoint}>
                                                    <span />
                                                </span>
                                            </p>
                                            <p className='mr-[0.5vw]'>
                                                <span>Engineered for Trackability</span>
                                                <span className={styles.bulletPoint}>
                                                    <span />
                                                </span>
                                            </p>
                                            <p className='mr-[-0.5vw]'>
                                                <span>Enhanced Deliverability</span>
                                                <span className={styles.bulletPoint}>
                                                    <span />
                                                </span>
                                            </p>
                                            <p className='mr-[-0.5vw]'>
                                                <span>Precise Balloon Positioning</span>
                                                <span className={styles.bulletPoint}>
                                                    <span />
                                                </span>
                                            </p>
                                            <p className='mr-[0.5vw]'>
                                                <span>Deep Shoulder Balloon</span>
                                                <span className={styles.bulletPoint}>
                                                    <span />
                                                </span>
                                            </p>
                                            <p className='mr-[2vw]'>
                                                <span>Minimized Vessel Trauma</span>
                                                <span className={styles.bulletPoint}>
                                                    <span />
                                                </span>
                                            </p>
                                        </div>
                                        <div className='absolute mobile:hidden'>
                                            <div className='pb-[3vw]'>
                                                <Image src="/assets/oem/half-circle.png" className='h-[100%]' alt='half-circle image' height={700} width={1000} priority={false} quality={100} />
                                            </div>
                                        </div>
                                        <div className='absolute bottom-[10%] left-[20%] tablet:bottom-6 mobile:bottom-4 mobile:left-5'>
                                            <button onClick={() => openModal(4)} aria-label='open specification modal' className='flex items-center gap-2 text-[#4D7EC8] text-[1.25vw] font-normal tablet:text-[2.5vw] mobile:text-xl'>
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
                                <div className={`${styles.cardHead}`}>
                                    <h4 className=''>Knotless Tissue Control Device</h4>
                                    <p className=''>Polydioxanone | Poliglecaprone 25 | Polypropylene</p>
                                </div>
                                <div className={styles.cardMain}>
                                    <Image
                                        className={styles.bigImage}
                                        src="/assets/oem/knotless-tissue-big.png"
                                        alt='product image'
                                        width={900}
                                        height={700}
                                        priority={false}
                                        quality={100}
                                    />
                                    <div className={`${styles.cardTextContainer}`}>
                                        <div className={styles.cardText}>
                                            <p className='mr-[0.8vw]'>
                                                <span>Closer Barb Spacing</span>
                                                <span className={styles.bulletPoint}>
                                                    <span />
                                                </span>
                                            </p>
                                            <p className='mr-[-0.5vw]'>
                                                <span>Superior Holding Strength</span>
                                                <span className={styles.bulletPoint}>
                                                    <span />
                                                </span>
                                            </p>
                                            <p className='mr-[-0.5vw]'>
                                                <span>Unidirectional and Circumferential Barbs</span>
                                                <span className={styles.bulletPoint}>
                                                    <span />
                                                </span>
                                            </p>
                                            <p className='mr-[0.8vw]'>
                                                <span>Ultrasonic Welded Loop</span>
                                                <span className={styles.bulletPoint}>
                                                    <span />
                                                </span>
                                            </p>
                                        </div>
                                        <div className='absolute mobile:hidden'>
                                            <div className='pb-[3vw]'>
                                                <Image src="/assets/oem/half-circle.png" className='h-[100%]' alt='half-circle image' height={700} width={1000} priority={false} quality={100} />
                                            </div>
                                        </div>
                                        <div className='absolute bottom-[10%] left-[20%] tablet:bottom-6 mobile:bottom-4 mobile:left-5'>
                                            <button onClick={() => openModal(5)} aria-label='open specification modal' className='flex items-center gap-2 text-[#4D7EC8] text-[1.25vw] font-normal tablet:text-[2.5vw] mobile:text-xl'>
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
                    <Modal isOpen={isModalOpen} onClose={closeModal} cardId={selectedCardId} />
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



