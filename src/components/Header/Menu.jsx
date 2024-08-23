/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { Gradient } from '@/components/Gradient';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Menu = ({ state, isMenuOpen, toggleMenu }) => {

    const mainMenu = useRef(null);

    useEffect(() => {
        // Create your instance
        const gradient = new Gradient()
        // Call `initGradient` with the selector to your canvas
        gradient.initGradient('#gradient-canvas')
    }, []);

    useGSAP(() => {
        const links = document.querySelectorAll(".nav .footer-link")
        if (isMenuOpen) {
            gsap.to(mainMenu.current, {
                top: 0,
                duration: 0.5,
                ease: 'power2.out'
            });
            gsap.to(mainMenu.current, {
                background: "#00000070",
                delay: 0.4,
                duration: 0.5,
                ease: 'power2.out'
            });
            gsap.from(links, {
                delay: 0.5,
                opacity: 0,
                y: 20,
                duration: 0.5,
                stagger: 0.05 
            })
        } else {
            gsap.to(mainMenu.current, {
                background: "none",
                delay: 0,
                duration: 0.5,
                ease: 'power2.out'
            });
            gsap.to(mainMenu.current, {
                top: "-100%",
                duration: 0.5,
                ease: 'power2.out'
            });
        }
    }, [isMenuOpen]);

    return (
        <>
            <div ref={mainMenu} className={`w-screen h-screen fixed left-0 z-[100] top-[-100%]`}>
                <div className="bg-white h-2/3 w-full relative">
                    <div className="canvas-container absolute h-full w-[29%]">
                        <canvas id='gradient-canvas'/>
                    </div>
                    <div className="menu-container relative z-[1] w-full h-full px-[5%] py-[3%] grid grid-cols-12">
                        <p className="aeonik font-light text-white text-[1.25vw] absolute bottom-0 pb-[2.7%] left-[5%]">Advancing the way we care</p>
                        <div className="flex h-1/2 justify-between items-center col-span-full">
                            <Link href="/" className="w-[7vw]">
                                <Image
                                    src="/logo-white.svg" 
                                    width={130} 
                                    height={100}
                                    alt="AMS Logo"    
                                />
                            </Link>
                            <div>
                                <button onClick={toggleMenu} href="/" className="flex items-center gap-3">
                                    <span className="aeonik content-p text-head leading-tight">Close</span>
                                    <span className="w-[2.2vw] h-[2.2vw] flex justify-center items-center p-2 border border-head rounded-full">
                                        <Image 
                                            src="/assets/icons/close-icon.svg"
                                            alt="Close Menu"
                                            width={20}
                                            height={20}
                                        />
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="col-start-5 col-span-8 relative nav">
                            <div className="flex justify-start">
                                <div className="border-r border-[#D8D8D8] py-[1.8vw] pr-[5vw]">
                                    <ul className="space-y-[0.8vw]">
                                        <li className="footer-link">
                                            <Link href="/#" className="aeonik font-light text-[1.6vw] leading-tight text-[#1a1a1a]">
                                                <span data-attr="Home">
                                                    Home
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="footer-link">
                                            <Link href="/about" className="aeonik font-light text-[1.6vw] leading-tight text-[#1a1a1a]">
                                                <span data-attr="About">
                                                    About
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="footer-link">
                                            <Link href="/#" className="aeonik font-light text-[1.6vw] leading-tight text-[#1a1a1a]">
                                                <span data-attr="Products">
                                                    Products
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="footer-link">
                                            <Link href="/manufacturing" className="aeonik font-light text-[1.6vw] leading-tight text-[#1a1a1a]">
                                                <span data-attr="Manufacturing">
                                                    Manufacturing
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="footer-link">
                                            <Link href="/career" className="aeonik font-light text-[1.6vw] leading-tight text-[#1a1a1a]">
                                                <span data-attr="Careers">
                                                    Careers
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="footer-link">
                                            <Link href="/#" className="aeonik font-light text-[1.6vw] leading-tight text-[#1a1a1a]">
                                                <span data-attr="News">
                                                    News
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="footer-link">
                                            <Link href="/#" className="aeonik font-light text-[1.6vw] leading-tight text-[#1a1a1a]">
                                                <span data-attr="Contact">
                                                    Contact
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="py-[1.8vw] pl-[5vw]">
                                    <ul className="space-y-[0.3vw]">
                                        <li className="footer-link">
                                            <Link href="/#" className="aeonik font-light text-[1.35vw] leading-tight text-[#1a1a1a]">
                                                <span data-attr="Wound Care">
                                                    Wound Care
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="footer-link">
                                            <Link href="/endo" className="aeonik font-light text-[1.35vw] leading-tight text-[#1a1a1a]">
                                                <span data-attr="Endo Surgery">
                                                    Endo Surgery
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="footer-link">
                                            <Link href="/hernia" className="aeonik font-light text-[1.35vw] leading-tight text-[#1a1a1a]">
                                                <span data-attr="Hernia Solutions">
                                                    Hernia Solutions
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="footer-link">
                                            <Link href="/#" className="aeonik font-light text-[1.35vw] leading-tight text-[#1a1a1a]">
                                                <span data-attr="Interventional Cardiology">
                                                    Interventional Cardiology
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="footer-link">
                                            <Link href="/#" className="aeonik font-light text-[1.35vw] leading-tight text-[#1a1a1a]">
                                                <span data-attr="Cardiovascular Solutions">
                                                    Cardiovascular Solutions
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex justify-between items-center w-full absolute bottom-0">
                                <div className="aeonik text-[0.9vw] text-[#1a1a1a] font-light space-x-2">
                                    <Link href="/#">
                                        <span>
                                            Privacy Policy
                                        </span>
                                    </Link>
                                    <span>
                                        |
                                    </span>
                                    <Link href="/#">
                                        <span>
                                            Terms & Conditions
                                        </span>
                                    </Link>
                                </div>
                                <div className="flex gap-[1vw]">
                                    <Link href="/#" className="opacity-60 hover:opacity-100 duration-300">
                                        <img 
                                            className="w-[1.4vw] h-[1.4vw]"
                                            src="/assets/icons/fb.svg"
                                            alt="Facebook Icon"
                                            height="30"
                                            width="30"
                                        />
                                    </Link>
                                    <Link href="/#" className="opacity-60 hover:opacity-100 duration-300">
                                        <img 
                                            className="w-[1.4vw] h-[1.4vw]"
                                            src="/assets/icons/linkedin.svg"
                                            alt="LinkedIn Icon"
                                            height="30"
                                            width="30"
                                        />
                                    </Link>
                                    <Link href="/#" className="opacity-60 hover:opacity-100 duration-300">
                                        <img 
                                            className="w-[1.4vw] h-[1.4vw]"
                                            src="/assets/icons/twitter.svg"
                                            alt="Twitter Icon"
                                            height="30"
                                            width="30"
                                        />
                                    </Link>
                                    <Link href="/#" className="opacity-60 hover:opacity-100 duration-300">
                                        <img 
                                            className="w-[1.4vw] h-[1.4vw]"
                                            src="/assets/icons/insta.svg"
                                            alt="Instagram Icon"
                                            height="30"
                                            width="30"
                                        />
                                    </Link>
                                    <Link href="/#" className="opacity-60 hover:opacity-100 duration-300">
                                        <img 
                                            className="w-[1.5vw] h-[1.4vw]"
                                            src="/assets/icons/youtube.svg"
                                            alt="Youtube Icon"
                                            height="30"
                                            width="30"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu;