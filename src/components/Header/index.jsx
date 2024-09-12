import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Menu from "./Menu";
import { useLenis } from "@studio-freight/react-lenis";
import { useRouter } from "next/router";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true); // New state for header visibility
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
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsHeaderVisible(false);
      } else {
        // Scrolling up
        setIsHeaderVisible(true);
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
        className={`fixed top-0 left-0 right-0 w-screen h-fit z-[99] transition-transform duration-300 header-glass ${
          isHeaderVisible ? "transform-none" : "-translate-y-full"
        }`}
      >
        <div className="header-container w-[90%] mx-auto lg:py-[2vw] tablet:py-[1vw]">
          <div className="flex justify-between items-center">
            <div className="w-[7vw] header-anim">
              <Link href="/">
              <div className="relative h-[7vw] w-[7vw] mobile:h-[22vw] mobile:w-[27vw] tablet:w-[15vw] tablet:h-[15vw]">
                <Image
                  src="/logo.svg"
                  fill
                  alt="AMS Logo"
                />
                </div>
              </Link>
            </div>
            <div className="flex justify-center w-fit items-center gap-8">
              <button className="w-[1.5vw] header-anim mobile:hidden">
                <div className="w-[1.5vw] h-[1.5vw] relative tablet:w-[4vw] tablet:h-[4vw]">

                <Image
                  src="/assets/icons/notification.svg"
                 fill
                  alt="Notification Icon"
                />
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
      </header>
      <Menu isMenuOpen={isMenuOpen} toggleMenu={closeMenu} />
    </>
  );
};

export default Header;
