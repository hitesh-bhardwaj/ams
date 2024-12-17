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
      </div>
      <ul>
        <li><NavLink href="/research-and-development" linkText="Research & Development"/></li>
        <li><NavLink href="/oem" linkText="OEM Solutions"/></li>
        <li><NavLink href="/needle" linkText="Advanced Needle Technology"/></li>
      </ul>
    </div>
  );
}
