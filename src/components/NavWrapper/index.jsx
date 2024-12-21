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

export default function NavWrapper({ isMenuOpen }) {
    const [currentMenu, setCurrentMenu] = useState(null);
    const submenuContainerRef = useRef(null);

    useEffect(() => {
        if (!isMenuOpen) {
            setCurrentMenu(null);
        }
    }, [isMenuOpen]);

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
        <div className="flex items-start gap-[2vw] mobile:flex-col text-left">
            {/* Conditionally render the main menu */}
            {(currentMenu === null || window.innerWidth > 1024) && (
                <MainNav onSelectMenu={goToMenu} />
            )}
            <div ref={submenuContainerRef} className='pt-[1vw]'>
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
        <ul className='space-y-[0.5vw] mobile:space-y-[2vw] border-r pr-[3vw] border-[#d8d8d8] py-5 main-nav tablet:border-none mobile:border-none pl-[3vw]'>
            <li>
                <NavLink className='text-[1.5vw] tablet:!text-[2.5vw] mobile:!text-[5.5vw]' href={"/"} linkText="Homepage" />
            </li>
            <li>
                <NavLink className='text-[1.5vw] tablet:!text-[2.5vw] mobile:!text-[5.5vw]' href={"/about"} linkText="About Us" />
            </li>
            <li>
                <NavButton className='text-[1.5vw] tablet:!text-[2.5vw] mobile:!text-[5.5vw]' onClick={() => onSelectMenu('products')} linkText="Products" />
            </li>
            <li>
                <NavButton className='text-[1.5vw] tablet:!text-[2.5vw] mobile:!text-[5.5vw]' onClick={() => onSelectMenu('manufacturing')} linkText="Manufacturing" />
            </li>
            <li>
                <NavLink className='text-[1.5vw] tablet:!text-[2.5vw] mobile:!text-[5.5vw]' href={"/career"} linkText="Careers" />
            </li>
            <li>
                <NavLink className='text-[1.5vw] tablet:!text-[2.5vw] mobile:!text-[5.5vw]' href={"/blogs"} linkText="Stories" />
            </li>
            <li>
                <NavLink className='text-[1.5vw] tablet:!text-[2.5vw] mobile:!text-[5.5vw]' href={"/contact-us"} linkText="Contact Us" />
            </li>
            <li>
                <NavLink className='text-[1.5vw] tablet:!text-[2.5vw] mobile:!text-[5.5vw]' href={"/ama"} linkText="Advanced Medtech Academy" />
            </li>
        </ul>
    );
}
