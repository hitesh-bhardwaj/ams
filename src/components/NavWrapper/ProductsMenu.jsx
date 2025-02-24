import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { NavButton, NavLink } from "./NavLink";
import { ArrowLeft } from "lucide-react";

export default function ProductsMenu({ onBack, onSelectMenu ,onSelectSubMenu}) {
  const menuRef = useRef(null);

  useEffect(() => {
    const links = menuRef.current.querySelectorAll("li");
    gsap.fromTo(
      links,
      { yPercent: 100, autoAlpha: 0 },
      { yPercent: 0, autoAlpha: 1, duration: 0.5, stagger: 0.05 }
    );
  }, []);

  return (
    <div className="flex gap-5 items-start mobile:pt-[20vw]" ref={menuRef}>
      <button
        className="h-[2.5vw] w-[2.5vw] p-[0.5vw] tablet:w-8 tablet:h-8 tablet:p-1.5 mobile:h-8 mobile:w-8 mobile:p-1.5 flex items-center justify-center rounded-full border border-black/50 group hover:bg-black duration-300"
        onClick={onBack}
      >
        <ArrowLeft className="w-full h-full group-hover:text-white duration-300" />
      </button>
      <div>
        <div className="flex items-start gap-[3vw] pt-1 mobile:flex-col mobile:gap-[5vw]">
          <ul className="space-y-[0.2vw] mobile:space-y-1 aeonik">
            <li>
              <NavButton
                className=""
                linkText="Wound Care"
              
                onMouseEnter={()=>onSelectSubMenu('wound-care')}
              />
            </li>
            <li>
              <NavButton
                className=""
                linkText="Interventional Cardiology"
                
                onMouseEnter={()=>onSelectSubMenu('interventional-cardiology')}
              />
            </li>
            <li>
              <NavButton
                className=""
                linkText="Cardiac Surgery"
              
                onMouseEnter={()=>onSelectSubMenu('cardiac-surgery')}
              />
            </li>
            <li>
              <NavButton
                className=""
                linkText="Endo Surgery"
               
                onMouseEnter={()=>onSelectSubMenu('endo-surgery')}
              />
            </li>
            <li>
              <NavButton
                className=""
                linkText="Hernia Solutions"
            
                onMouseEnter={()=>onSelectSubMenu('hernia-solutions')}
              />
            </li>

            <li>
              <NavLink
                className="font-light"
                href="/products/oem"
                linkText="OEM Solutions"
                onMouseEnter={()=>onSelectSubMenu(null)}
              />
            </li>
            <li>
              <NavLink
                className="font-light"
                href="/r-and-d/suture-needle-technology"
                linkText="Advanced Needle Technology"
                onMouseEnter={()=>onSelectSubMenu(null)}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
