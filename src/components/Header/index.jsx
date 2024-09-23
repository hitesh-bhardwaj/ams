import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Menu from "./Menu";
import { useLenis } from "@studio-freight/react-lenis";
import { useRouter } from "next/router";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [hasBackground, setHasBackground] = useState(false);
  const [isInverted, setIsInverted] = useState(false);
  const observerRef = useRef(null);
  const router = useRouter();
  const lenis = useLenis();

  const openMenu = () => {
    setIsMenuOpen(true);
    lenis.stop();
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    lenis.start();
  };
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const darkSectionInView = entries.some((entry) => entry.isIntersecting);
        setIsInverted(darkSectionInView);
      },
      { threshold: [0.1] }
    );

    const darkSections = document.querySelectorAll(".dark");
    darkSections.forEach((section) => observerRef.current.observe(section));

    return () => {
      observerRef.current.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      lenis.start();
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router, lenis]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Header visibility logic based on scroll direction
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsHeaderVisible(false);
      } else {
        // Scrolling up
        setIsHeaderVisible(true);
      }

      // Set background if scroll is more than 100 pixels
      if (currentScrollY > 100) {
        setHasBackground(true);
      } else {
        setHasBackground(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-screen h-fit z-[99] transition-transform duration-300 ${
          isHeaderVisible ? "transform-none" : "-translate-y-full"}`}
      >
        <div className={``}>
          <div className="header-container w-[92%] mx-auto py-[2vw] mobile:py-[5vw]">
            <div className="flex justify-between items-center mobile:h-[10vw]">
              <div className="header-anim">
                <Link href="/" className="relative h-fit w-[8vw] mobile:w-[25vw] tablet:w-[15vw] block">
                  <Image src="/logo.svg" width={100} height={100} className={`h-auto w-auto ${isInverted?"hidden":"block"} cursor-pointer`} alt="AMS Logo" />
                </Link>
                <Link href="/" className="w-full h-full block   "/>
                <div className="absolute top-[50%] translate-y-[-50%] left-[4%] translate-x-[-4%] h-[4vw] w-[8vw] mobile:w-[25vw] mobile:h-[20vw] mobile:left-[5%] tablet:w-[15vw] cursor-pointer">

                <Image src="/assets/header/ams-logo-white.webp" className={`object-contain h-full w-full ${isInverted?"block":"hidden"}`} alt="ams-logo-white" fill/>
                </div>
              </div>
              <div className="flex justify-center w-fit items-center gap-8">
                <button className="w-[1.5vw] header-anim mobile:hidden">
                  <div className="w-[1.5vw] h-[1.5vw] relative tablet:w-[4vw] tablet:h-[4vw]">
                    <Image src="/assets/icons/notification.svg" fill alt="Notification Icon" className={`${isInverted?"invert mobile:absolute mobile:top-[30%]":""}`}/>
                  </div>
                </button>
                <div className="burger-wrapper other-wrapper header-anim">
                  <button
                    onClick={openMenu}
                    aria-label="Open Menu"
                    className={`menu-btn ${isMenuOpen ? "open" : ""} ${isInverted?"invert":""}`}
                  >
                    <span className="line-wrapper">
                      <span className="line-1 line"></span>
                      <span className="line-2 line"></span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Menu isMenuOpen={isMenuOpen} toggleMenu={closeMenu} />
    </>
  );
};

export default Header;

