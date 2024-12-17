import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowLeft } from 'lucide-react';
import { NavLink } from './NavLink';

export default function WoundCareMenu({ onBack }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const links = menuRef.current.querySelectorAll("li");
    gsap.fromTo(links, { yPercent: 100, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.5, stagger: 0.05 });
  }, []);

  return (
    <>
      <div className="flex gap-10 items-start" ref={menuRef}>
        <button className="h-[2.5vw] w-[2.5vw] flex items-center justify-center p-[0.5vw] rounded-full border border-black/50" onClick={onBack}>
          <ArrowLeft className='w-full h-full' />
        </button>
        <ul className='space-y-[0.5vw]'>
          <li><NavLink href="/advaglide" linkText="Adva Glide" /></li>
          <li><NavLink href="/advapro" linkText="Adva Pro" /></li>
          <li><NavLink href="/accessories" linkText="Coronary Accessories" /></li>
        </ul>
      </div>
    </>
  )
}
