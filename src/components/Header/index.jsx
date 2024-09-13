import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Menu from "./Menu";
import { useLenis } from "@studio-freight/react-lenis";
import { useRouter } from "next/router";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [hasBackground, setHasBackground] = useState(false);
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
        <div className={`${hasBackground ? "bg-white/20 backdrop-blur-md overflow-hidden" : ""}`}>
          <div className="header-container w-[92%] mx-auto py-[1.5vw] mobile:py-[5vw]">
            <div className="flex justify-between items-center">
              <div className="header-anim">
                <Link href="/" className="relative h-fit w-[7vw] mobile:w-[25vw] tablet:w-[15vw] block">
                  <Image src="/logo.svg" width={100} height={100} className="h-auto w-auto" alt="AMS Logo" />
                </Link>
              </div>
              <div className="flex justify-center w-fit items-center gap-8">
                <button className="w-[1.5vw] header-anim mobile:hidden">
                  <div className="w-[1.5vw] h-[1.5vw] relative tablet:w-[4vw] tablet:h-[4vw]">
                    <Image src="/assets/icons/notification.svg" fill alt="Notification Icon" />
                  </div>
                </button>
                <div className="burger-wrapper other-wrapper header-anim">
                  <button
                    onClick={openMenu}
                    aria-label="Open Menu"
                    className={`menu-btn ${isMenuOpen ? "open" : ""}`}
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

