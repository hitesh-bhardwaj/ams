import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { NavLink } from "./NavLink";
import { ArrowLeft } from "lucide-react";

export default function ProductsMenu({ onBack, onSelectSubMenu }) {
  const menuRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [mobileWidth, setMobileWidth] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // ✅ Tracks the currently open menu
  const miniMenuRefs = useRef({}); // ✅ Stores refs for each mini-menu
  const iconsRefs = useRef({})
  // ✅ GSAP Animation on Mount
  useEffect(() => {
    if (menuRef.current) {
      const links = menuRef.current.querySelectorAll("li");
      gsap.fromTo(
        links,
        { yPercent: 100, autoAlpha: 0 },
        { yPercent: 0, autoAlpha: 1, duration: 0.5, stagger: 0.05 }
      );
    }
  }, []);

  // ✅ Update State on Window Resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setMobileWidth(window.innerWidth <= 1024);
    };

    // Attach event listener
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Toggle Mini Menu (Ensures only one menu is open at a time)
  const toggleMiniMenu = (menu) => {
    setActiveMenu((prevMenu) => {
      const newMenu = prevMenu === menu ? null : menu;

      Object.keys(miniMenuRefs.current).forEach((key) => {
        if (key !== newMenu && miniMenuRefs.current[key]) {
          gsap.to(miniMenuRefs.current[key], {
            height: 0,
            opacity: 0,
            duration: 0.4,
          });
        }
      });

      if (newMenu) {
        gsap.fromTo(
          miniMenuRefs.current[newMenu],
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.5, ease: "power2.out" }
        );
        gsap.to(
          iconsRefs.current[newMenu], {

        }
        )
      }

      return newMenu;
    });
  };

  return (
    <div
      className={`flex gap-5 mobile:gap-3 items-start mobile:flex-col tablet:flex-col ${windowWidth < 768 ? "mobile:pt-[10vw]" : ""}`}
      ref={menuRef}
    >
      <button
        className="h-[2.5vw] w-[2.5vw] p-[0.5vw] tablet:w-10 tablet:h-10 tablet:p-1.5 mobile:h-8 mobile:w-8 mobile:p-1.5 flex items-center justify-center rounded-full border border-black/50 group hover:bg-black duration-300"
        onClick={onBack}
      >
        <ArrowLeft className="w-full h-full group-hover:text-white duration-300" />
      </button>
      <div>
        {mobileWidth ? (
          <div className="flex items-start gap-[3vw] pt-1 mobile:flex-col mobile:gap-[5vw]">
            <ul className="space-y-[0.5vw] mobile:space-y-1 aeonik">
              {/* ✅ Wound Care */}
              <li>
                <div className="flex gap-[3vw] items-center">
                  <NavLink
                    linkText="Wound Care"
                    href="/products/wound-care"
                    className="!text-[5.5vw] tablet:!text-[3.5vw]"
                  />
                  <span
                    className="text-[9vw] leading-[0.9] mt-[-1vw] font-extralight cursor-pointer tablet:text-[6vw] "
                    onClick={() => toggleMiniMenu("wound-care")}
                    ref={(el) => (iconsRefs.current["wound-care"] = el)}
                  >
                    {activeMenu === "wound-care" ? "-" : "+"}
                  </span>
                </div>
                <div
                  className="pl-[2vw] overflow-hidden"
                  ref={(el) => (miniMenuRefs.current["wound-care"] = el)}
                  style={{ height: 0, opacity: 0 }}
                >
                  <div className="w-full h-[1px] bg-black/30 mobile:my-[3vw] tablet:my-[1vw] ml-[-2vw]"></div>
                  <ul className="space-y-[0.2vw] pb-[2vw]">
                    <li>
                      <NavLink
                        href="/products/wound-care#suture-carousel-first"
                        linkText="Absorbable Sutures"
                      />
                    </li>
                    <li>
                      <NavLink
                        href="/products/wound-care#suture-carousel-second"
                        linkText="Non-Absorbable Sutures"
                      />
                    </li>
                    <li>
                      <NavLink
                        href="/wound-care/advagrip-knotless-barbed-suture"
                        linkText="Knotless Sutures"
                      />
                    </li>
                    <li>
                      <NavLink
                        href="/haemostats-gelatin-sponge"
                        linkText="Haemostats"
                      />
                    </li>
                    <li>
                      <NavLink
                        href="/wound-care/surgical-kits"
                        linkText="Surgical Kits"
                      />
                    </li>
                  </ul>
                </div>
              </li>

              {/* ✅ Interventional Cardiology */}
              <li>
                <div className="flex gap-[3vw] items-center">
                  <NavLink
                    linkText="Interventional Cardiology"
                    href="/products/interventional-cardiology"
                    className="!text-[5.5vw]  tablet:!text-[3.5vw]"
                  />
                  <span
                    className="text-[9vw] leading-[0.9] mt-[-1vw] font-light cursor-pointer tablet:text-[6vw]"
                    onClick={() => toggleMiniMenu("interventional-cardiology")}
                  >
                    {activeMenu === "interventional-cardiology" ? "-" : "+"}
                  </span>
                </div>
                <div
                  className="pl-[2vw] overflow-hidden"
                  ref={(el) =>
                    (miniMenuRefs.current["interventional-cardiology"] = el)
                  }
                  style={{ height: 0, opacity: 0 }}
                >
                  <div className="w-full h-[1px] bg-black/30 mobile:my-[3vw] tablet:my-[1vw] ml-[-2vw]"></div>
                  <ul className="space-y-[0.2vw] pb-[2vw]">
                    <li>
                      <NavLink
                        href="/interventional-cardiology/adva-glide-ptca-coronary-balloon-semi-compliant"
                        linkText="PTCA Balloon Semi Compliant"
                      />
                    </li>
                    <li>
                      <NavLink
                        href="/interventional-cardiology/adva-glide-nc-ptca-coronary-balloon-non-compliant"
                        linkText="NPTCA Balloon Non Compliant"
                      />
                    </li>
                    <li>
                      <NavLink
                        href="/interventional-cardiology/adva-pro-coronary-sirolimus-stent"
                        linkText="Sirolimus Eluting Stent"
                      />
                    </li>
                    <li>
                      <NavLink
                        href="/interventional-cardiology/coronary-accessories"
                        linkText="Coronary Accessories"
                      />
                    </li>
                  </ul>
                </div>
              </li>

              {/* ✅ Other Links */}
              <li>
                <div className="flex gap-[3vw] items-center">
                  <NavLink
                    linkText="Cardiac Surgery"
                    href="/products/cardiac-surgery"
                    className="!text-[5.5vw] tablet:!text-[4vw]"
                  />
                  <span
                    className="text-[9vw] leading-[0.9] mt-[-1vw] font-light cursor-pointer tablet:text-[6vw]"
                    onClick={() => toggleMiniMenu("cardiac-surgery")}
                  >
                    {activeMenu === "cardiac-surgery" ? "-" : "+"}
                  </span>
                </div>
                <div
                  className="pl-[2vw] overflow-hidden"
                  ref={(el) => (miniMenuRefs.current["cardiac-surgery"] = el)}
                  style={{ height: 0, opacity: 0 }}
                >
                  <div className="w-full h-[1px] bg-black/30 mobile:my-[3vw] tablet:my-[1vw] ml-[-2vw]"></div>
                  <ul className="space-y-[0.2vw] pb-[2vw]">
                    <li>
                      <NavLink
                        className=""
                        href="/products/cardiac-surgery"
                        linkText="Cardiac Sutures"
                      />
                    </li>
                    <li>
                      <NavLink
                        className=""
                        href="/ligation-solutions/advaclip-ligation-clips"
                        linkText="Ligation Solutions"
                      />
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <div className="flex gap-[3vw] items-center">
                  <NavLink
                    linkText="Endo Surgery"
                    href="/products/endo-surgery"
                    className="!text-[5.5vw] tablet:!text-[3.5vw]"
                  />
                  <span
                    className="text-[9vw] leading-[0.9] mt-[-1vw] font-light cursor-pointer tablet:text-[6vw]"
                    onClick={() => toggleMiniMenu("endo-surgery")}
                  >
                    {activeMenu === "endo-surgery" ? "-" : "+"}
                  </span>
                </div>
                <div
                  className="pl-[2vw] overflow-hidden"
                  ref={(el) => (miniMenuRefs.current["endo-surgery"] = el)}
                  style={{ height: 0, opacity: 0 }}
                >
                  <div className="w-full h-[1px] bg-black/30 mobile:my-[3vw] tablet:my-[1vw] ml-[-2vw]"></div>
                  <ul className="space-y-[0.2vw] mobile:space-y-1 pb-[2vw]">
                    <li>
                      <NavLink
                        href="/endo-surgery/advastap-hemorrhoid-stapler"
                        linkText="Hemorrhoid Stapler"
                      />
                    </li>
                    <li>
                      <NavLink
                        href="/endo-surgery/advastap-linear-cutter-stapler"
                        linkText="Linear Cutter"
                      />
                    </li>
                    <li>
                      <NavLink
                        href="/endo-surgery/advastap-circular-stapler"
                        linkText="Circular Stapler"
                      />
                    </li>
                    <li>
                      <NavLink
                        href="/endo-surgery/advastap-skin-stapler"
                        linkText="Skin Stapler"
                      />
                    </li>
                    <li>
                      <NavLink
                        href="/endo-surgery/advastap-endoscopic-linear-cutter-stapler"
                        linkText="Endoscopic Linear Cutter"
                      />
                    </li>
                    <li>
                      <NavLink
                        href="/endo-surgery/advastap-powered-linear-cutter-stapler"
                        linkText="Powered Linear Cutter"
                      />
                    </li>
                    <li>
                      <NavLink
                        href="/endo-surgery/advastap-endoscopic-reloads"
                        linkText="Endoscopic Reloads"
                      />
                    </li>
                    <li>
                      <NavLink
                        className=""
                        href="/ligation-solutions/advaclip-ligation-clips"
                        linkText="Ligation Solutions"
                      />
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <div className="flex gap-[3vw] items-center">
                  <NavLink
                    linkText="Hernia Solutions"
                    href="/products/hernia-solutions"
                    className="!text-[5.5vw] tablet:!text-[3.5vw]"
                  />
                  <span
                    className="text-[9vw] leading-[0.9] mt-[-1vw] font-light cursor-pointer tablet:text-[6vw]"
                    onClick={() => toggleMiniMenu("hernia-solutions")}
                  >
                    {activeMenu === "hernia-solutions" ? "-" : "+"}
                  </span>
                </div>
                <div
                  className="pl-[2vw] overflow-hidden"
                  ref={(el) => (miniMenuRefs.current["hernia-solutions"] = el)}
                  style={{ height: 0, opacity: 0 }}
                >
                  <div className="w-full h-[1px] bg-black/30 mobile:my-[3vw] tablet:my-[1vw] ml-[-2vw]"></div>
                  <ul className="space-y-[0.2vw] mobile:space-y-1 pb-[2vw]">
                    <li>
                      <a
                        href="/hernia-solutions/advamesh-hernia-mesh#polypropylene-mesh"
                        className={`text-[1.3vw] fade-in-0 leading-tight text-body tablet:text-[3vw] mobile:text-[5vw] overflow-hidden block relative group aeonik font-light `}
                      >
                        <span
                          data-attr="Polypropylene"
                          className="inline-block transition-transform duration-500 ease-out after:absolute after:left-0 after:-bottom-0 after:translate-y-full after:content-[attr(data-attr)] group-hover:-translate-y-full"
                        >
                          Polypropylene
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/hernia-solutions/advamesh-hernia-mesh#medium-weight-mesh"
                        className={`text-[1.3vw] fade-in-0 leading-tight text-body tablet:text-[3vw] mobile:text-[5vw] overflow-hidden block relative group aeonik font-light `}
                      >
                        <span
                          data-attr="Medium Weight"
                          className="inline-block transition-transform duration-500 ease-out after:absolute after:left-0 after:-bottom-0 after:translate-y-full after:content-[attr(data-attr)] group-hover:-translate-y-full"
                        >
                          Medium Weight
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/hernia-solutions/advamesh-hernia-mesh#macroporous-mesh"
                        className={`text-[1.3vw] fade-in-0 leading-tight text-body tablet:text-[3vw] mobile:text-[5vw] overflow-hidden block relative group aeonik font-light `}
                      >
                        <span
                          data-attr="Macroporous"
                          className="inline-block transition-transform duration-500 ease-out after:absolute after:left-0 after:-bottom-0 after:translate-y-full after:content-[attr(data-attr)] group-hover:-translate-y-full"
                        >
                          Macroporous
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <NavLink
                  className="font-light !text-[5.5vw] tablet:!text-[3.5vw]"
                  href="/products/oem"
                  linkText="OEM Solutions"
                />
              </li>

              <li>
                <NavLink
                  className="font-light !text-[5.5vw]  tablet:!text-[3.5vw]"
                  href="/r-and-d/suture-needle-technology"
                  linkText="Advanced Needle Technology"
                />
              </li>
            </ul>
          </div>
        ) : (
          <>
            <div
              className={`flex items-start gap-[3vw] pt-1 mobile:flex-col mobile:gap-[5vw]`}
            >
              <ul className="space-y-[0.2vw] mobile:space-y-1 aeonik">
                <li>
                  <NavLink
                    linkText="Wound Care"
                    href={"/products/wound-care"}
                    onMouseEnter={() => onSelectSubMenu("wound-care")}
                  />
                </li>
                <li>
                  <NavLink
                    linkText="Interventional Cardiology"
                    href={"/products/interventional-cardiology"}
                    onMouseEnter={() =>
                      onSelectSubMenu("interventional-cardiology")
                    }
                  />
                </li>
                <li>
                  <NavLink
                    linkText="Cardiac Surgery"
                    href={"/products/cardiac-surgery"}
                    onMouseEnter={() => onSelectSubMenu("cardiac-surgery")}
                  />
                </li>
                <li>
                  <NavLink
                    linkText="Endo Surgery"
                    href={"/products/endo-surgery"}
                    onMouseEnter={() => onSelectSubMenu("endo-surgery")}
                  />
                </li>
                <li>
                  <NavLink
                    linkText="Hernia Solutions"
                    href={"/products/hernia-solutions"}
                    onMouseEnter={() => onSelectSubMenu("hernia-solutions")}
                  />
                </li>
                <li>
                  <NavLink
                    className="font-light"
                    href="/products/oem"
                    linkText="OEM Solutions"
                    onMouseEnter={() => onSelectSubMenu(null)}
                  />
                </li>
                <li>
                  <NavLink
                    className="font-light"
                    href="/r-and-d/suture-needle-technology"
                    linkText="Advanced Needle Technology"
                    onMouseEnter={() => onSelectSubMenu(null)}
                  />
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
