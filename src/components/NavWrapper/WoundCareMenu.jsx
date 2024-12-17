import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { NavLink } from './NavLink';

export default function WoundCareMenu({ onBack }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const links = menuRef.current.querySelectorAll("li");
    gsap.fromTo(links, { yPercent: 100, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.5, stagger: 0.05 });
  }, []);

  return (
    <div className="submenu" ref={menuRef}>
      <div className="submenu-header">
        <button className="back-button" onClick={onBack}>Back</button>
        <h2>ABSORBABLE SUTURES</h2>
      </div>
      <ul>
        <li><NavLink href="/wound-care/advacryl" linkText="Advacryl" /></li>
        <li><NavLink href="/wound-care/advacryl-plus" linkText="Advacryl Plus" /></li>
        <li><NavLink href="/wound-care/advacryl-rapid" linkText="Advacryl Rapid" /></li>
        <li><NavLink href="/wound-care/advamryl" linkText="Advamryl" /></li>
        <li><NavLink href="/wound-care/advapd" linkText="Advapd" /></li>
        <li><NavLink href="/wound-care/advacat" linkText="Advacat" /></li>
      </ul>
      <h2>NON ABSORBABLE SUTURES</h2>
      <ul>
        <li><NavLink href="/wound-care/advalene" linkText="Advalene" /></li>
        <li><NavLink href="/wound-care/advabond" linkText="Advabond" /></li>
        <li><NavLink href="/wound-care/advalon" linkText="Advalon" /></li>
        <li><NavLink href="/wound-care/advasyl" linkText="Advasyl" /></li>
        <li><NavLink href="/wound-care/umbilical-cotton-tape" linkText="Cotton Tape" /></li>
        <li><NavLink href="/wound-care/advabond-tape" linkText="Advabond tape" /></li>
      </ul>
    </div>
  );
}