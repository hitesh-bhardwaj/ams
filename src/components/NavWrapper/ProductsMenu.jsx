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
    <div className="flex gap-10 items-start" ref={menuRef}>
      <button className="h-[2.5vw] w-[2.5vw] flex items-center justify-center p-[0.5vw] rounded-full border border-black/50" onClick={onBack}>
        <ArrowLeft className='w-full h-full' />
      </button>
      <ul className='space-y-[0.5vw]'>
        <li><NavButton linkText="Wound Care" onClick={() => onSelectMenu('wound-care')} /></li>
        <li><NavButton linkText="Endo Surgery" onClick={() => onSelectMenu('endo-surgery')} /></li>
        <li><NavButton linkText="Hernia Solutions" onClick={() => onSelectMenu('hernia-solutions')} /></li>
        <li><NavButton linkText="Interventional Cardiology" onClick={() => onSelectMenu('interventional-cardiology')} /></li>
        <li><NavButton linkText="Cardiac Surgery" onClick={() => onSelectMenu('cardiac-surgery')} /></li>
      </ul>
    </div>
  );
}
