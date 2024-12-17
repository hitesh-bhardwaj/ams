import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { NavLink } from './NavLink';

export default function ManufacturingMenu({ onBack }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const links = menuRef.current.querySelectorAll("li");
    gsap.fromTo(links, { yPercent: 100, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.5, stagger: 0.05 });
  }, []);

  return (
    <div className="submenu" ref={menuRef}>
      <div className="submenu-header">
        <button className="back-button" onClick={onBack}>Back</button>
        <h2>Manufacturing</h2>
      </div>
      <ul>
        <li><NavLink href="/reasearch-and-development" linkText="Reasearch & Development"/></li>
        <li><NavLink href="/oem" linkText="OEM"/></li>
        <li><NavLink href="/needle" linkText="Needle"/></li>
      </ul>
    </div>
  );
}
