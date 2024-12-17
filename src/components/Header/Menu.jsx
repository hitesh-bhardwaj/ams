/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
// import { Gradient } from "@/components/Gradient";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/router";
import { Media } from "../media";
import NavWrapper from "../NavWrapper";

gsap.registerPlugin(useGSAP);

const Menu = ({ isMenuOpen, toggleMenu }) => {
  const mainMenu = useRef(null);
  const router = useRouter();
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
    const links = document.querySelectorAll(".main-nav li");
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

  const handleLinkClick = (href) => {
    router.push(href).then(() => {
      window.location.reload();
    });
  };

  return (
    <>
      <div
        ref={mainMenu}
        className={`w-screen h-screen fixed left-0 z-[100] top-[-100%] mobile:h-full mobile:w-full`}
      >
        <div className="bg-white h-2/3 w-full relative tablet:h-1/2 mobile:h-full">
          <Media greaterThan="mobile">
            <div className="w-[28%] h-full absolute">
              <video
                ref={videoRef}
                muted
                playsInline
                loop
                className="h-full w-full object-cover"
                poster="/assets/home/menu-video-poster.webp"
              ></video>
            </div>
          </Media>
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
              <span
                onClick={() => handleLinkClick("/")}
                data-attr="home"
                className="w-[7vw] h-[3vw] tablet:w-[15vw] tablet:h-[15vw] mobile:w-[25vw] mobile:h-[20vw] relative cursor-pointer"
              >
                <Image
                  src="/assets/header/ams-logo-white.webp"
                  className="object-contain w-full h-full mobile:hidden"
                  fill
                  alt="AMS Logo"
                />
                <Image
                  src="/logo.svg"
                  className="object-contain w-full h-full hidden mobile:block"
                  fill
                  alt="AMS Logo Mobile"
                />
              </span>

              <div>
                <button
                  onClick={toggleMenu}
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
              <NavWrapper isMenuOpen={isMenuOpen} />
              <div className="flex justify-between items-center w-[60vw] absolute bottom-[7%] mobile:items-center mobile:justify-center ">
                <div className="aeonik text-[0.9vw] text-[#1a1a1a] font-light space-x-2 tablet:text-[1.8vw] mobile:text-[2.5vw] mobile:hidden">
                  <Link prefetch={false} href="#">
                    <span>Privacy Policy</span>
                  </Link>
                  <span>|</span>
                  <Link href="#" prefetch={false}>
                    <span>Terms & Conditions</span>
                  </Link>
                </div>
                <div className="flex gap-[1vw] mobile:justify-center mobile:items-center mobile:gap-[7vw] mobile:mt-[-5vw]">
                  <Link
                    target="_blank"
                    href="#"
                    className="opacity-60 hover:opacity-100 duration-300"
                  >
                    <Image
                      className="w-[1.4vw] h-[1.4vw] tablet:w-[2.5vw] tablet:h-[2.5vw] mobile:w-[7vw] mobile:h-[7vw]"
                      src="/assets/icons/fb.svg"
                      alt="Facebook Icon"
                      height={30}
                      width={30}
                    />
                  </Link>
                  <Link
                    target="_blank"
                    href="#"
                    className="opacity-60 hover:opacity-100 duration-300"
                  >
                    <Image
                      className="w-[1.4vw] h-[1.4vw] tablet:w-[2.5vw] tablet:h-[2.5vw] mobile:w-[7vw] mobile:h-[7vw]"
                      src="/assets/icons/linkedin.svg"
                      alt="LinkedIn Icon"
                      height={30}
                      width={30}
                    />
                  </Link>
                  <Link
                    target="_blank"
                    href="#"
                    className="opacity-60 hover:opacity-100 duration-300"
                  >
                    <Image
                      className="w-[1.4vw] h-[1.4vw] tablet:w-[2.5vw] tablet:h-[2.5vw] mobile:w-[7vw] mobile:h-[7vw]"
                      src="/assets/icons/twitter.svg"
                      alt="Twitter Icon"
                      height={30}
                      width={30}
                    />
                  </Link>
                  <Link
                    target="_blank"
                    href="#"
                    className="opacity-60 hover:opacity-100 duration-300"
                  >
                    <Image
                      className="w-[1.4vw] h-[1.4vw] tablet:w-[2.5vw] tablet:h-[2.5vw] mobile:w-[7vw] mobile:h-[7vw]"
                      src="/assets/icons/insta.svg"
                      alt="Instagram Icon"
                      height={30}
                      width={30}
                    />
                  </Link>
                  <Link
                    target="_blank"
                    href="#"
                    className="opacity-60 hover:opacity-100 duration-300"
                  >
                    <Image
                      className="w-[1.5vw] h-[1.4vw] tablet:w-[2.5vw] tablet:h-[2.5vw] mobile:w-[7vw] mobile:h-[7vw]"
                      src="/assets/icons/youtube.svg"
                      alt="Youtube Icon"
                      height={30}
                      width={30}
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
