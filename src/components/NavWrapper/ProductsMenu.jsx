import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { NavButton } from './NavLink';
import { ArrowLeft } from 'lucide-react';

export default function ProductsMenu({ onBack, onSelectMenu }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const links = menuRef.current.querySelectorAll("li");
    gsap.fromTo(links, { yPercent: 100, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.5, stagger: 0.05 });
  }, []);

  return (
    <div className="flex gap-5 items-start" ref={menuRef}>
      <button className="h-[2vw] w-[2vw] p-[0.5vw] tablet:w-8 tablet:h-8 tablet:p-1.5 mobile:h-8 mobile:w-8 mobile:p-1.5 flex items-center justify-center rounded-full border border-black/50 group hover:bg-black duration-300" onClick={onBack}>
        <ArrowLeft className='w-full h-full group-hover:text-white duration-300' />
      </button>
      <div className='flex items-start gap-[3vw] pt-1 mobile:flex-col mobile:gap-[5vw]'>
        <ul className='space-y-[0.2vw] mobile:space-y-1'>
          <li className='uppercase font-normal text-[1.3vw] tablet:text-[2.2vw] mobile:text-[5vw]'>Advanced Surgery</li>
          <li><NavButton linkText="Wound Care" onClick={() => onSelectMenu('wound-care')} /></li>
          <li><NavButton linkText="Endo Surgery" onClick={() => onSelectMenu('endo-surgery')} /></li>
          <li><NavButton linkText="Hernia Solutions" onClick={() => onSelectMenu('hernia-solutions')} /></li>
        </ul>
        <ul className='space-y-[0.2vw] mobile:space-y-1'>
          <li className='uppercase font-normal text-[1.3vw] tablet:text-[2.2vw] mobile:text-[5vw]'>Advanced Surgery</li>
          <li><NavButton linkText="Interventional Cardiology" onClick={() => onSelectMenu('interventional-cardiology')} /></li>
          <li><NavButton linkText="Cardiac Surgery" onClick={() => onSelectMenu('cardiac-surgery')} /></li>
        </ul>
      </div>
    </div>
  );
}
