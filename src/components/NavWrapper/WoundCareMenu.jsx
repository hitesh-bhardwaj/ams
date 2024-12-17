import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowLeft } from 'lucide-react';
import { NavButton, NavLink } from './NavLink';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion';

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
        <div>
          <Accordion collapsible type="single">
            <AccordionItem value="item-1">
              <AccordionTrigger>Absorbable Sutures</AccordionTrigger>
              <AccordionContent>
                <ul className='space-y-[0.5vw]'>
                  <li><NavLink href="/advacryl" linkText="Advacryl" /></li>
                  <li><NavLink href="/advacrylplus" linkText="Advacryl Plus" /></li>
                  <li><NavLink href="/advacryl-rapid" linkText="Advacryl Rapid" /></li>
                  <li><NavLink href="/advamryl" linkText="Advamryl" /></li>
                  <li><NavLink href="/advapd" linkText="Advapd" /></li>
                  <li><NavLink href="/advacat" linkText="Advacat" /></li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      {/* <div className="submenu" ref={menuRef}>
      <div className="submenu-header">
        <button className="back-button" onClick={onBack}>Back</button>
        <h2>ABSORBABLE SUTURES</h2>
      </div>
      <ul>
        <li><NavLink href="/advacryl" linkText="Advacryl" /></li>
        <li><NavLink href="/advacrylplus" linkText="Advacryl Plus" /></li>
        <li><NavLink href="/advacryl-rapid" linkText="Advacryl Rapid" /></li>
        <li><NavLink href="/advamryl" linkText="Advamryl" /></li>
        <li><NavLink href="/advapd" linkText="Advapd" /></li>
        <li><NavLink href="/advacat" linkText="Advacat" /></li>
      </ul>
      <h2>NON ABSORBABLE SUTURES</h2>
      <ul>
        <li><NavLink href="/advalene" linkText="Advalene" /></li>
        <li><NavLink href="/advabond" linkText="Advabond" /></li>
        <li><NavLink href="/advalon" linkText="Advalon" /></li>
        <li><NavLink href="/advasyl" linkText="Advasyl" /></li>
        <li><NavLink href="/bondtape" linkText="Cotton Tape" /></li>
        <li><NavLink href="/bondtape" linkText="Advabond tape" /></li>
      </ul>
    </div> */}
    </>
  );
}