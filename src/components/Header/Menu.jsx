/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { Gradient } from "@/components/Gradient";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Menu = ({ state, isMenuOpen, toggleMenu }) => {
  const mainMenu = useRef(null);

  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
      const observer = new IntersectionObserver(
          (entries) => {
              entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                      const video = videoRef.current;
                      if (video && !videoLoaded) {
                          // Set video source dynamically when it enters the viewport
                          video.src = "/assets/header/ams-header-bg.mp4";
                          video.load(); // Ensure the video is loaded
                          video.play(); // Play the video when it's visible
                          setVideoLoaded(true); // Set video as loaded
                      }
                      observer.unobserve(entry.target); // Stop observing once the video has loaded
                  }
              });
          },
          { threshold: 0 }
      );

      const videoElement = videoRef.current;
      if (videoElement) {
          observer.observe(videoElement);
      }

      return () => {
          if (videoElement) observer.unobserve(videoElement);
      };
  }, [videoLoaded]);

  useGSAP(() => {
    const links = document.querySelectorAll(".nav .footer-link");
    if (isMenuOpen) {
      gsap.to(mainMenu.current, {
        top: 0,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(mainMenu.current, {
        background: "#00000070",
        delay: 0.4,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.from(links, {
        delay: 0.5,
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.05,
      });
    } else {
      gsap.to(mainMenu.current, {
        background: "none",
        delay: 0,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(mainMenu.current, {
        top: "-100%",
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [isMenuOpen]);

  return (
    <>
      <div
        ref={mainMenu}
        className={`w-screen h-screen fixed left-0 z-[100] top-[-100%] mobile:h-full mobile:w-full`}
      >
        <div className="bg-white h-2/3 w-full relative tablet:h-1/2 mobile:h-full">
        <div className="w-[28%] h-full absolute ">
          <video
                         ref={videoRef}  // Attach ref to video for lazy loading
                        muted
                        playsInline
                        loop
                        className="h-full w-full object-cover"
                        poster="/assets/header/ams-header-bg.webp" // Use poster image
                      
                    >
                    </video>
          </div>
          <div className="menu-container relative z-[1] w-full h-full px-[5%] py-[3%] grid grid-cols-12 tablet:grid-rows-4 tablet:h-[50vh]">
            <div className="w-[15vw] h-[2vw] absolute bottom-[5%] left-[4%] fadeUp tablet:h-[5vw] tablet:w-[20vw]">
              <Image
                src="/assets/header/ams-slogan.webp"
                className="object-contain"
                alt="ams-slogan"
                fill
              />
            </div>
            <div className="flex h-1/2 justify-between items-center col-span-full mobile:h-[10vw]  mobile:mt-[5vw]">
              <Link
                href="/"
                aria-label=":to home page"
                className="w-[7vw] h-[3vw] tablet:w-[15vw] tablet:h-[15vw] mobile:w-[25vw] mobile:h-[20vw] relative"
              >
                {/* Default image for tablet and larger screens */}
                <Image
                  src="/assets/header/ams-logo-white.webp"
                  className="object-contain w-full h-full mobile:hidden"
                  fill
                  alt="AMS Logo"
                />
                {/* Mobile image */}
                <Image
                  src="/logo.svg"
                  className="object-contain w-full h-full hidden mobile:block"
                  fill
                  alt="AMS Logo Mobile"
                />
              </Link>
              <div>
                <button
                  onClick={toggleMenu}
                  href="/"
                  className="flex items-center gap-3"
                >
                  <span className="aeonik content-p text-head leading-tight">
                    Close
                  </span>
                  <span className="w-[2.2vw] h-[2.2vw] flex justify-center items-center p-2 border border-head rounded-full tablet:w-[4vw] tablet:h-[4vw] mobile:w-[10vw] mobile:h-[10vw] mobile:p-[2.8vw]">
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
            <div className="col-start-5 col-span-8 nav row-start-2 mobile:flex mobile:flex-col mobile:items-start mobile:justify-start mobile:col-start-2 mobile:row-start-2 mobile:mt-[-15vw]">
              <div className="flex justify-start mobile:flex-col mobile:items-start">
                <div className="border-r border-[#D8D8D8] py-[1.8vw] pr-[5vw] mobile:border-none mobile:border-b mobile:border-[#D8D8D8] mobile:py-0">
                  <ul className="space-y-[0.8vw] tablet:space-y-[1vw]">
                    <li className="footer-link">
                      <Link
                        href="/"
                        className="aeonik font-light text-[1.6vw] leading-tight text-[#1a1a1a] tablet:text-[3vw]  mobile:text-[10vw]"
                      >
                        <span data-attr="Home">Home</span>
                      </Link>
                    </li>
                    <li className="footer-link">
                      <Link
                        href="/about"
                        className="aeonik font-light text-[1.6vw] leading-tight text-[#1a1a1a] tablet:text-[3vw]  mobile:text-[10vw]"
                      >
                        <span data-attr="About">About</span>
                      </Link>
                    </li>
                    <li className="footer-link">
                      <Link
                        href="/#"
                        className="aeonik font-light text-[1.6vw] leading-tight text-[#1a1a1a] tablet:text-[3vw]  mobile:text-[10vw]"
                      >
                        <span data-attr="Products">Products</span>
                      </Link>
                    </li>
                    <li className="footer-link">
                      <Link
                        href="/manufacturing"
                        className="aeonik font-light text-[1.6vw] leading-tight text-[#1a1a1a] tablet:text-[3vw]  mobile:text-[10vw]"
                      >
                        <span data-attr="Manufacturing">Manufacturing</span>
                      </Link>
                    </li>
                    <li className="footer-link">
                      <Link
                        href="/career"
                        className="aeonik font-light text-[1.6vw] leading-tight text-[#1a1a1a] tablet:text-[3vw]  mobile:text-[10vw]"
                      >
                        <span data-attr="Careers">Careers</span>
                      </Link>
                    </li>
                    <li className="footer-link">
                      <Link
                        href="/#"
                        className="aeonik font-light text-[1.6vw] leading-tight text-[#1a1a1a] tablet:text-[3vw]  mobile:text-[10vw]"
                      >
                        <span data-attr="News">News</span>
                      </Link>
                    </li>
                    <li className="footer-link">
                      <Link
                        href="/#"
                        className="aeonik font-light text-[1.6vw] leading-tight text-[#1a1a1a] tablet:text-[3vw]  mobile:text-[10vw]"
                      >
                        <span data-attr="Contact">Contact</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="hidden mobile:block h-[1px] bg-[#D8D8D8] w-full my-[5vw] lineDraw"></div>
                <div className="py-[1.8vw] pl-[5vw] mobile:pl-[0vw]">
                  <ul className="space-y-[0.3vw] tablet:space-y-[0.8vw] mobile:space-y-[1.2vw]">
                    <li className="footer-link">
                      <Link
                        href="/#"
                        className="aeonik font-light text-[1.35vw] leading-tight text-[#1a1a1a] tablet:text-[2vw]  mobile:text-[5vw]"
                      >
                        <span data-attr="Wound Care">Wound Care</span>
                      </Link>
                    </li>
                    <li className="footer-link">
                      <Link
                        href="/endo"
                        className="aeonik font-light text-[1.35vw] leading-tight text-[#1a1a1a] tablet:text-[2vw]  mobile:text-[5vw]"
                      >
                        <span data-attr="Endo Surgery">Endo Surgery</span>
                      </Link>
                    </li>
                    <li className="footer-link">
                      <Link
                        href="/hernia"
                        className="aeonik font-light text-[1.35vw] leading-tight text-[#1a1a1a] tablet:text-[2vw]  mobile:text-[5vw]"
                      >
                        <span data-attr="Hernia Solutions">
                          Hernia Solutions
                        </span>
                      </Link>
                    </li>
                    <li className="footer-link">
                      <Link
                        href="/#"
                        className="aeonik font-light text-[1.35vw] leading-tight text-[#1a1a1a] tablet:text-[2vw]  mobile:text-[5vw]"
                      >
                        <span data-attr="Interventional Cardiology">
                          Interventional Cardiology
                        </span>
                      </Link>
                    </li>
                    <li className="footer-link">
                      <Link
                        href="/#"
                        className="aeonik font-light text-[1.35vw] leading-tight text-[#1a1a1a] tablet:text-[2vw]  mobile:text-[5vw]"
                      >
                        <span data-attr="Cardiovascular Solutions">
                          Cardiovascular Solutions
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-between items-center w-[60vw] absolute bottom-[7%] mobile:items-center mobile:justify-center ">
                <div className="aeonik text-[0.9vw] text-[#1a1a1a] font-light space-x-2 tablet:text-[1.8vw] mobile:text-[2.5vw] mobile:hidden">
                  <Link href="/#">
                    <span>Privacy Policy</span>
                  </Link>
                  <span>|</span>
                  <Link href="/#">
                    <span>Terms & Conditions</span>
                  </Link>
                </div>
                <div className="flex gap-[1vw] mobile:justify-center mobile:items-center mobile:gap-[7vw] mobile:mt-[-5vw]">
                  <Link
                    href="/#"
                    className="opacity-60 hover:opacity-100 duration-300"
                  >
                    <img
                      className="w-[1.4vw] h-[1.4vw] tablet:w-[2.5vw] tablet:h-[2.5vw] mobile:w-[7vw] mobile:h-[7vw]"
                      src="/assets/icons/fb.svg"
                      alt="Facebook Icon"
                      height="30"
                      width="30"
                    />
                  </Link>
                  <Link
                    href="/#"
                    className="opacity-60 hover:opacity-100 duration-300"
                  >
                    <img
                      className="w-[1.4vw] h-[1.4vw] tablet:w-[2.5vw] tablet:h-[2.5vw] mobile:w-[7vw] mobile:h-[7vw]"
                      src="/assets/icons/linkedin.svg"
                      alt="LinkedIn Icon"
                      height="30"
                      width="30"
                    />
                  </Link>
                  <Link
                    href="/#"
                    className="opacity-60 hover:opacity-100 duration-300"
                  >
                    <img
                      className="w-[1.4vw] h-[1.4vw] tablet:w-[2.5vw] tablet:h-[2.5vw] mobile:w-[7vw] mobile:h-[7vw]"
                      src="/assets/icons/twitter.svg"
                      alt="Twitter Icon"
                      height="30"
                      width="30"
                    />
                  </Link>
                  <Link
                    href="/#"
                    className="opacity-60 hover:opacity-100 duration-300"
                  >
                    <img
                      className="w-[1.4vw] h-[1.4vw] tablet:w-[2.5vw] tablet:h-[2.5vw] mobile:w-[7vw] mobile:h-[7vw]"
                      src="/assets/icons/insta.svg"
                      alt="Instagram Icon"
                      height="30"
                      width="30"
                    />
                  </Link>
                  <Link
                    href="/#"
                    className="opacity-60 hover:opacity-100 duration-300"
                  >
                    <img
                      className="w-[1.5vw] h-[1.4vw] tablet:w-[2.5vw] tablet:h-[2.5vw] mobile:w-[7vw] mobile:h-[7vw]"
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
  );
};

export default Menu;
