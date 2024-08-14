import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import Menu from "./Menu";
import { useLenis } from '@studio-freight/react-lenis';
import { useRouter } from "next/router";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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

    return (
        <>
            <header className="fixed top-0 left-0 right-0 w-screen h-fit z-[99]">
                <div className="header-container w-[90%] mx-auto lg:py-[2vw] py-[4vw]">
                    <div className="flex justify-between items-center">
                        <div className="w-[7vw] header-anim">
                            <Link href="/">
                                <Image 
                                    src="/logo.svg" 
                                    width={130} 
                                    height={100}
                                    alt="AMS Logo"    
                                />
                            </Link>
                        </div>
                        <div className="flex justify-center w-fit items-center gap-8">
                            <button className="w-[1.5vw] header-anim">
                                <Image 
                                    src="/assets/icons/notification.svg"
                                    width={25}
                                    height={25}
                                    alt="Notification Icon"
                                />
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
    )
}

export default Header;