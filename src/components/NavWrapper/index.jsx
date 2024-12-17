import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ProductsMenu from './ProductsMenu';
import WoundCareMenu from './WoundCareMenu';
import EndoSurgeryMenu from './EndoSurgeryMenu';
import ManufacturingMenu from './ManufacturingMenu';
import HerniaSolutionsMenu from './HerniaSolutionsMenu';
import InterventionalCardiologyMenu from './InterventionalCardiologyMenu';
import CardiacSurgeryMenu from './CardiacSurgeryMenu';
import { NavLink, NavButton } from './NavLink';

export default function NavWrapper() {
    const [currentMenu, setCurrentMenu] = useState(null);
    const submenuContainerRef = useRef(null);

    useEffect(() => {
        const container = submenuContainerRef.current;
        if (currentMenu) {
            gsap.fromTo(
                container,
                { x: 100, autoAlpha: 0 },
                { x: 0, autoAlpha: 1, duration: 0.5, ease: 'power3.out' }
            );
        } else {
            gsap.to(container, {
                x: 100,
                autoAlpha: 0,
                duration: 0.5,
                ease: 'power3.in'
            });
        }
    }, [currentMenu]);

    const goToMenu = (menuName) => setCurrentMenu(menuName);

    return (
        <div className="flex items-start gap-[3vw] mobile:flex-col text-left">
            <MainNav onSelectMenu={goToMenu} />
            <div ref={submenuContainerRef} className='py-5'>
                {currentMenu === 'products' && (
                    <ProductsMenu onBack={() => goToMenu(null)} onSelectMenu={goToMenu} />
                )}
                {currentMenu === 'manufacturing' && (
                    <ManufacturingMenu onBack={() => goToMenu(null)} />
                )}
                {currentMenu === 'wound-care' && (
                    <WoundCareMenu onBack={() => goToMenu('products')} />
                )}
                {currentMenu === 'endo-surgery' && (
                    <EndoSurgeryMenu onBack={() => goToMenu('products')} />
                )}
                {currentMenu === 'hernia-solutions' && (
                    <HerniaSolutionsMenu onBack={() => goToMenu('products')} />
                )}
                {currentMenu === 'interventional-cardiology' && (
                    <InterventionalCardiologyMenu onBack={() => goToMenu('products')} />
                )}
                {currentMenu === 'cardiac-surgery' && (
                    <CardiacSurgeryMenu onBack={() => goToMenu('products')} />
                )}
            </div>
        </div>
    );
}

function MainNav({ onSelectMenu }) {
    return (
        <ul className='space-y-[0.5vw] border-r pr-[3vw] border-[#d8d8d8] py-5 main-nav'>
            <li>
                <NavLink href={"/"} linkText="Homepage" />
            </li>
            <li>
                <NavLink href={"/about"} linkText="About Us" />
            </li>
            <li>
                <NavButton onClick={() => onSelectMenu('products')} linkText="Products" />
            </li>
            <li>
                <NavButton onClick={() => onSelectMenu('manufacturing')} linkText="Manufacturing" />
            </li>
            <li>
                <NavLink href={"/career"} linkText="Careers" />
            </li>
            <li>
                <NavLink href={"/blogs"} linkText="Stories" />
            </li>
            <li>
                <NavLink href={"/contact-us"} linkText="Contact Us" />
            </li>
            <li>
                <NavLink href={"/ama"} linkText="Advanced Medtech Academy" />
            </li>
        </ul>
    );
}
